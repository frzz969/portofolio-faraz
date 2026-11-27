import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages aktif: frzz969.github.io (divalidasi 28 Nov 2026).
  site: 'https://frzz969.github.io',
  output: 'static',
  base: '/portofolio-faraz',
  build: { inlineStylesheets: 'always' },
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
});
