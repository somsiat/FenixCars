<?php
/**
 * Obsługa formularza wyceny (POST) na hostingu cyber_folks (Apache + PHP).
 * Astro kopiuje ten plik do dist/ przy buildzie.
 */

declare(strict_types=1);

/**
 * Adres e-mail, na który mają trafiać zgłoszenia z formularza.
 * Ustaw / potwierdź przed wdrożeniem.
 */
const ADRES_ODBIORCY = 'kontakt@fenixcars.pl';

const THANKS_URL = '/dziekujemy';
const HOME_URL = '/';
const SITE_URL = 'https://fenixcars.pl';
const RATE_LIMIT_SECONDS = 30;

const LINK_WHATSAPP_GROUP = 'https://chat.whatsapp.com/GH8gcYqFofiBUatDatHnw0';
const LINK_GOOGLE_REVIEWS = 'https://tiny.pl/vd-g8gcpv';
const LINK_FACEBOOK = 'https://www.facebook.com/FenixCarsImportAut';
const LINK_INSTAGRAM = 'https://www.instagram.com/fenix.cars.rzeszow/';
const LINK_TIKTOK = 'https://www.tiktok.com/@fenix.cars.rzeszow';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . HOME_URL, true, 303);
    exit;
}

/** @param mixed $value */
function pole($value): string
{
    if (!is_string($value)) {
        return '';
    }
    return trim($value);
}

function przytnij(string $value, int $max): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return substr($value, 0, $max);
}

function przekierujKontakt(): void
{
    header('Location: ' . HOME_URL . '?wyslij=blad#kontakt', true, 303);
    exit;
}

function escapeHtml(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function encodeTemat(string $temat): string
{
    return '=?UTF-8?B?' . base64_encode($temat) . '?=';
}

/**
 * @param array<string, string> $extraHeaders
 */
function wyslijMultipart(string $do, string $temat, string $plain, string $html, array $extraHeaders = []): bool
{
    $boundary = 'fenix_' . bin2hex(random_bytes(8));
    $tresc = '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $plain . "\r\n\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=UTF-8\r\n"
        . "Content-Transfer-Encoding: 8bit\r\n\r\n"
        . $html . "\r\n\r\n"
        . '--' . $boundary . '--';

    $naglowki = array_merge([
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: PHP/' . PHP_VERSION,
    ], $extraHeaders);

    return (bool) @mail($do, encodeTemat($temat), $tresc, implode("\r\n", $naglowki));
}

function wierszHtml(string $label, string $value): string
{
    return '<tr>'
        . '<td style="padding:8px 0;vertical-align:top;width:140px;color:#666;font-size:14px;">'
        . escapeHtml($label) . '</td>'
        . '<td style="padding:8px 0;vertical-align:top;font-size:14px;color:#111;">'
        . nl2br(escapeHtml($value)) . '</td>'
        . '</tr>';
}

function tabelaPolHtml(
    string $imie,
    string $telefon,
    string $email,
    string $model,
    string $budzet,
    string $wiadomosc
): string {
    return '<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;max-width:520px;border-collapse:collapse;">'
        . wierszHtml('Imię i nazwisko', $imie)
        . wierszHtml('Telefon', $telefon)
        . wierszHtml('E-mail', $email)
        . wierszHtml('Model', $model)
        . wierszHtml('Budżet', $budzet)
        . wierszHtml('Wiadomość', $wiadomosc)
        . '</table>';
}

function polaPlain(
    string $imie,
    string $telefon,
    string $email,
    string $model,
    string $budzet,
    string $wiadomosc
): string {
    return implode("\n", [
        'Imię i nazwisko: ' . $imie,
        'Telefon: ' . $telefon,
        'E-mail: ' . $email,
        'Model: ' . $model,
        'Budżet: ' . $budzet,
        '',
        'Wiadomość:',
        $wiadomosc,
    ]);
}

// Honeypot — boty wypełniają ukryte pole „firma”
if (pole($_POST['firma'] ?? '') !== '') {
    header('Location: ' . THANKS_URL, true, 303);
    exit;
}

$imie = przytnij(pole($_POST['imie'] ?? ''), 100);
$telefon = przytnij(pole($_POST['telefon'] ?? ''), 30);
$email = przytnij(pole($_POST['email'] ?? ''), 150);
$model = przytnij(pole($_POST['model'] ?? ''), 150);
$budzet = przytnij(pole($_POST['budzet'] ?? ''), 80);
$wiadomosc = przytnij(pole($_POST['wiadomosc'] ?? ''), 3000);
$zgoda = isset($_POST['zgoda']);

if ($imie === '' || $telefon === '' || $email === '' || !$zgoda) {
    przekierujKontakt();
}

if (!preg_match('/^[0-9+\-\s()]+$/', $telefon)) {
    przekierujKontakt();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    przekierujKontakt();
}

$imie = str_replace(["\r", "\n"], '', $imie);
$email = str_replace(["\r", "\n"], '', $email);

$ip = $_SERVER['REMOTE_ADDR'] ?? '';
$ipHash = hash('sha256', $ip);
$ipHashShort = substr($ipHash, 0, 8);
$rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'fenix_wycena_' . $ipHash;

$now = time();
if (is_file($rateFile)) {
    $last = (int) @file_get_contents($rateFile);
    if ($last > 0 && ($now - $last) < RATE_LIMIT_SECONDS) {
        przekierujKontakt();
    }
}

$modelShow = $model !== '' ? $model : '—';
$budzetShow = $budzet !== '' ? $budzet : '—';
$wiadomoscShow = $wiadomosc !== '' ? $wiadomosc : '—';

/* --- Mail do zespołu --- */
$tematZespol = 'Zapytanie o wycenę — Fenix Cars';
$plainZespol = implode("\n", [
    'Nowe zapytanie o wycenę ze strony fenixcars.pl',
    '',
    polaPlain($imie, $telefon, $email, $modelShow, $budzetShow, $wiadomoscShow),
    '',
    '—',
]);
$htmlZespol = '<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8"></head>'
    . '<body style="margin:0;padding:24px;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#111;font-size:14px;line-height:1.45;">'
    . '<p style="margin:0 0 4px;font-size:16px;font-weight:700;">Nowe zapytanie o wycenę</p>'
    . '<p style="margin:0 0 20px;color:#666;font-size:13px;">fenixcars.pl</p>'
    . tabelaPolHtml($imie, $telefon, $email, $modelShow, $budzetShow, $wiadomoscShow)
    . '</body></html>';

$okZespol = wyslijMultipart(ADRES_ODBIORCY, $tematZespol, $plainZespol, $htmlZespol, [
    'From: Formularz Fenix Cars <noreply@fenixcars.pl>',
    'Reply-To: ' . $email,
    'X-Fenix-IP-Hash: ' . $ipHashShort,
]);

if (!$okZespol) {
    przekierujKontakt();
}

/* --- Potwierdzenie dla klienta (błąd nie blokuje podziękowania) --- */
$tematKlient = 'Dziękujemy za zapytanie - Fenix Cars';
$imieShort = preg_match('/^\S+/u', $imie, $m) ? $m[0] : $imie;

$plainKlient = implode("\n", [
    'Dzień dobry' . ($imieShort !== '' ? ', ' . $imieShort : '') . ',',
    '',
    'Dziękujemy za wypełnienie formularza na fenixcars.pl.',
    'Nasi eksperci wkrótce wrócą z odpowiedzią.',
    '',
    'Oto kopia Twojego zapytania:',
    '',
    polaPlain($imie, $telefon, $email, $modelShow, $budzetShow, $wiadomoscShow),
    '',
    '—',
    'Fenix Cars — import aut z USA i Kanady',
    SITE_URL,
    '',
    'Grupa WhatsApp: ' . LINK_WHATSAPP_GROUP,
    'Opinie Google: ' . LINK_GOOGLE_REVIEWS,
    'Facebook: ' . LINK_FACEBOOK,
    'Instagram: ' . LINK_INSTAGRAM,
    'TikTok: ' . LINK_TIKTOK,
    '',
    'Kontakt: ' . ADRES_ODBIORCY,
]);

$htmlKlient = '<!DOCTYPE html><html lang="pl"><head><meta charset="UTF-8"></head>'
    . '<body style="margin:0;padding:24px;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#111;font-size:14px;line-height:1.5;">'
    . '<p style="margin:0 0 16px;">Dzień dobry' . ($imieShort !== '' ? ', ' . escapeHtml($imieShort) : '') . ',</p>'
    . '<p style="margin:0 0 12px;">Dziękujemy za wypełnienie formularza na '
    . '<a href="' . escapeHtml(SITE_URL) . '" style="color:#8a6a18;">fenixcars.pl</a>.</p>'
    . '<p style="margin:0 0 20px;">Nasi eksperci wkrótce wrócą z odpowiedzią.</p>'
    . '<p style="margin:0 0 8px;font-weight:700;">Twoje zapytanie</p>'
    . tabelaPolHtml($imie, $telefon, $email, $modelShow, $budzetShow, $wiadomoscShow)
    . '<hr style="border:none;border-top:1px solid #e5e1d8;margin:28px 0 16px;">'
    . '<p style="margin:0 0 4px;font-weight:700;">Fenix Cars</p>'
    . '<p style="margin:0 0 12px;color:#666;font-size:13px;">Import aut z USA i Kanady · '
    . '<a href="' . escapeHtml(SITE_URL) . '" style="color:#8a6a18;">fenixcars.pl</a></p>'
    . '<p style="margin:0 0 6px;font-size:13px;">'
    . '<a href="' . escapeHtml(LINK_WHATSAPP_GROUP) . '" style="color:#8a6a18;">Grupa WhatsApp</a>'
    . ' · '
    . '<a href="' . escapeHtml(LINK_GOOGLE_REVIEWS) . '" style="color:#8a6a18;">Opinie Google</a>'
    . '</p>'
    . '<p style="margin:0 0 6px;font-size:13px;">'
    . '<a href="' . escapeHtml(LINK_FACEBOOK) . '" style="color:#8a6a18;">Facebook</a>'
    . ' · '
    . '<a href="' . escapeHtml(LINK_INSTAGRAM) . '" style="color:#8a6a18;">Instagram</a>'
    . ' · '
    . '<a href="' . escapeHtml(LINK_TIKTOK) . '" style="color:#8a6a18;">TikTok</a>'
    . '</p>'
    . '<p style="margin:12px 0 0;font-size:13px;color:#666;">Pytania? Napisz: '
    . '<a href="mailto:' . escapeHtml(ADRES_ODBIORCY) . '" style="color:#8a6a18;">'
    . escapeHtml(ADRES_ODBIORCY) . '</a></p>'
    . '</body></html>';

wyslijMultipart($email, $tematKlient, $plainKlient, $htmlKlient, [
    'From: Fenix Cars <' . ADRES_ODBIORCY . '>',
    'Reply-To: ' . ADRES_ODBIORCY,
]);

// Limit nie może blokować klientów przy awarii zapisu
@file_put_contents($rateFile, (string) $now, LOCK_EX);

header('Location: ' . THANKS_URL, true, 303);
exit;
