// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domena docelowa
  site: 'https://fenixcars.pl',
  // 'never' + format 'file' → galeria.html; Apache (.htaccess) serwuje /galeria bez ukośnika.
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/dziekujemy') && !page.includes('/404'),
    }),
  ],
});
