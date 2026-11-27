# DESIGN — Portofolio Faras Fadhil Firdaus

Versi 3.0 · 28 November 2026
Arah: **Dark Technical Editorial × Industrial Monochrome**
Menggantikan arah Modern Monochrome / Creative Editorial (versi 2.0) dan seluruh arah lebih lama (oxblood, NIGHT SKY). Keputusan owner bersifat final. Sumber kebenaran tampilan: build Astro di `src/`; `index.html` dan `index-mobile.html` adalah artefak statis yang mengikuti arah yang sama.

---

## 1. Arah Visual

Personal brand Faras: technology enthusiast & AI-assisted developer dari Indonesia, open to remote.

Kepribadian visual:
- Technical, editorial, industrial. Berani lewat skala, bukan warna.
- Monokrom ketat. Kontras dipakai sebagai ritme, bukan dekorasi.
- Satu focal point per layar. Asimetri disengaja, bukan bento grid seragam.
- Tipografi berani dan oversized: angka section adalah elemen visual, bukan label kecil.
- Cocok untuk recruiter, klien, dan peluang internasional.

Prinsip (dari aturan antislop, R-31):
- Tiap keputusan visual punya alasan satu baris.
- Whitespace sebagai struktur, bukan sisa.
- Nol aksen warna. Hierarki lewat ukuran, weight, garis 1px, dan inversi hitam/putih.
- Satu accent moment: baris headline ke-2 di hero berbentuk outline (`-webkit-text-stroke: 1.5px #FFFFFF`, `color: transparent`) di atas deep black.
- Dilarang: gradien, blur dekoratif, glow, shadow everywhere, emoji dekoratif, bento mosaic, fake terminal, capsule badge berlebih, colored stripe tanpa fungsi.

### Ritme kontras antar section

Section berganti permukaan secara disengaja, bukan sekadar alternating background:

| Section | Permukaan | Alasan (R-31) |
|---|---|---|
| Hero | `#080808` deep black | Focal point tunggal: headline oversized putih + satu baris outline |
| About | `#FFFFFF` putih | Narasi personal dibaca pada kertas netral; angka `01` raksasa jadi penanda |
| What I Do | `#FFFFFF` putih | Daftar bernomor, garis 1px sebagai pemisah |
| Marquee | `#151515` dark surface | Strip pemisah satu-satunya antar narasi dan bukti kerja |
| Projects | `#FFFFFF` putih | DEXTRA feature berpermukaan deep black di dalamnya, jadi satu titik berat |
| Experience / Education | `#FFFFFF` putih | Kronologi dan kredensial dibaca tanpa gangguan |
| Skills | `#151515` dark surface | Toolkit dibaca sebagai blok teknis terpisah |
| Interests | `#FFFFFF` putih | Minat ditutup dengan daftar editorial ringan |
| Contact | `#080808` deep black | Penutup deep black, teks putih oversized |

---

## 2. Sistem Warna (FINAL, MONOKROM KETAT, 6 HEX)

| Peran | Hex | Alasan (R-31) |
|---|---|---|
| Deep black | `#080808` | Hero & contact; kontras maksimal untuk headline putih |
| Dark surface | `#151515` | Marquee, skills, panel feature; gelap tapi masih terpisah dari deep black |
| Panel gray | `#292929` | Garis panel dan chip di atas deep black |
| Strong gray | `#555555` | Teks sekunder di atas putih (7.46:1 PASS); border |
| Muted gray | `#A3A3A3` | Teks sekunder HANYA di atas gelap (7.94:1 di `#080808`, 7.24:1 di `#151515`) |
| Pure white | `#FFFFFF` | Teks di atas permukaan gelap; latar section terang |

Turunan `rgba(255,255,255,.08)` dipakai untuk hover halus di atas gelap. Tidak ada hex lain.

**DILARANG:** warna apa pun di luar 6 hex ini. Tidak ada oxblood, NIGHT SKY, biru, ungu, pink, emas, neon. Tidak ada `linear-gradient`, `radial-gradient`, glow, blur dekoratif, atau ilustrasi berwarna.

### Kontras (diukur dengan `contrast-check.py`, bukan dikira)

- `#FFFFFF` / `#080808` = 20.03:1 · PASS
- `#A3A3A3` / `#080808` = 7.94:1 · PASS
- `#A3A3A3` / `#151515` = 7.24:1 · PASS
- `#555555` / `#FFFFFF` = 7.46:1 · PASS
- `#FFFFFF` / `#151515` = 18.26:1 · PASS
- `#FFFFFF` / `#292929` = 14.55:1 · PASS
- `#A3A3A3` / `#FFFFFF` = 2.52:1 · GAGAL, maka `#A3A3A3` tidak pernah dipakai sebagai teks di atas putih.

Teks sekunder di section putih memakai `#555555`. Teks sekunder di section gelap memakai `#A3A3A3`.

---

## 3. Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Headline | **Space Grotesk** | geometris, editorial, berani tanpa berteriak |
| Body | **Inter** | netral, sangat terbaca, tidak berkarakter berlebih |
| Label teknis / metadata | **JetBrains Mono** (fallback `ui-monospace`) | memberi kesan technical tanpa warna |

- WOFF2 Space Grotesk & Inter sudah self-hosted di `public/fonts/`, preload HANYA Space Grotesk. Tidak ada Google Fonts CDN.
- Mono minimal 12px (`0.75rem` = 12px untuk label, `0.8125rem` = 13px untuk metadata).
- Hero headline: `clamp(3.5rem, 11vw, 10rem)`, line-height `0.88`, letter-spacing `-0.05em`.
- Baris ke-2 hero: `-webkit-text-stroke: 1.5px #FFFFFF; color: transparent`, satu-satunya accent moment.
- Subheadline: `clamp(2rem, 5vw, 3.5rem)`. Angka section: `clamp(2rem, 5vw, 3.5rem)` atau lebih besar, `tabular-nums`, letter-spacing `-0.06em`.
- expressive typography: campuran weight, ukuran ekstrem, dan whitespace, bukan dekorasi warna.
- Mobile: headline turun satu langkah (`clamp(2.75rem, 12vw, 4rem)`) di bawah 600px supaya tidak overflow di 360px.

---

## 4. Layout & Section

1. **Header** sticky minimal: wordmark `FFF`, About, What I Do, Projects, Experience, Education, Skills, Interests, Contact. Active indicator 1px. Mobile menu jelas, 44px tap target.
2. **Hero** deep black, `min-height:100svh`. Headline 3 baris sangat besar; baris ke-2 outline. Intro singkat, CTA View Projects / Contact Me / Download CV, availability + lokasi. Potret monokrom opsional, di mobile turun setelah CTA.
3. **About** editorial dua kolom. Angka `01` raksasa sebagai elemen visual. Narasi personal ringkas, bukan CV paste (riwayat ada di Experience/Education).
4. **What I Do** 4 numbered rows, bukan kartu dashboard: AI & Intelligent Technologies; Language & AI Evaluation; Software & Automation; Digital Operations & Administration.
5. **Marquee** satu strip `#151515`, separator `·`, dapat di-pause saat hover/focus.
6. **Projects** asymmetric showcase. DEXTRA primary feature dengan permukaan deep black, judul besar, dan alur governance bernomor `Request → Analyze → Recommend → Approve → Execute → Audit` (angka 01-06 adalah urutan langkah, bukan metrik). Dua proyek pendukung tidak simetris penuh.
7. **Experience** vertical timeline. Peran organisasi: **Member, Activities Section** di **Youth Red Cross (PMR), Wira Unit** dan **Scout Ambalan Council**, keduanya 2023-2025.
8. **Education & Certifications** kredensial akurat, siklus `2023 / 2026`, BNSP in issuance dipertahankan.
9. **Skills** dark surface, grouped lists, angka urutan besar, TANPA progress bar / percentage.
10. **Interests** numbered editorial rows + subteks bidang, bukan kartu dashboard.
11. **Contact** deep black `#080808`, teks `#FFFFFF` oversized, email/WA/GitHub/LinkedIn, work arrangements, CTA copy email, footer bersih.

---

## 5. Project Preview — ATURAN MANDATORY

Screenshot proyek HARUS berasal dari aplikasi/website asli yang benar-benar berjalan.

- `public/screenshots/dextra.webp` ← screenshot asli `https://dextra-office-agent.vercel.app`
- `public/screenshots/ai-detector.webp` ← screenshot asli `https://ai-detector-mahasiswa.vercel.app`
- `public/screenshots/experiments.webp` ← bukti nyata eksperimen bila tersedia; jika tidak ada, pakai entri tipografi tanpa screenshot

**Kondisi live (28 Nov 2026):** ketiga file WebP belum tersedia. Sesuai aturan di atas, image frame `<figure>` **tidak dirender** (bukan kotak abu-abu 404). Portofolio menampilkan entri tipografi dengan teks jujur: "No authentic product screenshot yet. This preview is text only." Berlaku sampai owner menyediakan screenshot asli. Tidak ada tag `<img>` yang merujuk `public/screenshots/*.webp` di HTML statis.

**DILARANG Keras:**
- Menggambar ulang UI proyek dengan HTML/CSS/SVG untuk keperluan preview.
- Mockup, AI image, screenshot palsu, browser frame dengan UI rekaan.
- Menyajikan konsep sebagai produk jadi.
- Memakai stok image tidak terkait.

Screenshot boleh ditempatkan di dalam frame portofolio, tapi isinya harus autentik & tidak diubah.

Status proyek (jujur):
- DEXTRA = BUILT, demo interaktif (prototype, bukan production deployment). Mandat manusia, approval-based execution, Policy Validator deterministik, dan audit record adalah inti governance.
- AI Detector Mahasiswa = LIVE DEMO (prototype interaktif), bukan produk production. Skor adalah indikator tidak pasti, bukan bukti penggunaan AI atau pelanggaran akademik, bukan pengganti Turnitin.
- AI & Technical Experiments = ONGOING EXPLORATION.

Jangan mengarang fitur, achievement, user, klien, atau metrik. Dua link demo berbeda harus tetap berbeda.

---

## 6. Motion

- Hero staggered line reveal (opacity + translateY 16px), 40/120/200ms, ease-out.
- Scroll reveal: fade + translateY 16px, stagger related elements, trigger via IntersectionObserver.
- Project hover: perubahan border/background, bukan zoom dekoratif berlebih.
- Button hover/active: inversi penuh hitam/putih, terlihat jelas tanpa warna baru.
- Marquee: satu strip bergerak lambat, monokrom, berhenti saat hover/focus.
- Nav: active indicator, sticky transition, smooth anchor.
- `prefers-reduced-motion: reduce` mematikan semua motion non-essential.
- Motion hanya aktif di bawah gate `html.has-motion` (JS menambah kelas hanya bila reduced-motion tidak aktif). Safety timeout per elemen menyalakan elemen yang masuk viewport tapi belum teramati observer. `<noscript>` menyalakan semua konten.
- Tidak ada scroll hijacking, bounce berlebih, intro panjang, atau animasi yang mengganggu baca/klik.
- Visual verification tidak diklaim lulus tanpa browser yang benar-benar merender (PRD §10.5).

---

## 7. Responsive

Uji: 360px, 390px, 768px, 1366px, 1440px.
- Tidak ada horizontal overflow; `overflow-x: clip` sebagai penjaga.
- Mobile adalah keadaan layout tersendiri, bukan desktop yang diperkecil: grid satu kolom, headline turun satu langkah di bawah 600px, potret 4/3 setelah CTA.
- Tidak ada teks bertabrakan / ter-clip.
- Nav mobile tidak rusak; tap target >= 44px.
- Section memakai `100svh`, bukan `100vh`, supaya tidak memotong konten di browser mobile.

---

## 8. Performance & Accessibility

- WebP/AVIF untuk screenshot, `loading="lazy"` untuk below-fold, `width`/`height` wajib (CLS), `fetchpriority="high"` untuk elemen hero.
- Semantic HTML, `<main>`, landmarks, satu `<h1>`.
- Keyboard navigation + visible `:focus-visible`; di permukaan gelap outline warna putih.
- `prefers-reduced-motion` + `noscript` fallback.
- Teks sekunder memenuhi WCAG AA pada latar masing-masing (lihat tabel kontras).
- Tidak ada dependency berlebih.

---

## 9. Definition of Done

1. Hanya 6 hex monokrom, nol warna lain, nol gradien/glow/blur dekoratif.
2. Tipografi Space Grotesk / Inter / JetBrains Mono (fallback monospace), mono >= 12px.
3. Hero deep black dengan headline `clamp(3.5rem,11vw,10rem)` dan baris ke-2 outline sebagai satu signature.
4. Angka section berukuran besar sebagai elemen visual.
5. Ritme kontras mengikuti tabel di Bab 1 (bukan alternating background polos).
6. Marquee tunggal `#151515`, separator `·`, dapat di-pause.
7. Screenshot proyek 100% asli dari aplikasi berjalan, bukan recreate; bila belum ada, entri tipografi jujur.
8. Status proyek jujur; DEXTRA prototipe; AI Detector disclaimer utuh; dua link demo berbeda.
9. Peran organisasi: Member, Activities Section, 2023-2025; nama Inggris sesuai arahan owner.
10. Kredensial akurat, BNSP in issuance dipertahankan, SMK 2023/2026.
11. Motion halus & reduced-motion aman; static review dan visual verification dibedakan.
12. Responsive di 5 breakpoint tanpa overflow; semua link & tombol berfungsi.
13. PRD Bab 10 standar pengerjaan tetap berlaku; build sukses & deployment configuration dipertahankan.
