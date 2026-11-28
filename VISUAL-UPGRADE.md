# Visual Upgrade Direction v1.0 — berlaku sebagai supplement DESIGN.md v4.0; arah dasar tetap Professional Modern Editorial

Tanggal: 28 November 2026 · Status: arah desain untuk Phase 3, **dokumen saja, belum ada implementasi kode**.

Dokumen ini menambah *kedalaman visual, ritme interaksi, dan bahasa gerak* di atas fondasi v4.0. Ia tidak menggantikan, menimpa, atau menulis ulang `DESIGN.md` v4.0 dan `PRD.md` v4.0. Jika ada konflik, keduanya tetap menjadi sumber kebenaran untuk konten, fakta, palet inti, dan struktur; dokumen ini hanya mengatur **bagaimana permukaan dan geraknya dirasakan**.

**Catatan konflik yang perlu disadari:** `DESIGN.md` Bab 2 dan 9 melarang `linear-gradient`/`radial-gradient`/glow/blur dekoratif. Instruksi owner Phase 3 meminta gradient abu-abu organik, noise halus, dan ambient light. Dokumen ini mengajukan **pengecualian sempit dan terukur** (Bab 3), bukan penghapusan larangan. Pengecualian itu harus disetujui owner sebelum diimplementasikan, lalu dicatat sebagai amandemen terpisah pada dokumen yang final. Sampai saat itu, `DESIGN.md` tetap berlaku apa adanya.

Metode: `antislop` core, `antislop-ui`, `antislop-copywriting`, `antislop-human`, `emil-design-eng`, `break-ui`, `learn-taste`, `review-animations`, Vercel `web-design-guidelines`, Matt `code-review`. Mode `antislop` = **DURING** (sesuai PRD §10.1). Cloudflare tidak dipakai. Semua pasangan warna baru diukur dengan `contrast-check.py`, bukan dikira (PRD N4, DESIGN Bab 2).

---

## 1. Prinsip: tingkatkan, jangan ganti

Fondasi yang **dipertahankan tanpa perubahan**:

| Fondasi | Status |
|---|---|
| 7 token warna: `#F4F5F7`, `#FFFFFF`, `#E8EBF0`, `#191D26`, `#687180`, `#DDE1E7`, `#365FE8` (+ fallback `#525B6B`) | Tidak ada hex baru sebagai warna identitas |
| Tipografi Space Grotesk (display), Inter (body), mono (metadata), self-hosted WOFF2 | Font baru tidak ditambahkan |
| Penomoran editorial `01`–`06`, hairline biru 1px, metadata kapital, status statis `OPEN TO OPPORTUNITIES` | Signature tetap |
| Dua screenshot asli (`dextra.webp`, `ai-detector.webp`) | **Tidak diubah**, tidak di-recreate, tidak di-upscale jadi mockup |
| Dua case study, status jujur (DEXTRA prototipe; AI Detector indikator tidak pasti), dua URL demo berbeda | Tidak diubah |
| Navbar sticky dengan `FFF`, active indicator, mobile menu 44px | Tidak diubah |
| Perbaikan blank-atas hero (3 commit terakhir) | **Tidak ditimpa**; tidak ada padding/centering baru di hero |
| `prefers-reduced-motion`, `<noscript>`, gate `html.has-motion`, safety timeout | Dipertahankan dan diperluas |
| Fakta dari `CV-FARAS.md` & `LINKEDIN-SIAP-PASTE.md` | Sumber kebenaran tunggal; Phase 3 tidak menyentuhnya |
| `src/`, `index*.html`, `public/`, `package.json`, `DESIGN.md`, `PRD.md` | Read-only untuk tugas ini |

R-31: arah baru menambah rasa pada struktur yang sudah benar, karena mengganti struktur akan mengulang kerja yang sudah disetujui owner dan merusak stabilitas konten.

---

## 2. Visual depth system

Empat layer, semua dalam keluarga abu-abu yang sudah ada. Tidak ada WebGL, tidak ada canvas, tidak ada dependency baru.

| Layer | Peran | Nilai |
|---|---|---|
| L0 Base | Permukaan kerja default | `#F4F5F7` |
| L1 Mist | Area ambien/hero/project feature saja | `#E8EBF0` sebagai linear/radial sangat lembut, dipusatkan di belakang subjek, bukan seluruh viewport |
| L2 Silver | Satu highlight arah cahaya | `#DDE1E7` pada opacity 0.35–0.55, bentuk elips/band, blur **tidak dipakai** untuk mensimulasikan cahaya; transisi warna yang lembut cukup |
| L3 Grain | Tekstur kertas, bukan dekorasi | noise SVG inline (feTurbulence) atau data-URI, `opacity: 0.025–0.04`, `mix-blend-mode: multiply`, `pointer-events: none`, `position: absolute; inset: 0` |

Contoh token & CSS ringan (untuk dievaluasi, bukan dipakai sekarang):

```css
:root {
  --depth-base: #F4F5F7;
  --depth-mist: #E8EBF0;
  --depth-silver: #DDE1E7;
  --grain-opacity: 0.03;
  --ambient-duration: 14s;
}
.ambient {
  position: relative;
  isolation: isolate;
  background:
    radial-gradient(60% 45% at 78% 32%, var(--depth-silver) 0%, transparent 70%),
    linear-gradient(180deg, var(--depth-base) 0%, var(--depth-mist) 100%);
}
.ambient::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: var(--grain-opacity);
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}
```

**Aturan keras:**

1. Gradient/noise **hanya** di hero, satu project feature, dan satu area ambien opsional. Tidak di About, How I Work, Experience, Skills, Education, Interests, Contact.
2. Contact tetap `#191D26` polos. Tidak ada "hitam pekat di semua section", tidak ada dark gradient.
3. Teks selalu di atas permukaan netral yang kontrasnya terukur. Untuk layer L1/L2, pakai tabel ini (diukur 28 Nov 2026):

| Pasangan | Rasio | Verdict |
|---|---|---|
| `#191D26` / `#F4F5F7` | 15.46:1 | PASS |
| `#191D26` / `#E8EBF0` | 14.11:1 | PASS |
| `#191D26` / `#DDE1E7` | 12.85:1 | PASS |
| `#687180` / `#F4F5F7` | 4.52:1 | PASS (margin tipis) |
| `#525B6B` / `#E8EBF0` | 5.73:1 | PASS, wajib untuk teks kecil di mist |
| `#365FE8` / `#191D26` | 3.18:1 | **GAGAL untuk teks normal**, lolos untuk garis/fokus (≥3:1) |

4. Biru tetap **1px**, bukan glow, bukan fill, bukan background. Di atas `#191D26`, `#365FE8` hanya boleh sebagai garis/focus ring, bukan teks kecil.
5. Glassmorphism maksimal 1 elemen opsional (misalnya overlay lightbox), bukan navbar + kartu + modal sekaligus. Tidak ada shadow dekoratif; elevasi hanya dengan 1px border.
6. Satu objek 3D monochrome hanya jika bisa dirender sebagai WebP statis ringan dengan pencahayaan graphite→silver dan tidak menggantikan screenshot asli. Jika perlu WebGL untuk itu, **jangan dibuat**.

R-31: kedalaman dipakai untuk memberi arah cahaya dan memisahkan foreground dari latar, karena permukaan rata membuat potret dan screenshot tampak mengambang tanpa alasan.

---

## 3. Typography upgrade

Skala baru yang masih hierarkis, bukan "semua heading besar":

| Peran | Lama (v4.0) | Baru | Alasan satu baris (R-31) |
|---|---|---|---|
| Hero H1 desktop | 56–88px | **72–104px**, `clamp(4rem, 7.2vw, 6.5rem)`, `text-wrap: balance` | Nama adalah identitas; kenaikan ~16px memberi kehadiran tanpa memecah kata di 390px |
| Section heading | 32–48px | **40–56px**, `clamp(2.25rem, 3.6vw, 3.5rem)` | Section perlu berat yang sama dengan feature project agar ritme tidak turun drastis |
| Sub-heading / h3 | 24–28px | 26–32px | Menjaga jarak dengan h2 agar hirarki tetap terbaca |
| Body | 15–17px | **16–18px**, line-height 1.6, max 60–68ch | Baris sedikit lebih panjang nyaman untuk narasi profesional di layar lebar |
| Metadata mono | ~0.7rem | **0.75rem**, `font-variant-numeric: tabular-nums`, tracking terukur | Angka dan status sejajar rapi tanpa menambah warna |
| Eyebrow | 0.7rem | 0.75rem, tetap uppercase | Konsisten dengan metadata, bukan badge pill baru |

**Larangan:** jangan membuat semua heading 56px. About, Experience, Education, Skills, Interests tetap di 40–48px. Hanya hero yang boleh menyentuh 104px, dan hanya di ≥1200px. Di 390px hero kembali ke ~40–48px seperti baseline. `font-display: swap`, preload tetap HANYA Space Grotesk.

R-31: skala naik untuk memberi karakter editorial, tapi peran tiap heading tetap membatasi ukurannya supaya bukti proyek tidak kalah dari dekorasi tipografi.

---

## 4. Hero direction (berdasarkan screenshot baseline yang dibaca)

**Yang sudah bagus dan dipertahankan persis:**
- Split light editorial: kiri nama + role + narasi + dua CTA, kanan potret monokram dalam tile biru-abu muda.
- Garis biru tipis di bawah `AI & DIGITAL OPERATIONS ENTHUSIAST` — jangan dihapus atau diganti warna.
- Dua CTA: primary gelap `Explore My Work`, secondary outline `Get in Touch`; keduanya 44px+.
- Metadata `FFF / PORTFOLIO 2026`, `01 / INTRODUCTION`, dan strip `AI & TECHNOLOGY · DIGITAL OPERATIONS · TECHNICAL RESEARCH` di bawah.
- Hero kini mulai dari atas dengan benar. **Jangan menambah padding-top, `align-items: center`, atau `min-height` baru yang mengembalikan ruang kosong.**

**Yang bisa diperkuat (masih monochrome):**
- Ambient radial `#DDE1E7` → `#E8EBF0` di belakang tile potret, radius ~60% tile, bergerak 14–20s sangat lambat. Tidak menyentuh teks.
- Kinetic underline: garis biru 1px yang melebar dari 28px ke 100% lebar role line saat hero masuk viewport, 550ms ease-out. Ini menggantikan, bukan menambah, garis yang sudah ada.
- Mask reveal pada nama: `clip-path: inset(0 0 100% 0)` → `inset(0 0 0 0)` dengan stagger per baris 80ms. Bukan opacity-only.
- Parallax potret maksimal 6–8px saat scroll, hanya di desktop, nonaktif di touch.
- Satu visual abstrak monochrome opsional: elips graphite→silver dengan grain, ditempatkan di pojok kanan bawah hero di belakang metadata, bukan objek 3D penuh. Boleh tidak dibuat sama sekali.

R-31: gerak hero mengarahkan mata dari nama ke role ke CTA, karena baseline sudah benar secara struktural dan hanya perlu ritme, bukan komposisi baru.

---

## 5. Projects presentation

- Screenshot asli `dextra.webp` dan `ai-detector.webp` tetap menjadi bukti. **Tidak diubah, tidak di-crop ulang jadi mockup, tidak ditimpa gradient.**
- Image reveal: `clip-path` dari bawah + scale 1.03 → 1.0 saat masuk viewport, 500–600ms. `width`/`height` eksplisit tetap wajib (CLS).
- Hover preview: pada DEXTRA feature, gambar bisa bergeser 4–6px dan menampilkan caption mono "CAPTURED FROM THE LIVE DASHBOARD · 28 NOV 2026" lebih jelas. Tidak ada zoom dekoratif besar.
- Asimetri dipertahankan: DEXTRA dominan satu sisi, dua entri pendukung tidak simetris penuh. Tidak ada kartu kosong, tidak ada bento grid, tidak ada 3 kartu identik.
- Lightbox/gallery ringan: satu overlay, gambar asli same-file, `overscroll-behavior: contain`, `Escape` menutup, focus kembali ke trigger, tombol close 44px, `aria-label`. Tidak ada library berat.
- Metadata jujur: `BUILT · Prototype`, `LIVE DEMO · prototype interaktif`, `ONGOING EXPLORATION`. Dua link demo tetap berbeda. Tidak ada sertifikat, metrik, atau klien tambahan.

R-31: interaksi di projects memperkuat bukti yang sudah ada, karena menyembunyikan atau menghias screenshot asli justru melemahkan alasan portofolio ini ada.

---

## 6. Certifications & education — aturan keras

**Tidak ada asset sertifikat asli di `public/` saat dokumen ini ditulis.** Maka:

1. **Dilarang** membuat thumbnail sertifikat, scan palsu, badge bergambar, atau mockup kartu sertifikat.
2. Tampilkan informasi **berbasis data yang benar**, dengan tipografi dan garis 1px, bukan gambar:
   - **MTCNA** (MikroTik Certified Network Associate), issued 2025.
   - **Junior Fiber Optic Cable Jointer** (BNSP), issued 2026.
   - **Practical Office Advance (POA)**, BPVP Surakarta, training selesai, 33 hari pasca lulus, certificate obtained after training.
   - **BNSP Practical Office Advance**, status **in issuance / printing process**. Jangan diubah jadi "issued".
   - Siklus pendidikan `2023 / 2026`, SMKN 1 Sukoharjo, TJKT. Tanpa DPET, 260 jam, atau 9 unit.
3. Lightbox sertifikat **hanya** boleh dibuat jika owner menyediakan file asli. Sebelum itu, tidak ada ikon "lihat sertifikat" yang tidak bisa dibuka.
4. Baris "All credentials verifiable via issuing registry IDs upon inquiry" tetap diperlakukan sebagai klaim yang jujur sesuai CV, bukan diperkembang menjadi daftar ID.

R-31: kredensial ditampilkan sebagai daftar teks yang bisa dicek, karena mengarang visual resmi akan merusak kepercayaan yang justru sedang dibangun.

---

## 7. Motion language

Satu sistem gerak saja. **Pilih Motion atau GSAP, jangan keduanya untuk pekerjaan yang sama.** Karena proyek Astro dengan JS minimal (PRD N2), **default: CSS + IntersectionObserver yang sudah ada**. Motion/GSAP hanya dipertimbangkan jika ada kebutuhan gerak yang tidak bisa dilakukan CSS (misalnya spring cursor), dan itu pun setelah riset Bab 8 selesai.

Easing kustom (dari `emil-design-eng`):

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

| Efek | Durasi | Ease | Trigger | Media | Alasan (R-31) |
|---|---|---|---|---|---|
| Hero mask reveal (nama, per baris) | 550ms, stagger 80ms | `ease-out` | Load, gate `has-motion` | CSS `clip-path` | Nama adalah focal point pertama; mask memberi arah tanpa oversized |
| Underline biru melebar | 550ms | `ease-out` | Bersama hero | CSS `width`/`transform: scaleX` (1px, aman) | Mengganti garis statis jadi penanda ritme |
| Section entrance | 450–600ms | `ease-out` | IntersectionObserver | CSS `transform`, `opacity` | Konten muncul saat dibaca, bukan semua sekaligus |
| Stagger item related | 60–100ms | linear delay | IntersectionObserver | CSS `--stagger` | Grup kecil terasa satu kesatuan |
| Hover CTA / link / project | 180–250ms | `ease-out` / `ease` | `@media (hover:hover) and (pointer:fine)` | CSS `transform`, `border-color`, `background` | Feedback instan, tidak mengganggu keyboard |
| Button press | 100–160ms masuk, 180ms keluar | `ease-out` | `:active` | CSS `scale(0.97)` | Tekanan terasa dijawab; keluar lebih lambat dari masuk |
| Image scale on reveal | 500–600ms, 1.03 → 1.0 | `ease-out` | IntersectionObserver | CSS `transform` | Screenshot asli "mendarat", bukan zoom dekoratif |
| Lightbox buka/tutup | 200–300ms | `ease-out` | Klik trigger | CSS `opacity` + `scale(0.97)` | Overlay occasional, boleh sedikit lebih lama |
| Magnetic button | 180–220ms, spring ringan | spring `bounce 0.1–0.2` | Pointer fine, dekat CTA | Motion (opsional) | Memberi rasa tarik pada satu CTA utama, bukan semua tombol |
| Cursor spotlight | 8–20s ambient / mengikuti pointer dengan spring | linear / spring | Pointer fine, non-intrusive | CSS radial + Motion opsional | Cahaya mengikuti perhatian, tapi tidak mengganti kursor |
| Ambient light drift | 8–20s, sangat lambat | `ease-in-out` | Loop saat `has-motion` | CSS `@keyframes` pada `transform` | Memberi napas tanpa menarik perhatian dari teks |
| Parallax potret | max 6–8px | linear | Scroll, desktop saja | CSS `transform` dari observer | Kedalaman tipis, tidak scroll hijacking |
| Marquee (maks. satu strip) | 28–36s per loop | linear | Auto, pause on hover/focus | CSS `@keyframes` | Ritme latar yang bisa dihentikan |

**Reduced motion:** semua gerak non-esensial mati. Yang tersisa hanya perubahan warna/opacity instan untuk state dan fokus. Ambient, parallax, marquee, spotlight, magnetic, kinetic type, dan image scale **dimatikan**. Screenshot dan teks tetap tampil penuh. Gate `html.has-motion`, `<noscript>`, dan safety timeout dari DESIGN Bab 6 tetap dipakai.

**Review-animations filter (wajib sebelum implementasi):** tidak ada `transition: all`, tidak ada `scale(0)`, tidak ada `ease-in` pada UI, tidak ada animasi >300ms pada elemen interaktif (kecuali lightbox/overlay), tidak ada animasi layout property (`width` tinggi elemen, `margin`, `top`), hover digate di pointer fine, dan tidak ada animasi pada aksi keyboard yang berulang.

R-31: gerak hanya untuk membimbing perhatian dan memberi feedback, karena MOTION 1 di DESIGN v4.0 tidak berubah.

---

## 8. Komponen/library decision framework

**Belum ada library yang dipilih.** Kandidat yang akan dievaluasi: Motion (Framer Motion), GSAP, Magic UI, React Bits, Aceternity UI. Ini **daftar untuk riset explorer**, bukan keputusan.

Kriteria sebelum install, semua harus ya:

| Kriteria | Pertanyaan |
|---|---|
| Demo dibuka | Saya sudah membuka demo aslinya di browser dan mencatat perilaku hover/focus/reduced-motion, bukan hanya melihat screenshot README |
| Lisensi | Lisensi jelas, komersial aman, atribusi tercatat jika diperlukan |
| Ukuran | Bundle inkremental reasonable untuk static site; tidak ada dependency berantai besar |
| Kompatibilitas Astro | Berjalan sebagai island atau vanilla CSS/JS; tidak memaksa React root |
| Tidak mengganti yang sudah bagus | Tidak menimpa hairline biru, penomoran, status, atau screenshot asli |
| Reduced-motion | Bisa dimatikan penuh tanpa state hilang |
| Satu sistem gerak | Jika Motion dipilih, GSAP tidak dipakai untuk pekerjaan yang sama |
| Fallback | Tanpa JS, konten tetap terbaca |

Keputusan akhir diambil setelah explorer selesai dan dicatat di dokumen terpisah dengan alasan satu baris per pilihan (R-31).

---

## 9. Responsive & a11y guardrails

| Breakpoint | Perlakuan |
|---|---|
| 1440 | Split hero penuh, H1 sampai 104px, whitespace lapang, ambient di belakang potret |
| 1024 | Split melemah jadi satu kolom berirama, H1 ~72px, tidak ada overflow |
| 390 | Single column, H1 ~40–48px, CTA full-width 44px+, potret turun setelah CTA seperti baseline |

Guardrails:

- Tap target ≥44px, termasuk close button lightbox dan mobile menu.
- Semua pasangan teks/latar minimal AA 4.5:1 (large 3:1); tabel Bab 2 jadi acuan, pasangan baru diukur ulang.
- `:focus-visible` biru 1px di terang; di atas `#191D26` tetap pakai biru sebagai garis (3.18:1 lolos non-teks), jangan sebagai teks kecil.
- Urutan heading tidak loncat, satu `<h1>`, `<main>` jelas, skip link tidak tertutup sticky navbar (`scroll-margin-top`).
- Gambar punya `alt` bermakna atau `alt=""` untuk dekoratif; screenshot asli dapat caption sumber.
- `overflow-x: clip` sebagai penjaga, bukan solusi; teks tidak ter-clip.
- Ambient/noise `pointer-events: none` dan `aria-hidden` bila berupa elemen.
- Lightbox: `Escape` menutup, focus kembali ke trigger, tidak ada keyboard trap.
- `touch-action: manipulation`; pointer effects mati di perangkat touch.
- `text-wrap: balance` pada heading agar tidak ada widow.

R-31: guardrails membuat kekayaan visual tetap bisa dipakai dengan keyboard, layar kecil, dan pembaca layar.

---

## 10. Do / Don't checklist

**DO**
- [ ] Pertahankan 7 token, Space Grotesk/Inter/mono, numbering 01–06, hairline biru 1px.
- [ ] Screenshot asli dua proyek dan dua case study tetap utuh.
- [ ] Gradient abu-abu hanya di hero + satu project feature + satu ambien.
- [ ] Noise 0.025–0.04, `pointer-events: none`, kontras diukur.
- [ ] Hero naik ke 72–104px desktop tanpa mengembalikan blank-atas.
- [ ] Mask reveal + underline, stagger 80ms, ease-out.
- [ ] Satu sistem gerak, reduced-motion mematikan semua non-esensial.
- [ ] Teks kredensial jujur tanpa thumbnail.
- [ ] Riset library selesai sebelum memilih, lisensi & Astro compatibility dicek.

**DON'T**
- [ ] Jangan ungu, neon, electric blue, glow, atau biru jadi fill.
- [ ] Jangan hitam pekat di semua section, glassmorphism berlebih, semua section jadi kartu, bento grid, PPT/SaaS template.
- [ ] Jangan WebGL berat, custom cursor besar, scroll hijacking, marquee lebih dari satu.
- [ ] Jangan sertifikat palsu, ID/URL rekaan, metrik atau klien tambahan.
- [ ] Jangan ubah UI copy existing, DATA, atau commit/push/build/install dalam tugas ini.

---

## Validasi (dilaporkan, bukan diklaim visual lulus)

| # | Pemeriksaan | Hasil | Bukti |
|---|---|---|---|
| 1 | Screenshot baseline benar-benar dibaca | **PASS** | `live-hero-top.png`: split hero, nama besar dengan garis biru di bawah role, potret monokram di tile abu, dua CTA, status dot, strip metadata 3 kolom; `live-projects.png`: marquee gelap satu strip, heading `03 / SELECTED WORK` dengan "Built to be examined, not just shown", DEXTRA feature dengan screenshot dashboard asli + badge `Prototype` + blok GOVERNANCE; `live-hero-mobile-top.png`: single column, tombol `Open menu`, CTA full-width, potret turun setelah CTA. Perbaikan blank-atas terlihat sudah aktif di desktop dan mobile. |
| 2 | Tidak mengubah DESIGN.md / PRD.md / src / index*.html / public / package.json | **PASS** | `git status --short` sebelum penulisan bersih; setelah penulisan hanya `?? VISUAL-UPGRADE.md`. Tidak ada build, install, commit, atau push. |
| 3 | Palet monochrome + blue 5% tetap | **PASS** | Tidak ada hex identitas baru. Turunan yang disebut (`#DDE1E7` 0.35–0.55, grain 0.025–0.04) berasal dari token existing. Tidak ada ungu/neon/electric blue. Kontras diukur: `#191D26/#E8EBF0` 14.11:1, `#191D26/#DDE1E7` 12.85:1, `#525B6B/#E8EBF0` 5.73:1, `#365FE8/#191D26` 3.18:1 (garis/fokus saja). |
| 4 | Fakta jujur & 2 screenshot "tidak diubah" | **PASS** | Dua WebP asli disebut sebagai tidak diubah; status DEXTRA prototipe, AI Detector indikator tidak pasti, Experiments ongoing, peran anggota bukan leader, BNSP in issuance, POA 33 hari dipertahankan. Dua URL demo berbeda tidak disatukan. |
| 5 | Tidak ada sertifikat palsu | **PASS** | Tidak ada asset sertifikat di `public/`. Dokumen melarang thumbnail/scan palsu dan mengharuskan daftar teks berbasis data; lightbox hanya jika file asli tersedia. |
| 6 | Em dash tidak mengubah UI copy | **PASS** | Em dash hanya di judul/prosa dokumen. Semua contoh UI copy memakai titik, koma, atau tanda hubung biasa; tidak ada contoh yang mengganti copy existing. |
| 7 | Motion & skill alignment | **PASS (dokumen)** | Durasi/ease mengikuti `review-animations` dan `emil-design-eng`; framework library masih kriteria, bukan keputusan. Cloudflare tidak disebut sebagai dipakai. |
| 8 | Visual verification | **SKIP (limitation)** | Lingkungan Android/Termux tidak mendukung Playwright/Chromium. Tidak ada klaim lulus visual; ini sesuai PRD §10.5. |

R-31 terakhir: dokumen ini sengaja berhenti di arah dan kriteria, karena keputusan desain yang belum diverifikasi di browser tidak boleh diubah jadi kode.
