# DESIGN: Portofolio Faras Fadhil Firdaus

Versi: 1.0 · 27 November 2026
Berpasangan dengan: PRD.md
Prinsip: jangan mengecilkan potensi, jangan membesar-besarkan pengalaman.

---

## 1. Arah Visual

Bukan CV panjang. **Personal brand digital professional.**

Karakter:
- Modern, clean, minimalis · tapi tidak terasa template AI generik.
- Editorial + teknis: tipografi besar, whitespace lapang, satu warna aksen.
- Hangat (paper), bukan dingin (putih bersih + biru neon).
- Foto monokrom berduotone → menyatu dengan aksen, bukan kotak hitam-putih tempelan.
- Motion halus & native CSS, bukan efek WebGL.

Referensi yang dipakai:
- Abdullah Tariq → layout hero, kartu layanan, featured projects, stats, timeline.
- Brittany Chiang → urutan CV + aksesibilitas + tag stack per peran.
- Yorben Vander Sleyen → bento & konsistensi material warna.
- Korey Wang → section "judgment"/cara berpikir + zero-JS.
- Lee Robinson / Damián Panes → satu kalimat posisi di hero.

---

## 2. Sistem Warna (FINAL, koreksi 28 Nov 2026)

Owner memutuskan mengganti palet oxblood ke palet **NIGHT SKY**. Keputusan ini menggantikan keputusan sebelumnya, bukan tambahan.

| Peran | Hex | Nama | Penggunaan (alasan R-31) |
|---|---|---|---|
| paper | `#CBD8E8` | night sky paper | background utama, lembut dan tidak menyilaukan |
| surface | `#AEC6E5` | sky surface | kartu & panel, satu tingkat lebih gelap dari paper |
| ink | `#1E0F75` | deep navy | teks utama & headline, kontras tinggi di atas paper |
| accent | `#1C1DAB` | electric blue | tombol utama, nav aktif, fokus, duotone portrait |
| hover | `#3785D8` | sky blue | link & hover, masih satu keluarga biru |
| highlight | `#C08CE2` | soft violet | angka, badge status, aksesoris tipis |
| warm | `#E793C6` | dusk pink | MAKSIMAL 1 elemen, stempel/coretan editorial |
| soft | `#EBB2C3` | blush | latar ilustrasi, bukan teks |

Kenapa palet ini (sesuai penilaian owner):
- Lebih hidup dan berkarakter dibanding palet oxblood sebelumnya, tanpa kesan "AI generik" versi owner.
-_gradasi_ biru, ungu, dan pink terasa cohesif karena semua diambil dari satu rumpun warna yang sama.
- Kontras ink `#1E0F75` di paper `#CBD8E8` tinggi, aman untuk teks.
- Delapan warna dibatasi perannya: tidak boleh semua dipakai sekaligus dalam satu layar.

**Aturan pemakaian (R-29/R-31):**
- Maksimal 3 warna dominan per layar: paper, ink, accent.
- Violet & pink hanya aksen, pink maksimal 1 elemen.
- Jangan menambah warna di luar delapan hex di atas.

### Dark mode
| Peran | Hex |
|---|---|
| paper | `#1E0F75` |
| ink | `#CBD8E8` |
| accent | `#3785D8` |
| highlight | `#E793C6` |

Implementasi: `prefers-color-scheme` + toggle dengan localStorage.

### Tailwind v4 `@theme`
```css
@theme {
  --color-paper:     #CBD8E8;
  --color-surface:   #AEC6E5;
  --color-ink:       #1E0F75;
  --color-accent:    #1C1DAB;
  --color-hover:     #3785D8;
  --color-highlight: #C08CE2;
  --color-warm:      #E793C6;
  --color-soft:      #EBB2C3;
  --font-display: "Space Grotesk Variable", sans-serif;
  --font-sans:    "Inter Variable", system-ui, sans-serif;
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-paper:     #1E0F75;
    --color-surface:   #1C1DAB;
    --color-ink:       #CBD8E8;
    --color-accent:    #3785D8;
    --color-highlight: #E793C6;
  }
}
```

---

## 3. Tipografi

- **Display / headline:** Space Grotesk Variable · geometris, teknis, cocok untuk "EXPLORING AI."
- **Body / UI:** Inter Variable · netral, sangat terbaca.
- WOFF2 latin saja; `font-display: swap`.
- **Preload HANYA Space Grotesk** (1 `<link>` dengan `crossorigin`). Inter via `@font-face` biasa.
- Hindari 9 font preload (kesalahan umum). Jangan inline base64 font.

Hierarki:
- H1 hero: `clamp(2.5rem, 7vw, 5.5rem)`, weight 700, tight leading (0.95), 3 baris dengan baris ke-2/ke-3 accent atau ink tebal.
- H2 section: `clamp(1.75rem, 4vw, 2.75rem)`.
- Eyebrow: 0.75rem, uppercase, tracking lebar, brass atau accent.
- Body: 1rem–1.125rem, line-height 1.65, maksimal ~65 char per baris.

---

## 4. Layout & Grid

- Max width: 1180px, margin auto, padding 24px (mobile) → 48px (desktop).
- 12-kolom grid; kartu bento: kartu 01 (What I Do / DEXTRA) span 6–7, sisanya span 3–6.
- Mobile: single column, urutan tetap seperti PRD 4.1–4.9.
- Spacing scale konsisten (4/8/12/16/24/32/48/64/96 px).
- Whitespace lapang · jangan takut kosong.

### Urutan section
1. Hero → 2. About → 3. What I Do → 4. Featured Projects → 5. Experience → 6. Education → 7. Skills → 8. Areas of Interest → 9. CTA/Contact → 10. Footer

---

## 5. Komponen Kunci

### 5.1 Hero
- Kiri: eyebrow "TECHNOLOGY ENTHUSIAST × AI-ASSISTED DEVELOPER", H1 3 baris, paragraf 3 kalimat, 2 CTA, status "Based in Indonesia · Open to Remote..."
- Kanan: foto portrait monokrom duotone.
- CTA primer: accent background, teks paper. CTA sekunder: outline ink.
- LCP photo: `fetchpriority="high"`, JANGAN lazy.

### 5.2 Foto duotone (CSS, 0 KB aset tambahan)
```css
.portrait {
  filter: grayscale(1) contrast(1.1);
  isolation: isolate;
}
.portrait::after {
  content: "";
  position: absolute; inset: 0;
  background: var(--color-accent);
  mix-blend-mode: color;
  opacity: .55;
}
```
Tambah grain tipis: SVG `feTurbulence` sebagai overlay, `opacity: .04`, `mix-blend-mode: overlay`.

### 5.3 Kartu "What I Do"
- 4 kartu, nomor `01`–`04` di pojok dengan brass.
- Kartu 01 lebih besar (bento).
- Tiap kartu: judul + SATU baris ringkasan + ikon Lucide (tree-shaken) atau inline SVG.
- Hover: border accent halus, translateY(-2px), transisi <200ms.

### 5.4 Featured Projects
- DEXTRA: kartu dominan, ilustrasi arsitektur lokal + tag stack + link live demo (prototype / demo interaktif).
- AI Detector: kartu lebih kecil, ilustrasi antarmuka lokal, badge jelas: `LIVE DEMO` + link live demo.
- Experiments: kartu dokumentasi, badge `ONGOING EXPLORATION`.
- Badge status wajib, ini yang menjaga kejujuran konten.

Koreksi status 27 November 2026: AI Detector sebelumnya planned, sekarang LIVE DEMO. DEXTRA tetap BUILT, kini ada link live demo di root. Tidak ada repo GitHub publik untuk DEXTRA, /about = 404.

### 5.5 Experience
- Timeline vertikal: tanggal | peran/perusahaan | bullet ringkas.
- Hindari daftar panjang; maksimal 5 bullet per entri.

### 5.6 Education & Certifications
- Dua kolom: pendidikan (kiri), sertifikasi (kanan) sebagai daftar bersih.
- Tanda "in issuance" untuk BNSP Practical Office Advance.

### 5.7 Skills
- **Tag chips**, BUKAN skill bar persentase (persentase = klaim tanpa bukti).
- 4 grup sesuai PRD 4.7.

### 5.8 Areas of Interest
- Grid tag kecil, 9 item, intro satu kalimat.
- Label eksplisit: "minat & arah eksplorasi, bukan pengalaman profesional".

### 5.9 CTA & Footer
- Headline "OPEN TO NEW POSSIBILITIES." besar.
- Email/GitHub/LinkedIn dengan ikon; tombol copy-email (JS inline 5 baris atau `mailto:`).
- Footer: © 2026 Faras Fadhil Firdaus + nav kecil.

---

## 6. Motion (CSS Native, JS = 0 KB)

```css
@view-transition { navigation: auto; }

@supports (animation-timeline: view()) {
  .reveal {
    animation: fade-up linear both;
    animation-timeline: view();
    animation-range: entry 0% entry 40%;
  }
}
/* PENTING: animation-timeline HARUS setelah shorthand `animation` */

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Dilarang: GSAP, Framer Motion, WebGL, video background, scroll hijacking.

---

## 7. Aset & Gambar

- Format: AVIF → WebP → fallback (picture/srcset).
- `width` + `height` wajib (CLS).
- `srcset` dengan descriptor `w` WAJIB disertai `sizes`.
- Hero: `fetchpriority=high`, tidak lazy. Bawah fold: `loading=lazy`.
- Portrait: 2 ukuran (640w, 1280w).
- og-image: 1200×630 PNG/WebP (tidak dimuat di halaman).

### Daftar aset
| File | Sumber | Status |
|---|---|---|
| portrait-640.avif/.webp | Foto Faras | harus disediakan |
| dextra-dashboard.svg | Ilustrasi arsitektur DEXTRA lokal, bukan screenshot produk asli | sudah tersedia, dipakai |
| dextra-architecture.svg | Diagram arsitektur DEXTRA | harus dibuat |
| ai-detector-mockup.svg | Ilustrasi antarmuka buatan sendiri, live demo tersedia | sudah tersedia, dipakai |
| experiments.svg | Dokumentasi eksperimen sendiri | sudah tersedia, dipakai |
| operations.webp | Contoh spreadsheet/dokumen latihan | harus disediakan |
| cv-faras.pdf | CV nyata | harus disediakan, regenerate 27 November 2026 |

Aset `dextra-dashboard.svg` adalah ilustrasi arsitektur lokal, bukan screenshot produk asli. Gunakan caption "ilustrasi arsitektur", jangan "screenshot produk asli".

**Integritas:** 4 URL `images.openai.com/...` (Dribbble/iF Design/Medium) adalah referensi visual ORANG LAIN · bukan aset produksi, bukan karya Faras. Jangan diklaim sebagai hasil kerja. Jika dipakai sebagai ilustrasi, beri kredit.

---

## 8. SEO & Metadata

- JSON-LD `ProfilePage` dengan `mainEntity: Person` (name, jobTitle, url, image, sameAs GitHub/LinkedIn).
- `<title>`: "Faras Fadhil Firdaus · Technology Enthusiast & AI-Assisted Developer".
- Meta description: 1 kalimat ringkas sesuai hero.
- `og:image` 1200×630 + `og:image:width/height`.
- `robots.txt` sederhana + `Sitemap: .../sitemap-index.xml`.
- `llms.txt` ~10 baris: H1 + ringkasan bidang + link ke versi `.md` CV. (Bonus untuk agent; bukan faktor ranking Google.)

---

## 9. Responsive

| Breakpoint | Perilaku |
|---|---|
| < 640px | single column, H1 ~2.5rem, nav hamburger, kartu stack |
| 640–1024px | grid 2 kolom untuk kartu, foto di bawah teks |
| > 1024px | split hero 50/50, bento 12 kolom, sticky nav |

Pastikan: tidak ada horizontal overflow di 375px; tombol min 44×44px; teks kontras.

---

## 10. Definition of Done (Visual)

1. Warna tepat NIGHT SKY (8 hex sesuai Bab 2), maksimal 3 dominan per layar, pink hanya 1 elemen.
2. Foto monokrom duotone menyatu dengan accent + grain halus.
3. DEXTRA mendominasi featured projects.
4. Badge status proyek terlihat jelas.
5. Skill memakai tag, bukan persentase.
6. Tidak ada klaim AI research/linguistik sebagai experience.
7. BNSP Practical Office Advance berstatus "dalam proses terbit".
8. Motion halus, `prefers-reduced-motion` aktif, JS = 0 KB.
9. Mobile 375px rapi, tidak overflow.
10. Semua gambar adalah karya/aset sendiri atau diberi kredit.
