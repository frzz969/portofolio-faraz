# DESIGN — Portofolio Faras Fadhil Firdaus

Versi 2.0 · 28 November 2026
Arah: **Modern Monochrome × Creative Editorial**
Menggantikan seluruh arah warna sebelumnya (oxblood, NIGHT SKY). Keputusan owner bersifat final.

---

## 1. Arah Visual

Personal brand Faras: technology enthusiast & AI-assisted developer dari Indonesia, open to remote.

Kepribadian visual:
- Playful tapi profesional.
- Modern, distinctive, Berani tapi tidak monak-kanak.
- Minimal tapi tidak membosankan.
- Clean, confident, seimbang.
- Cocok untuk recruiter, klien, dan peluang internasional.

Prinsip (dari aturan antislop):
- Satu focal point per layar.
- Whitespace sebagai struktur, bukan sisa.
- Satu aksen? TIDAK ada aksen warna. Fokus hierarki lewat ukuran, weight, dan garis.
- Asimetri editorial disengaja, bukan bento grid seragam.
- Tiap keputusan punya alasan satu baris (R-31).

---

## 2. Sistem Warna (FINAL, MONOKROM KETAT)

| Peran | Hex | Alasan (R-31) |
|---|---|---|
| Main background | `#F7F7F7` | kertas netral, tidak menyilaukan, netral untuk teks |
| Secondary background | `#EEEEEE` | satu tingkat lebih gelap, untuk permukaan sekunder |
| Primary text | `#171717` | kontras maksimal di atas kertas |
| Secondary text | `#737373` | hierarki sekunder; untuk teks kecil pakai `#525252` agar lolos AA |
| Borders | `#D9D9D9` | garis tipis sebagai pemisah, menggantikan shadow |
| Dark sections | `#202020` | section kontak & momen editorial |
| White | `#FFFFFF` | teks di atas section gelap |

**DILARANG:** warna apa pun di luar 7 hex ini. Tidak ada oxblood, NIGHT SKY, biru, ungu, pink, emas, neon. Tidak ada `linear-gradient`, `radial-gradient`, glow, blur dekoratif, atau ilustrasi berwarna.

### Kontras (diukur dengan contrast-check.py)
- `#171717` di `#F7F7F7` → PASS
- `#737373` di `#F7F7F7` → cek; pakai `#525252` untuk teks < 16px bila diperlukan
- `#FFFFFF` di `#202020` → PASS

---

## 3. Tipografi

| Peran | Font | Alasan |
|---|---|---|
| Headline | **Space Grotesk** | geometris, editorial, berani tanpa berteriak |
| Body | **Inter** | netral, sangat terbaca, tidak berkarakter berlebih |
| Label teknis / metadata | **JetBrains Mono** (fallback monospace) | memberi kesan "technical" tanpa warna |

- WOFF2 Space Grotesk & Inter sudah self-hosted di `public/fonts/`, preload HANYA Space Grotesk.
- Tidak ada Google Fonts CDN.
- Hierarki besar: headline hero `clamp(2.75rem, 7vw, 6rem)`, line-height ~0.95, tracking negative.
- expressive typography: campuran weight, ukuran ekstrem, dan whitespace, bukan dekorasi warna.

---

## 4. Layout & Section

1. **Navbar** sticky minimal: monogram/name, About, Projects, Experience, Contact. Active-section indicator. Mobile nav jelas, 44px tap target.
2. **Hero** headline besar 2-3 baris, intro singkat, CTA "View Projects" + "Contact Me", availability indicator. Portrait monokrom opsional. Tidak ada elemen dekoratif besar yang mendorong konten ke bawah fold.
3. **About** editorial two-column. Personal, bukan CV paste.
4. **Areas of Interest** numbered rows / editorial list. 4 bidang: AI & Intelligent Technologies; Language & AI Evaluation; Software & Automation; Digital Operations & Administration. BUKAN kartu dashboard.
5. **Selected Projects** asymmetric showcase. DEXTRA primary feature. Tiap proyek: nama, screenshot ASLI, deskripsi, problem/motivation, kontribusi nyata, technical approach, technologies, status, link.
6. **Experience & Education** vertical timeline, date alignment, status kredensial akurat.
7. **Skills** grouped lists. TANPA progress bar / percentage.
8. **Contact** full-width `#202020`, teks `#FFFFFF` besar, email/LinkedIn/GitHub/WA, CTA understated, footer bersih.

### Marquee
Satu strip typography monokrom antar section. Separator pakai `·` (bukan em dash, R-02):
`AI & TECHNOLOGY · DIGITAL OPERATIONS · CREATIVE DEVELOPMENT · CONTINUOUS LEARNING`

---

## 5. Project Preview — ATURAN MANDATORY

Screenshot proyek HARUS berasal dari aplikasi/website asli yang benar-benar berjalan.

- `public/screenshots/dextra.webp` ← screenshot asli `https://dextra-office-agent.vercel.app`
- `public/screenshots/ai-detector.webp` ← screenshot asli `https://ai-detector-mahasiswa.vercel.app`
- `public/screenshots/experiments.webp` ← bukti nyata eksperimen bila tersedia; jika tidak ada, pakai entri tipografi tanpa screenshot

**Kondisi live (28 Nov 2026):** ketiga file WebP belum tersedia. Sesuai aturan di atas, image frame `<figure>` **tidak dirender** (bukan kotak abu-abu 404). portfolio menampilkan entri tipografi dengan teks jujur: "Authentic product screenshot pending — preview shown as text only." Berlaku sampai owner menyediakan screenshot asli.

**DILARANG Keras:**
- Menggambar ulang UI proyek dengan HTML/CSS/SVG untuk keperluan preview.
- Mockup, AI image, screenshot palsu, browser frame dengan UI rekaan.
- Menyajikan konsep sebagai produk jadi.
- Memakai stok image tidak terkait.

Screenshot boleh ditempatkan di dalam frame portofolio, tapi isinya harus autentik & tidak diubah.

Status proyek (jujur):
- DEXTRA = BUILT, demo interaktif (prototype, bukan production deployment).
- AI Detector Mahasiswa = LIVE DEMO (prototype interaktif), bukan produk production.
- AI & Technical Experiments = ONGOING EXPLORATION.

Jangan mengarang fitur, achievement, user, klien, atau metrik.

---

## 6. Motion

- Hero: staggered line reveal (opacity + translateY 16-24px), duration 200-400ms, ease-out.
- Scroll reveal: fade + translateY 16-24px, stagger related elements, trigger via IntersectionObserver.
- Project hover: screenshot zoom ringan ~1.03, arrow move, border/background transition halus.
- Button hover/active halus. Magnetic optional desktop, TIDAK untuk touch.
- Marquee: satu strip bergerak lambat, monokrom, dapat di-pause.
- Timeline: progression + reveal saat scroll.
- Nav: smooth anchor, active indicator, sticky transition.
- `prefers-reduced-motion: reduce` mematikan semua motion non-essential.
- Tidak ada scroll hijacking, bounce berlebih, intro panjang, atau animasi yang mengganggu baca/klik.

Stack: Motion/Framer Motion hanya jika kompatibel & ringan; else CSS + IntersectionObserver. JS minimal.

---

## 7. Responsive

Uji: 360px, 390px, 768px, 1366px, 1440px.
- Tidak ada horizontal overflow.
- Tidak ada teks bertabrakan / ter-clip.
- Screenshot menjaga aspect ratio.
- Nav mobile tidak rusak.
- Touch target >= 44px.

---

## 8. Performance & Accessibility

- WebP/AVIF untuk screenshot, `loading="lazy"` untuk below-fold, `width`/`height` wajib (CLS).
- Semantic HTML, `<main>`, landmarks, satu `<h1>`.
- Keyboard navigation + visible `:focus-visible`.
- `prefers-reduced-motion`.
- Tidak ada dependency berlebih.

---

## 9. Definition of Done

1. Hanya 7 hex monokrom, nol warna lain, nol gradien/glow.
2. Tipografi Space Grotesk / Inter / JetBrains Mono.
3. Areas of Interest berupa numbered rows.
4. Projects asymmetric, DEXTRA dominan.
5. Screenshot proyek 100% asli dari aplikasi berjalan, bukan recreate.
6. Status proyek jujur.
7. Experience timeline & skills tanpa percentage.
8. Contact charcoal dengan teks putih.
9. Motion halus & reduced-motion aman.
10. Responsive di 5 breakpoint tanpa overflow.
11. Semua link & tombol berfungsi.
12. Build sukses & deployment configuration dipertahankan.
