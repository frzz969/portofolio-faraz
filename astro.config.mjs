import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GANTI: konfirmasi username GitHub Pages
  site: 'https://farasfadhil.github.io',
  output: 'static',
  base: '/portofolio-faraz',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
