# Fenix Cars – car import website (USA & Canada)

🇬🇧 English | [🇵🇱 Polski](#-wersja-polska)

Portfolio copy of [fenixcars.pl](https://fenixcars.pl), a website I designed and built for Fenix Cars, a company from Rzeszów, Poland, that imports cars from the USA and Canada.

> This repository is a copy of the project shared for portfolio purposes. Contact details and some links have been replaced with placeholders.

## About

The goal was a fast, low-maintenance business website that clearly explains the import process and collects quote requests.

The site includes:
- a home page with hero, advantages, process, reviews, FAQ and a quote form,
- a "How we import a car" page with a step-by-step process,
- a gallery of completed imports,
- a privacy policy, thank-you page and custom 404 page,
- a PHP-powered contact form with email delivery,
- a floating WhatsApp button and social media links.

## Tech stack

- [Astro](https://astro.build) – static site, no client-side JS framework
- HTML, CSS, TypeScript
- PHP – form handling (`public/wyslij.php`)
- `@astrojs/sitemap` – automatic sitemap
- Inter and Oswald fonts (Fontsource)
- Apache / LiteSpeed (`.htaccess`) – redirects, caching, security headers

## SEO & performance

- JSON-LD structured data (Organization / AutoDealer, Service, FAQPage, BreadcrumbList),
- Open Graph and Twitter Card meta tags with a dedicated share image,
- canonical URLs, sitemap and robots.txt,
- clean URLs without `.html`, HTTPS and non-www redirects,
- optimized images and long-term caching for static assets.

## Project structure

```
src/
  components/   section components (Hero, Process, Faq, Contact...)
  data/         content, company data, reviews and JSON-LD schema
  layouts/      main layout with meta tags
  pages/        pages
  assets/       images and gallery
  styles/       global styles
public/         static files, .htaccess, robots.txt, wyslij.php
```

## Running locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev      # dev server
npm run build    # build to dist
npm run preview  # preview the build
```

The contact form needs a server with PHP, so it won't send messages in `dev` mode.

## Deployment

After `npm run build`, the contents of `dist` are uploaded to Apache/LiteSpeed hosting with PHP (cyber_folks in the original), first to a staging environment and then to production.

## Author

Somsiat – design and development.

---

# 🇵🇱 Wersja polska

Kopia portfolio strony [fenixcars.pl](https://fenixcars.pl), którą zaprojektowałem i zbudowałem dla firmy Fenix Cars z Rzeszowa, zajmującej się importem samochodów z USA i Kanady.

> To repozytorium jest kopią projektu udostępnioną w celach portfolio. Dane kontaktowe i część linków zostały zastąpione przykładowymi.

## O projekcie

Celem było zbudowanie szybkiej, prostej w utrzymaniu strony wizytówki, która jasno tłumaczy proces sprowadzenia auta i zbiera zapytania o wycenę.

Strona zawiera:
- stronę główną z sekcjami: hero, zalety, proces, opinie, FAQ i formularz wyceny,
- podstronę „Jak sprowadzamy auto” z opisem procesu krok po kroku,
- galerię zrealizowanych importów,
- politykę prywatności, stronę z podziękowaniem i własną stronę 404,
- formularz kontaktowy obsługiwany przez PHP z wysyłką e-maili,
- pływający przycisk WhatsApp i linki do social mediów.

## Technologie

- [Astro](https://astro.build) – statyczna strona, bez frameworka JS po stronie klienta
- HTML, CSS, TypeScript
- PHP – obsługa formularza (`public/wyslij.php`)
- `@astrojs/sitemap` – automatyczna mapa strony
- Fonty Inter i Oswald (Fontsource)
- Apache / LiteSpeed (`.htaccess`) – przekierowania, cache, nagłówki bezpieczeństwa

## SEO i wydajność

- dane strukturalne JSON-LD (Organization / AutoDealer, Service, FAQPage, BreadcrumbList),
- meta tagi Open Graph i Twitter Card z dedykowaną grafiką,
- canonical, sitemap i robots.txt,
- czyste adresy URL bez `.html`, przekierowania HTTPS i bez `www`,
- zoptymalizowane obrazy i długi cache dla zasobów statycznych.

## Uruchomienie lokalnie

Wymagany Node.js 22.12 lub nowszy.

```bash
npm install
npm run dev      # serwer deweloperski
npm run build    # build do folderu dist
npm run preview  # podgląd buildu
```

Formularz wymaga serwera z PHP, więc lokalnie w trybie `dev` nie wyśle wiadomości.

## Wdrożenie

Po `npm run build` zawartość folderu `dist` trafia na hosting z Apache/LiteSpeed i PHP (w oryginale cyber_folks). Najpierw na środowisko testowe, potem na produkcję.

## Autor

Somsiat – projekt i wykonanie strony.