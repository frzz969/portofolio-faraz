# PRD — Portofolio Faras Fadhil Firdaus

Versi 2.0 · 28 November 2026
Status: Redesign implementasi berjalan.
Arah: **Modern Monochrome × Creative Editorial**. Menggantikan arah oxblood/NIGHT SKY sebelumnya.

---

## 1. Ringkasan

Redesign menyeluruh atas portofolio existing di https://frzz969.github.io/portofolio-faraz/.
Tujuan: personal brand yang profesional, berani, dan kredibel untuk recruiter/klien internasional, dengan satu aturan mutlak: **preview proyek harus screenshot asli dari aplikasi yang benar-benar berjalan**, bukan recreate/mockup/AI image.

Prinsip konten: **jangan mengecilkan potensi, jangan membesar-besarkan pengalaman.**

---

## 2. Masalah yang Diperbaiki

- Warna NIGHT SKY terlalu biru & low-contrast, terasa "jelek" menurut owner.
- Pola kartu & alternating background terasa seperti slide PowerPoint.
- Thumbnail proyek berupa SVG recreate, bukan screenshot asli (melanggar aturan baru).
- Diperlukan arah editorial monokrom yang lebih dewasa & distinctive.

---

## 3. Audiens

| Audiens | Kebutuhan |
|---|---|
| Recruiter / HR | Fakta, pendidikan, pengalaman, sertifikat, kontak |
| Klien remote | Arah minat, bukti proyek nyata, cara menghubungi |
| Komunitas teknis | Detail proyek, stack, link repo/live |

---

## 4. Stack & Deploy (dipertahankan)

- Astro static output, `base: '/portofolio-faraz'`.
- Tailwind CSS v4 via `@tailwindcss/vite`.
- Font self-hosted: Space Grotesk + Inter WOFF2.
- JS minimal (IntersectionObserver) untuk motion; JS = 0 bila memungkinkan.
- GitHub Pages via `.github/workflows/deploy.yml` (`npm ci && npm run build` → `dist/` → deploy-pages).
- Sumber kebenaran deploy = `src/pages/index.astro` + komponen, BUKAN `index.html` root.

---

## 5. Information Architecture

A. **Navbar**: sticky minimal, monogram/name, About, Projects, Experience, Contact, active indicator, mobile nav.

B. **Hero**: headline besar, intro singkat, CTA View Projects + Contact Me, availability indicator, portrait monokrom opsional.

C. **About**: editorial two-column, personal, teknis + praktis, bukan CV paste.

D. **Areas of Interest**: 4 numbered rows:
1. AI & Intelligent Technologies
2. Language & AI Evaluation
3. Software & Automation
4. Digital Operations & Administration

E. **Selected Projects** (asymmetric, DEXTRA dominan):
1. **DEXTRA** — Governed Enterprise AI Workforce & Operations Platform. Status BUILT, demo interaktif. Stack: Next.js, React, Python, FastAPI, MCP, Policy Validator deterministik, approval-based execution, audit trail. Link: https://dextra-office-agent.vercel.app
2. **AI Detector Mahasiswa** — Indonesian Academic Writing Analyzer. Status **LIVE DEMO** (prototype/demo interaktif, bukan produk production). Fokus: explainable writing analysis, bukan vonis. Link: https://ai-detector-mahasiswa.vercel.app
3. **AI & Technical Experiments** — ongoing exploration, AI tools, MCP, API, workflow automation.

F. **Experience & Education**: vertical timeline, tanggal akurat, kredensial sesuai status.

G. **Skills**: grouped lists, tanpa percentage/progress bar.

H. **Contact**: full-width charcoal `#202020`, teks putih besar, email, LinkedIn, GitHub, WA, CTA understated, footer bersih.

---

## 6. Project Preview — Requirement Mandatory

Screenshot ASLI dari aplikasi berjalan, disimpan sebagai:
- `public/screenshots/dextra.webp`
- `public/screenshots/ai-detector.webp`
- `public/screenshots/experiments.webp` (jika ada bukti nyata)

Jika tidak bisa diakses: tampilkan entri tipografi tanpa screenshot dan laporkan keterbatasan. **Dilarang** mengganti dengan SVG/mockup/AI image yang menyerupai UI proyek.

File SVG lama (`dextra-dashboard.svg`, `ai-detector-mockup.svg`, `experiments.svg`) adalah recreate dan tidak boleh dipakai sebagai preview setelah redesign.

---

## 7. Requirement Fungsional

| ID | Requirement | Prioritas |
|---|---|---|
| F1 | Nav anchor bekerja & active indicator | Must |
| F2 | Mobile nav jelas & 44px tap target | Must |
| F3 | CTA View Projects / Contact Me ke section nyata | Must |
| F4 | Screenshot proyek asli (atau entri tipografi jujur) | Must |
| F5 | Link WA, email, LinkedIn, GitHub, 2 URL proyek, CV berfungsi | Must |
| F6 | Badge status jujur (BUILT/PLANNED/ONGOING) | Must |
| F7 | Marquee monokrom satu strip | Should |
| F8 | Scroll reveal & hero stagger, reduced-motion aman | Should |
| F9 | 404 page sederhana | Could |

---

## 8. Requirement Non-Fungsional

| ID | Requirement | Target |
|---|---|---|
| N1 | First-load | ringan, WebP/AVIF, lazy below-fold |
| N2 | JS | minimal, tanpa library animasi berat |
| N3 | CLS | width/height pada semua gambar |
| N4 | Kontras | WCAG AA, secondary text `#525252` bila perlu |
| N5 | Warna | HANYA 7 hex monokrom, nol gradien/glow |
| N6 | Aksesibilitas | semantic HTML, focus-visible, keyboard, reduced-motion |
| N7 | SEO | JSON-LD ProfilePage/Person, og image, hreflang, canonical |
| N8 | Responsive | 360/390/768/1366/1440 tanpa overflow |

---

## 9. Motion

- Hero staggered line reveal.
- Scroll reveal 16-24px, 200-400ms, ease-out.
- Project hover zoom ~1.03 + arrow move.
- Button hover/active; magnetic optional desktop only.
- Satu marquee monokrom, separator `·`, bisa di-pause.
- Timeline progression.
- Smooth anchor + active nav.
- `prefers-reduced-motion: reduce` mematikan motion.
- Tidak ada scroll hijacking, bounce, intro panjang.

---

## 10. Definition of Done

1. Monokrom ketat, nol warna lain.
2. Tipografi Space Grotesk / Inter / JetBrains Mono.
3. Semua section A–H terimplementasi.
4. Screenshot proyek asli terpasang (atau limitation dilaporkan jujur).
5. Status proyek jujur, tanpa klaim berlebih.
6. Responsive di 5 breakpoint.
7. Semua link & tombol berfungsi.
8. Build & type check sukses.
9. Deployment configuration dipertahankan.
10. Tidak push/publish tanpa otorisasi eksplisit owner.
