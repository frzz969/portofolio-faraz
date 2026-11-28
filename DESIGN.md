# DESIGN — Portofolio Faras Fadhil Firdaus

Versi 4.0 · 28 November 2026
Arah: **Professional Modern Editorial**
Menggantikan versi 3.0 **Dark Technical Editorial × Industrial Monochrome** dan seluruh arah lebih lama (Modern Monochrome / Creative Editorial, oxblood, NIGHT SKY). Keputusan owner bersifat final. Sumber kebenaran tampilan: build Astro di `src/`; `index.html` dan `index-mobile.html` adalah artefak statis yang mengikuti arah yang sama.

Standar kerja: **PRD Bab 10** berlaku untuk setiap perubahan, termasuk tugas dokumen. Daftar skill tambahan ada di **PRD Bab 10.1b** (termasuk `code-review`, `codebase-design`, `verification-before-completion`). Mode default DURING.

`VISUAL-UPGRADE.md` v1.0 adalah **supplement** yang meratifikasi pengecualian sempit atas larangan Bab 2: gradient monokrom/silver yang sangat lembut dan noise `feTurbulence` opacity 0.025–0.04 hanya di hero, satu project feature, dan contact. Larangan ungu, neon, glow, blur dekoratif, dan perubahan 7 token inti tetap berlaku penuh.

Reading this as: portofolio personal untuk recruiter, klien remote, dan komunitas teknis, dalam bahasa visual Swiss Editorial yang bertemu modern product design, dial **ENERGY 2 / RHYTHM 3 / MOTION 1**.

---

## 1. Arah Visual

Personal brand Faras: technology enthusiast & AI-assisted developer dari Indonesia, open to remote.

Komposisi arah:
- **70% professional editorial**: hierarki jelas, whitespace sebagai struktur, bukti kerja di pusat halaman.
- **20% modern product design**: permukaan bersih, komponen terukur, status yang jujur.
- **10% technical futuristic details**: garis tipis, metadata mono, penomoran section.

Keyword yang dipakai: Swiss Editorial, Modern Professional Portfolio, Product-Centric, Technical Minimalism.

Yang **bukan** arah ini:
- Bukan full dark brutalist, bukan putih polos template CV.
- Bukan slide presentasi, bukan SaaS landing page.
- Bukan eksperimen seni.

Kepribadian visual:
- Profesional, tenang, dan spesifik. Berani lewat hierarki dan ritme, bukan lewat kebisingan.
- Satu focal point per layar. Asimetri disengaja, bukan bento grid seragam.
- Dark dipakai strategis sebagai penutup dan titik berat, bukan sebagai default semua section.
- Cocok untuk recruiter, klien, dan peluang internasional.

Prinsip (dari aturan antislop, R-31):
- Tiap keputusan visual punya alasan satu baris.
- Whitespace sebagai struktur, bukan sisa.
- Satu aksen biru yang dipakai secara terukur di garis tipis, fokus, dan status. Aksen itu punya peran, bukan sekadar konsesi visual.
- Fokus pada bukti: dua screenshot asli, case study, kredensial yang bisa dicek.

Dilarang:
- Cream, beige, brown, neon, gradient, glow, blur dekoratif, shadow berlebih.
- Radius 24px untuk semua elemen; pakai 8–16px sesuai peran.
- Skill percentage tanpa dasar, semua konten berbentuk card, animasi di tiap paragraf.
- Efek 3D berat, scroll hijacking, loading screen panjang, custom cursor besar, video autoplay besar.
- Parallax di semua section, marquee di setiap section.
- `text-stroke outline` sebagai signature hero. Itu bagian dari arah lama dan tidak dipakai lagi.

### Ritme kontras antar section

Section berganti komposisi secara disengaja, bukan sekadar alternating background. Permukaan mengikuti peran konten:

| Section | Permukaan | Komposisi | Alasan (R-31) |
|---|---|---|---|
| Hero | `#F4F5F7` split light editorial | Headline 56–88px, narasi pendek, potret monokram | Focal point tunggal; terang membuat nama dan headline terbaca sebagai identitas, bukan posters gelap |
| About | `#F4F5F7` | Dua kolom asimetris + milestone | Narasi personal dibaca pada kertas netral; milestone memberi bukti tanpa angka raksasa |
| How I Work | `#FFFFFF` | 4-stage workflow `01 Research · 02 Analyze · 03 Build · 04 Validate`, garis biru tipis, detail expandable | Proses dibaca sebagai urutan kerja nyata, bukan kartu dekoratif |
| Projects | `#F4F5F7` dominan, dark hanya aksen | Pusat bukti: 2 screenshot asli + case study, asymmetric | Bukti kerja adalah alasan portofolio ada; DEXTRA mendapat satu titik berat gelap |
| Experience | `#FFFFFF` | Timeline vertikal profesional | Riwayat kerja dipisah dari kegiatan organisasi supaya tidak saling melemahkan |
| Education | `#FFFFFF` | Credential gallery | Sertifikat dibaca sebagai objek resmi, bukan daftar teks padat |
| Skills | `#F4F5F7` | Two-column directory, praktik vs sedang belajar, tanpa percentage | Daftar kemampuan jujur lebih kredibel daripada angka buatan |
| Interests | `#F4F5F7` | Editorial ringan | Minat menutup narasi tanpa menyaingi bukti kerja |
| Contact | `#191D26` dark restrained | Email + LinkedIn + GitHub + WhatsApp | Penutup gelap memberi berat dan memusatkan cara menghubungi |

Signature yang diulang di seluruh halaman: penomoran section editorial, garis biru tipis (`#365FE8`), metadata terstruktur berhuruf kecil kapital, dan status statis `OPEN TO OPPORTUNITIES`. Status ini dinyatakan jujur sebagai teks tetap, bukan live indicator.

Dial: **ENERGY 2 / RHYTHM 3 / MOTION 1**. RHYTHM 3 berarti komposisi tiap section berbeda secara nyata. MOTION 1 berarti gerak hanya untuk membimbing perhatian.

---

## 2. Sistem Warna (FINAL, 7 TOKEN)

| Peran | Hex | Distribusi | Alasan (R-31) |
|---|---|---|---|
| Main canvas | `#F4F5F7` | 55% | Permukaan kerja default; cukup terang untuk teks gelap, cukup dingin untuk kesan editorial modern |
| Surface | `#FFFFFF` | 25% | Memisahkan blok proses, timeline, dan kredensial tanpa garis tebal |
| Secondary surface | `#E8EBF0` | dalam 25% surface | Nested block dan latar metadata; tidak untuk teks sekunder kecil |
| Primary text & dark section | `#191D26` | 15% | Teks utama di terang, sekaligus penutup Contact; gelap terarah, bukan hitam pekat |
| Secondary text | `#687180` | dalam 15% teks | Teks pendukung di atas `#F4F5F7` dan `#FFFFFF` |
| Border | `#DDE1E7` | garis | Pemisah 1px dan garis workflow; menggantikan shadow dekoratif |
| Accent blue | `#365FE8` | 5% | Garis tipis, fokus, dan status. Satu-satunya warna saturasi penuh |

Turunan transparan diperbolehkan untuk hover halus, misalnya `rgba(25,29,38,.06)` di terang dan `rgba(255,255,255,.08)` di gelap. Tidak ada hex aktif selain tujuh token di atas.

**Dilarang:** cream, beige, brown, neon, ungu, pink, emas, `linear-gradient`, `radial-gradient`, glow, dan blur dekoratif.

### Kontras (diukur dengan `contrast-check.py`, bukan dikira)

Diukur 28 November 2026 memakai `.agents/skills/antislop-human/contrast-check.py` dari lokasi skill global:

| Pasangan (teks pada latar) | Rasio | Normal 4.5:1 | Large 3.0:1 |
|---|---|---|---|
| `#191D26` / `#F4F5F7` | 15.46:1 | PASS | PASS |
| `#191D26` / `#FFFFFF` | 16.87:1 | PASS | PASS |
| `#687180` / `#F4F5F7` | 4.52:1 | PASS | PASS |
| `#687180` / `#FFFFFF` | 4.93:1 | PASS | PASS |
| `#FFFFFF` / `#191D26` | 16.87:1 | PASS | PASS |
| `#365FE8` / `#FFFFFF` | 5.30:1 | PASS | PASS |

Catatan penting untuk implementasi: `#687180` lolos AA dengan margin tipis di atas `#F4F5F7` (4.52:1) dan `#FFFFFF` (4.93:1), tapi **gagal** di atas `#E8EBF0` (4.12:1). Maka:
- `#687180` hanya untuk teks sekunder di atas `#F4F5F7` dan `#FFFFFF`, dan hanya untuk ukuran normal ke atas.
- **Fallback `#525B6B` wajib untuk teks kecil di atas permukaan terang**, termasuk di atas `#E8EBF0`. Terukur 6.28:1 di `#F4F5F7`, 6.85:1 di `#FFFFFF`, dan 5.73:1 di `#E8EBF0`. Semua PASS.
- `#E8EBF0` dipakai sebagai latar blok, bukan sebagai latar teks sekunder berwarna `#687180`.
- Pasangan baru di luar tabel ini **wajib diukur ulang saat implementasi** dengan tool yang sama (PRD §10.1).

Fokus dan garis biru memakai `#365FE8`. Di atas `#191D26`, kontras fokus harus diukur ulang bila dipakai sebagai teks, bukan garis.

---

## 3. Tipografi & Spacing

| Peran | Font | Alasan |
|---|---|---|
| Display selected | **Space Grotesk** | Karakter geometris dan editorial; dipakai di nama dan headline pilihan, bukan di semua elemen |
| Body | **Inter** (Manrope / Plus Jakarta Sans sebagai alternatif) | Netral dan sangat terbaca untuk narasi profesional |
| Metadata / teknis | Font monospace (JetBrains Mono bila tersedia, fallback `ui-monospace`) | Menandai data, status, dan penomoran tanpa menambah warna |

WOFF2 Space Grotesk & Inter sudah self-hosted di `public/fonts/`, preload HANYA Space Grotesk. Tidak ada Google Fonts CDN.

Hierarki:
- Hero: 56–88px desktop, responsif, `clamp`-nya dijaga supaya kata tidak pecah. Ini bukan 160px oversized.
- Section heading: 32–48px.
- Body: 15–17px, line-height 1.6, panjang baris maksimal 55–70ch.
- Metadata: small uppercase dengan tracking terukur, bukan extreme letter-spacing.
- Tidak semua heading oversized. Hedakan ukuran mengikuti peran, bukan ambisi dekoratif.

Spacing & bentuk:
- Skala 4/8px. Gunakan kelipatan 4px untuk gap dan kelipatan 8px untuk padding blok.
- Container maksimal 1120–1200px.
- Radius 8–16px, disesuaikan per komponen. Tidak ada radius seragam 24px.
- Tombol 44–48px tinggi, memenuhi tap target.
- Garis 1px `#DDE1E7` sebagai pemisah utama. Shadow hanya untuk elevasi yang benar-benar punya alasan.

Motion mengikuti Bab 6. Responsive mengikuti Bab 7. Keduanya tunduk pada PRD Bab 10.

---

## 4. Layout & Section

1. **Header** sticky minimal: wordmark `FFF`, About, How I Work, Projects, Experience, Education, Skills, Contact. Active indicator 1px biru. Mobile menu jelas, 44px tap target.
2. **Hero** split light editorial: headline 56–88px desktop, narasi pendek, potret monokram, CTA View Projects / Contact Me / Download CV, status `OPEN TO OPPORTUNITIES` statis + lokasi. Di mobile potret turun setelah CTA.
3. **About** dua kolom asimetris + milestone. Narasi personal ringkas, bukan CV paste (riwayat ada di Experience/Education).
4. **How I Work** 4-stage workflow `01 Research · 02 Analyze · 03 Build · 04 Validate`, garis biru tipis, detail expandable. Bukan tiga kartu identik.
5. **Projects** pusat bukti: 2 screenshot asli + case study, asymmetric. DEXTRA feature dengan satu aksen dark. Dua proyek pendukung tidak simetris penuh.
6. **Experience** timeline vertikal profesional, dipisah dari organizational involvement. Peran organisasi: **Member, Activities Section** di **Youth Red Cross (PMR), Wira Unit** dan **Scout Ambalan Council**, keduanya `2023 – 2025`. Tanpa "Leadership".
7. **Education** credential gallery: MTCNA & Junior Fiber Optic issued, Practical Office Advance training selesai, BNSP masih in issuance, POA 33 hari pasca lulus di BPVP Surakarta. Siklus `2023 / 2026`. Tanpa DPET, 260 jam, atau 9 unit.
8. **Skills** two-column directory tanpa percentage. Dibedakan antara yang dipraktikkan dan yang sedang belajar.
9. **Interests** editorial ringan, bukan kartu dashboard.
10. **Contact** dark restrained closing di `#191D26`: email + LinkedIn + GitHub + WhatsApp, work arrangements, CTA copy email, footer bersih.

---

## 5. Project Preview — ATURAN MANDATORY

Screenshot proyek HARUS berasal dari aplikasi/website asli yang benar-benar berjalan.

- `public/screenshots/dextra.webp` ← screenshot asli `https://dextra-office-agent.vercel.app`
- `public/screenshots/ai-detector.webp` ← screenshot asli `https://ai-detector-mahasiswa.vercel.app`
- `public/screenshots/experiments.webp` ← bukti nyata eksperimen bila tersedia; jika tidak ada, pakai entri tipografi tanpa screenshot

**Kondisi live (diperbarui 28 Nov 2026):** `public/screenshots/dextra.webp` dan `public/screenshots/ai-detector.webp` **sudah tersedia & terpasang** berdasarkan screenshot asli aplikasi yang berjalan; keduanya tampil melalui `<figure class="project-screenshot">` dengan `<img>` dan `width`/`height` eksplisit di build Astro maupun HTML statis. `experiments.webp` tidak tersedia, sehingga entri AI & Technical Experiments tetap berupa teks jujur tanpa screenshot. Aturan di atas tetap berlaku: tidak ada recreate, mockup, atau AI image sebagai pengganti bukti asli.

**DILARANG Keras:**
- Menggambar ulang UI proyek dengan HTML/CSS/SVG untuk keperluan preview.
- Mockup, AI image, screenshot palsu, browser frame dengan UI rekaan.
- Menyajikan konsep sebagai produk jadi.
- Memakai stok image tidak terkait.

Screenshot boleh ditempatkan di dalam frame portofolio, tapi isinya harus autentik & tidak diubah.

Status proyek (jujur):
- DEXTRA = BUILT, demo interaktif (prototipe interaktif, bukan production deployment). Mandat manusia, approval-based execution, Policy Validator deterministik, dan audit record adalah inti governance.
- AI Detector Mahasiswa = LIVE DEMO (prototype interaktif), bukan produk production. Skor adalah indikator tidak pasti, bukan bukti penggunaan AI atau pelanggaran akademik, bukan pengganti Turnitin.
- AI & Technical Experiments = ONGOING EXPLORATION, bukan proyek selesai.

Jangan mengarang fitur, achievement, user, klien, atau metrik. Dua link demo berbeda harus tetap berbeda.

---

## 6. Motion

Prinsip: purposeful dan restrained. Gerak membimbing perhatian, bukan mengisi halaman.

- Hero sequential reveal: navbar 0–200ms, nama 150–450ms, headline 300–850ms, portrait 450–1000ms, CTA/metadata 700–1200ms.
- Text clipping pada reveal, bukan opacity-only di semua elemen.
- Section entrance 450–600ms.
- Hover 180–250ms. Stagger 60–100ms untuk elemen yang memang berhubungan.
- Parallax sangat ringan dan opsional, tidak di semua section.
- Project hover: perubahan border/background tipis, bukan zoom dekoratif berlebih.
- Marquee: maksimal satu strip, dapat di-pause saat hover/focus. Tidak di setiap section.
- `prefers-reduced-motion: reduce` wajib mematikan gerak non-essential.
- Disable pointer effects di perangkat touch. Tanpa WebGL berat, tanpa scroll hijacking.
- Motion aktif di bawah gate `html.has-motion` (JS menambah kelas hanya bila reduced-motion tidak aktif). Safety timeout per elemen menyalakan elemen yang masuk viewport tapi belum teramati observer. `<noscript>` menyalakan semua konten.
- Tidak ada animasi di tiap paragraf, loading screen panjang, atau custom cursor besar.
- Visual verification tidak diklaim lulus tanpa browser yang benar-benar merender (PRD §10.5).

---

## 7. Responsive

Uji: 360px, 390px, 768px, 1024px, 1366px, 1440px.
- Desktop 1440: split hero dan whitespace yang lapang.
- 1024 tablet: stack dari split menjadi satu kolom yang masih berirama.
- 390 mobile: single column, CTA mudah ditemukan tanpa scroll berkali-kali.
- Tidak ada horizontal overflow; `overflow-x: clip` sebagai penjaga.
- Headline tidak memecah kata di breakpoint mana pun.
- Tap target minimal 44px. Teks tidak bertabrakan atau ter-clip.
- Nav mobile tidak rusak. Section memakai `100svh`, bukan `100vh`, supaya tidak memotong konten di browser mobile.

---

## 8. Performance & Accessibility

- WebP/AVIF untuk screenshot, `loading="lazy"` untuk below-fold, `width`/`height` wajib (CLS), `fetchpriority="high"` untuk elemen hero.
- Semantic HTML, `<main>`, landmarks, satu `<h1>`, urutan heading tidak loncat.
- Keyboard navigation + visible `:focus-visible`; garis fokus biru `#365FE8` di terang, diukur ulang di atas `#191D26`.
- `prefers-reduced-motion` + `noscript` fallback.
- Semua teks memenuhi WCAG AA pada latar masing-masing (lihat tabel kontras Bab 2). `#687180` tidak dipakai di atas `#E8EBF0`; teks kecil memakai `#525B6B`.
- Tidak ada dependency berlebih.

---

## 9. Definition of Done

1. Arah terbaca sebagai Professional Modern Editorial: 70/20/10, bukan dark brutalist, bukan template CV putih polos.
2. Tujuh token warna aktif dipakai sesuai distribusi. Tidak ada cream/beige/brown, neon, gradient, glow, blur dekoratif, atau shadow berlebih.
3. Tipografi Space Grotesk / Inter (atau Manrope / Plus Jakarta Sans) / mono metadata, hero 56–88px tidak memecah kata, body 15–17px line-height 1.6, maksimal 55–70ch.
4. Spacing 4/8px, container 1120–1200px, radius 8–16px, tombol 44–48px.
5. Ritme section mengikuti tabel Bab 1: komposisi berbeda, dark hanya di Contact dan satu aksen di Projects.
6. Signature hadir: penomoran editorial, garis biru tipis, metadata terstruktur, status statis `OPEN TO OPPORTUNITIES`.
7. Dua screenshot asli terpasang bila tersedia; bila belum, entri tipografi jujur. Tidak ada recreate/mockup/AI image.
8. Status proyek jujur; DEXTRA prototipe + governance; AI Detector indikator tidak pasti; Experiments bukan proyek selesai; dua link demo berbeda.
9. How I Work = 4 stage yang ditentukan; Skills tanpa percentage; Experience dipisah dari organizational involvement.
10. Peran organisasi Member, Activities Section, `2023 – 2025`, nama Inggris sesuai arahan owner, tanpa "Leadership". Kredensial akurat: SMK `2023 / 2026`, BNSP in issuance, POA 33 hari pasca lulus, tanpa DPET/260 jam/9 unit.
11. Motion sequential di hero, entrance 450–600ms, hover 180–250ms, reduced-motion wajib, pointer effects mati di touch.
12. Responsive di 1440/1024/390 tanpa overflow, tap target >= 44px, link & tombol berfungsi.
13. PRD Bab 10 dan 10.1b tetap menjadi standar kerja; build sukses & deployment configuration dipertahankan.
14. Pasangan warna baru diukur dengan `contrast-check.py` sebelum dipakai, bukan dikira.

---

## Catatan perubahan v3.0 → v4.0

- Arah lama **Dark Technical Editorial × Industrial Monochrome** diganti. Yang ikut ditinggalkan: monokrom ketat, nol aksen warna, 6 hex, deep black `#080808` sebagai default, deep black hero, `#151515` marquee/skills, `#292929`, `#555555`, `#A3A3A3`, dan `text-stroke outline` di baris ke-2 hero.
- Hex lama di atas hanya tercatat di catatan ini sebagai riwayat. Bukan warna aktif.
- Palet baru: `#F4F5F7`, `#FFFFFF`, `#E8EBF0`, `#191D26`, `#687180`, `#DDE1E7`, `#365FE8`, dengan fallback `#525B6B` untuk teks kecil di terang.
- Konten faktual tidak berubah. Perubahan hanya pada arah visual, komposisi section, tipografi, spacing, dan motion.
