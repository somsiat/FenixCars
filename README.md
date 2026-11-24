# Fenix Cars

Strona firmowa **Fenix Cars** — import samochodów z USA i Kanady (Rzeszów / Podkarpacie).

## Stack

- [Astro](https://astro.build) — statyczny build (`output: static`)
- Hosting docelowy: **cyber_folks** (Apache + PHP)
- Deploy: GitHub Actions → FTPS do `public_html/`

Wcześniej projekt był hostowany / testowany na Netlify i Vercel.

## Komendy

```bash
npm ci
npm run dev      # lokalnie: http://localhost:4321
npm run build    # wynik w dist/
npm run preview  # podgląd buildu
```

## Deploy (cyber_folks)

Workflow: `.github/workflows/deploy.yml` — po pushu na `main` buduje stronę i wysyła zawartość `dist/` na serwer.

Wymagane sekrety w GitHub Actions:

- `FTP_SERVER`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Protokół: FTPS, katalog docelowy: `public_html/`.

## Formularz wyceny

Formularz POST trafia do `public/wyslij.php` (kopiowany do `dist/` przy buildzie). Skrypt wysyła e-mail przez PHP `mail()`.

Przed wdrożeniem ustaw stałą **`ADRES_ODBIORCY`** na górze `public/wyslij.php`.

## Galeria

Wrzuć zdjęcia do `src/assets/galeria/` (jpg / jpeg / png / webp / avif). Strona `/galeria` zbiera je automatycznie przy buildzie.

## Ważne pliki w `public/`

| Plik | Rola |
|------|------|
| `.htaccess` | HTTPS, www→bez www, URL-e bez `.html`, cache, nagłówki, 404 |
| `wyslij.php` | Obsługa formularza kontaktowego |
| `og-fenix-cars.jpg` | Obraz do udostępniania (1200×630) — **do dostarczenia** |
