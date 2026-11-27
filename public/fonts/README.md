# Fonts (lokal, tanpa CDN)

Letakkan file WOFF2 latin di folder ini:

- `space-grotesk-latin.woff2` — Space Grotesk Variable (display / headline)
- `inter-latin.woff2` — Inter Variable (body / UI)

Sumber: paket `@fontsource-variable/space-grotesk` dan `@fontsource-variable/inter`, ambil berkas latin WOFF2 dari `files/` lalu salin ke sini (atau install paketnya dan copy saat build). Jangan pakai Google Fonts CDN.

Path publik:

- `/fonts/space-grotesk-latin.woff2`
- `/fonts/inter-latin.woff2`

Contoh `@font-face`:

```css
@font-face {
  font-family: "Space Grotesk Variable";
  src: url("/fonts/space-grotesk-latin.woff2") format("woff2");
  font-weight: 300 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Inter Variable";
  src: url("/fonts/inter-latin.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Preload HANYA Space Grotesk** di `<head>` (1 link dengan `crossorigin`), bukan keduanya:

```html
<link rel="preload" href="/fonts/space-grotesk-latin.woff2" as="font" type="font/woff2" crossorigin>
```

Inter tetap dimuat lewat `@font-face` biasa. Jangan inline base64 font.
