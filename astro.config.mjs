import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages aktif: frzz969.github.io (divalidasi 28 Nov 2026).
  site: 'https://frzz969.github.io',
  output: 'static',
  base: '/portofolio-faraz',
  build: { inlineStylesheets: 'always' },
  // React island hanya untuk komponen interaktif; halaman tetap static.
  integrations: [react(), sitemap()],
});
