# PRD — Portofolio Faras Fadhil Firdaus

Versi 3.0 · 28 November 2026
Status: Redesign implementasi berjalan.
Arah: **Dark Technical Editorial × Industrial Monochrome**. Menggantikan arah Modern Monochrome / Creative Editorial (v2.0) dan seluruh arah sebelumnya (oxblood, NIGHT SKY). Keputusan owner bersifat final.

---

## 1. Ringkasan

Redesign menyeluruh atas portofolio existing di https://frzz969.github.io/portofolio-faraz/.
Tujuan: personal brand yang profesional, berani, dan kredibel untuk recruiter/klien internasional, dengan satu aturan mutlak: **preview proyek harus screenshot asli dari aplikasi yang benar-benar berjalan**, bukan recreate/mockup/AI image.

Arah visual: **Dark Technical Editorial × Industrial Monochrome**. Monokrom ketat 6 hex, ritme kontras yang disengaja antar section (hero/contact deep black, about/projects/experience putih, marquee/skills dark surface), headline oversized, dan angka section sebagai elemen visual. Satu accent moment: baris headline ke-2 di hero berbentuk outline di atas deep black. Detail lihat `DESIGN.md`.

Prinsip konten: **jangan mengecilkan potensi, jangan membesar-besarkan pengalaman.**

---

## 2. Masalah yang Diperbaiki

- Warna NIGHT SKY / oxblood terlalu berwarna & low-contrast, terasa "jelek" menurut owner.
- Pola kartu & alternating background terasa seperti slide PowerPoint; diganti ritme kontras yang disengaja dan asimetri editorial.
- Thumbnail proyek berupa SVG recreate, bukan screenshot asli (melanggar aturan baru).
- Diperlukan arah editorial monokrom gelap yang lebih dewasa & distinctive, dengan tipografi berani/oversized dan angka sebagai elemen visual.

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

H. **Contact**: full-width deep black `#080808`, teks putih oversized, email, LinkedIn, GitHub, WA, work arrangements, CTA copy email, footer bersih.

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
| N4 | Kontras | WCAG AA. Teks sekunder di putih `#555555` (7.46:1); `#A3A3A3` HANYA di atas gelap (7.94:1 di `#080808`, 7.24:1 di `#151515`) |
| N5 | Warna | HANYA 6 hex monokrom: `#080808` `#151515` `#292929` `#555555` `#A3A3A3` `#FFFFFF`. Nol gradien/glow/blur dekoratif |
| N6 | Aksesibilitas | semantic HTML, focus-visible, keyboard, reduced-motion |
| N7 | SEO | JSON-LD ProfilePage/Person, og image, hreflang, canonical |
| N8 | Responsive | 360/390/768/1366/1440 tanpa overflow |

---

## 9. Motion

- Hero staggered line reveal.
- Scroll reveal 16-24px, 200-400ms, ease-out.
- Project hover zoom ~1.03 + arrow move.
- Button hover/active; magnetic optional desktop only.
- Satu marquee monokrom di strip `#151515`, separator `·` (bukan pipe / em dash), bisa di-pause saat hover/focus.
- Timeline progression.
- Smooth anchor + active nav.
- `prefers-reduced-motion: reduce` mematikan motion.
- Tidak ada scroll hijacking, bounce, intro panjang.

---

## 10. Standar Pengerjaan (WAJIB — berlaku untuk semua tugas lanjutan)

Mulai 28 November 2026, standar ini **selalu aktif** untuk setiap perubahan pada repo ini. Owner tidak perlu mengulang instruksi "pakai skill antislop / UI UX promax" lagi — cukup merujuk bab ini.

### 10.1 Skill yang WAJIB dipakai
Sebelum dan selama mengerjakan tugas apa pun (audit, redesign, perbaikan konten, motion, doc):

- **antislop (core)** — filter utama: hindari hasil AI generik, klaim berlebih, jargon, dan pola template.
- **antislop-code** — hygiene komentar/kode; hapus komentar generik, simpan yang beralasan.
- **antislop-copywriting** — untuk semua teks UI: headline, tone, CTA, anti-AI-writing patterns.
- **antislop-human** — kontras, fokus, keyboard, state, aksesibilitas (`contrast-check.py` wajib dipakai untuk pasangan warna baru).
- **antislop-layoutmobile** — reflow 360–1440px, grid, overflow, tap target.
- **antislop-ui** — warna, layout, komponen, motion, performa halaman.

Mode default: **DURING** (bukan setelah selesai). Terapkan saat menulis, bukan sebagai review terakhir.

#### 10.1b Skill tambahan (terpasang global, 28 Nov 2026)

Skill berikut tersedia di `~/.agents/skills/` (global, bukan per-repo). Pakai **secara kontekstual**, bukan semua sekaligus — pilih yang sesuai tugas:

| Sumber | Skill | Dipakai untuk |
|---|---|---|
| **Emil Kowalski** (`emilkowalski/skills`) | `animate`, `choreograph`, `review-animations`, `improve-animations`, `find-animation-opportunities`, `remove-animations`, `animation-vocabulary`, `animation-performance`, `gestures` | Motion yang punya tujuan: easing, durasi, stagger, kapan harus **tidak** beranimasi, audit/kritik animasi yang sudah ada. |
| **Emil Kowalski** | `emil-design-eng`, `learn-taste`, `break-ui`, `mobile-native`, `ask-emil` | Design engineering & taste; kritik visual; perilaku mobile. |
| **Vercel** (`vercel-labs/agent-skills`) | `web-design-guidelines`, `vercel-react-best-practices`, `vercel-composition-patterns`, `vercel-optimize`, `vercel-react-view-transitions`, `deploy-to-vercel`, `writing-guidelines` | Audit UI/UX/a11y/performa; praktik frontend; optimasi resource & deploy. (Catatan: repo ini Astro, bukan React — pakai prinsipnya, jangan memaksa pola React.) |
| **Superpowers** (`obra/superpowers`) | `systematic-debugging`, `verification-before-completion`, `writing-plans`, `executing-plans`, `brainstorming`, `requesting-code-review`, `receiving-code-review`, `test-driven-development`, `dispatching-parallel-agents`, `subagent-driven-development` | Cara kerja: pahami masalah → rencana → implementasi bertahap → verifikasi → review. Cocok untuk tugas multi-file & delegasi sub-agent. |
| **Matt Pocock** (`mattpocock/skills`) | `code-review`, `codebase-design`, `improve-codebase-architecture`, `diagnosing-bugs`, `implement`, `research`, `retro`, `ask-matt` | Review kode berdasarkan spesifikasi & arsitektur, bukan cuma error browser. |

**Tidak dipasang / tidak dipakai:** Cloudflare Security Audit — atas keputusan owner, tidak masuk stack ini.

**Aturan pemakaian:**
- Utamakan `verification-before-completion` + `systematic-debugging` sebelum menyatakan tugas selesai.
- Untuk motion, jangan hanya `animate` — sertakan `review-animations`/`find-animation-opportunities` agar animasi tetap purposeful.
- Untuk perubahan UI, sertakan `web-design-guidelines` + `antislop-ui`.
- Jangan menumpuk skill yang tumpang tindih (mis. `brainstorming` + `writing-plans` sekaligus tanpa kebutuhan).

### 10.2 UI/UX "promax" — keputusan desain
- Satu focal point per layar; whitespace sebagai struktur; asimetri disengaja, bukan bento grid seragam.
- Tiap keputusan visual punya alasan satu baris (R-31).
- Dilarang: bento mosaic, fake terminal, capsule badge berlebih, colored stripe, glow, shadow everywhere, 3 kartu identik, hero screenshot kostum, emoji dekoratif.
- Jangan menambah animasi/dekorasi hanya agar terlihat "modern". Motion harus punya fungsi.

### 10.3 Aturan konten (integritas)
- Jangan mengarang pengalaman, jabatan, sertifikasi, kemampuan, metrik, atau fitur produk.
- Lahir tahun, masa sekolah, peran organisasi, dan status kredensial harus cocok dengan `CV-FARAS.md` & `LINKEDIN-SIAP-PASTE.md` (sumber kebenaran fakta diri). Perubahan fakta hanya dari owner.
- AI Detector: skor adalah **indikator tidak pasti**, bukan bukti penggunaan AI atau pelanggaran akademik.
- DEXTRA: prototipe interaktif, **bukan** enterprise production-ready.
- PMR & Dewan Ambalan: **Anggota, Seksi Kegiatan** — bukan ketua/koordinator/leader.

### 10.4 Delegasi ke sub-agent
Tugas non-trivial (multi-file, paralel, audit mendalam) **wajib** didelegasikan ke sub-agent dengan:
- Scope write yang **disjoint** (tidak saling menimpa).
- Validator yang jelas (build / grep / kontras / XML valid).
- Skill antislop + UI/UX promax **disertakan di prompt sub-agent**, bukan hanya di prompt utama.
- Writer tidak boleh commit/push tanpa otorisasi owner.

### 10.5 Urutan kerja & verifikasi
- Kerjakan bertahap; build & cek diff setelah tiap kelompok perubahan.
- Pisahkan **static code review** dari **visual verification**. Jangan klaim lulus visual jika tidak ada browser yang benar-benar merender.
- Environment Android/Termux tidak mendukung Playwright/Chromium — visual verification harus dilaporkan sebagai limitation atau dilakukan owner.
- Jangan commit/push sebelum lapor hasil dan mendapat persetujuan.

---

## 11. Definition of Done

1. Monokrom ketat 6 hex, nol warna lain, nol gradien/glow/blur dekoratif.
2. Tipografi Space Grotesk / Inter / JetBrains Mono (fallback monospace), mono >= 12px.
3. Hero deep black dengan headline `clamp(3.5rem,11vw,10rem)` dan baris ke-2 outline sebagai satu signature; angka section oversized; ritme kontras sesuai DESIGN.md.
4. Semua section A–H terimplementasi.
5. Screenshot proyek asli terpasang (atau limitation dilaporkan jujur).
6. Status proyek jujur, tanpa klaim berlebih. DEXTRA prototipe + governance; AI Detector disclaimer; dua link demo berbeda.
7. Peran organisasi Member, Activities Section 2023-2025 (Youth Red Cross / Scout Ambalan Council), tanpa "leadership"; SMK 2023/2026; BNSP in issuance.
8. Responsive di 5 breakpoint.
9. Semua link & tombol berfungsi; motion reduced-motion aman; HTMLParser stack kosong.
10. Build & type check sukses.
11. Deployment configuration dipertahankan.
12. Tidak push/publish tanpa otorisasi eksplisit owner.
