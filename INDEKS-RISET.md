# INDEKS RISET LENGKAP: Portofolio Faras Fadhil Firdaus

Kumpulan semua hasil riset yang sudah dilakukan, supaya tidak perlu mengulang percakapan.
Tanggal: 27 November 2026. Semua link divalidasi langsung saat riset.

---

## 1. REFERENSI PORTOFOLIO ORANG (28 link tervalidasi)

File pendek: `/sdcard/Download/porto-link.txt`

### Top pilihan (modern + ringan + konten jelas)
- Brittany Chiang · https://brittanychiang.com/ · repo https://github.com/bchiang7/v4
- Lee Robinson · https://leerob.com/ (leerob.io → 307)
- Yorben Vander Sleyen · https://yorben.me/ · repo https://github.com/Yvsleyen00941/Yvsleyen00941.github.io
- Korey Wang · https://korey2028-prog.github.io/portfolio/ (zero-JS)
- Ahmad Shadeed · https://ishadeed.com/
- Cyd Stumpel · https://cydstumpel.nl/
- Jessica Hische · https://jessicahische.is/
- Marek Ševčík · https://www.mareksevcik.com/
- Damián Panes · https://www.dapan.es/en/
- Aryan Deshmukh · https://a-ryan-1.github.io/Portfolio-Website/

### Developer / content
- Abdul Rahman · https://sabdulrahman.github.io/
- Muhammad Raza Master · https://mrazam110.github.io/
- Zhafron Adani · https://tickernelz.github.io/
- Kent C. Dodds · https://kentcdodds.com/ · repo https://github.com/kentcdodds/kentcdodds.com
- Josh W. Comeau · https://www.joshwcomeau.com/
- Timothy Lin starter · https://tailwind-nextjs-starter-blog.vercel.app/ · repo https://github.com/timlrx/tailwind-nextjs-starter-blog

### Kreatif / editorial
- Rauno Freiberg · https://rauno.me/
- Sanoj D · https://sanoj.dev/
- 0-draft · https://0-draft.github.io/
- Justin Schueler · https://justinschueler.com/
- Oluwatobi Salawu · https://www.oluwatobisalawu.com/
- Ilnaz Khasanshin · https://ntch.design
- Rinat Seif · https://seifrinat.com
- Kevin Hipke · https://kevinhipke.com/
- Sara Soueidan · https://www.sarasoueidan.com/
- Jhey Tompkins · https://www.jhey.dev/
- Jeff Huang · https://jeffhuang.com/
- Gleb Kuznetsov · https://glebich.com/

### Link DITOLAK (jangan dipakai)
- artiom yakushev → DNS mati · olhalazarieva → boilerplate · tobias schneider → cert expired
- ryanfitzgerald.github.io / dhruvburada → 404 · godly.website → recent.design · CSSDA portfolio → 404
- typewolf.com/sites → 404 · awwards.com/websites/red/2/ → 404 · www.minimal.gallery → 301 ke minimal.gallery

---

## 2. REFERENSI EDITORIAL-OXBLOOD (riset terbaru)

Jujur: tidak ada 5 portfolio "oxblood murni" yang hex-nya terverifikasi. Ini 5 terdekat:

1. Burgundy Studio · https://www.awwwards.com/sites/burgundy-studio (warna tak terverifikasi, nama+positioning)
2. Burgundy Wine Collection · https://www.awwwards.com/sites/burgundy-wine-collection (Terroir Map, horizontal scroll)
3. Rinat Seif · https://seifrinat.com, hex nyata `#EBEAE5` + `#D52D29` + `#C8271F`, "portfolio as marking sheet", sangat ringan
4. Basar Studio · https://basar.studio/, `#fbfbf2` + `#1b1b1c`, aksen `#a30a0a`, font PP Editorial New Light
5. Anekdote Studio · https://www.anekdotestudio.dk/, dark red `#a30a0a`, tagline "Built once. Still compounding."

### Tipografi
- PP Editorial New Light (paling cocok) · https://pangrampangram.com/products/editorial-new (komersial, "Free to Try")
- Canela · https://www.typewolf.com/fonts/canela (komersial)
- Fallback gratis: Fraunces https://fonts.google.com/specimen/Fraunces · Cormorant Garamond https://fonts.google.com/specimen/Cormorant+Garamond · Gambetta https://www.fontshare.com/fonts/gambetta
- Body: DM Sans / DM Mono (Rinat memakai DM Mono + Martian Mono)

### Ide kecil yang belum diterapkan
"Satu coretan tinta oxblood" ala Rinat Seif: stempel/garis tipis dengan `clip-path` reveal, ~10 baris CSS. Atau duotone portrait mini via `mix-blend-mode: screen`. Tidak mengubah layout Stitch.

---

## 3. MOTION: paket "Quiet Editorial" (JS = 0 KB)

North star: **Cyd Stumpel**, https://cydstumpel.nl/start-using-scroll-driven-animations-today/ + https://www.awwwards.com/sites/cyd-stumpel-portfolio-2025 (CSS-native, aksesibel, WPO tinggi). Jangan pakai Jesper Landberg/WebGL atau Rauno sebagai justifikasi motion berat.

Teknik:
1. `@view-transition { navigation: auto; }` dalam `@media (prefers-reduced-motion: no-preference)`, cross-fade 320ms.
2. `clip-path: inset()` reveal via `animation-timeline: view()` (bukan fade-up semua elemen), stagger pakai `--i`.
3. Hover kartu `translate: 0 -2px` + border oxblood 150ms; tombol oxblood → gelap 180ms.
4. Portrait drift ±6px CSS-only (opsional).

Aturan: `animation-timeline` HARUS setelah shorthand `animation`. Dilarang pulse/loop, bounce, fade-up semua elemen, parallax berlebih, scroll hijacking. Durasi premium 150–320ms, easing `cubic-bezier(0.2,0,0,1)` / `(0.05,0.7,0.1,1)`. Biaya ~0,5–0,7 KB gzip.

Sumber: MDN @view-transition, MDN animation-timeline, Chrome scroll-driven animations, M3 motion tokens.

Diterapkan di `src/styles/motion.css`.

---

## 4. STACK & TEKNOLOGI

- Astro static + Tailwind v4 (`@tailwindcss/vite`) + Fontsource variable + CSS-native motion + GitHub Pages/Netlify.
- Dilarang: `cdn.tailwindcss.com`, GSAP/Framer untuk 1 halaman, WebGL, iklan, 9 font preload.
- Font: Space Grotesk Variable (display) + Inter Variable (body), WOFF2 latin, preload 1 font.
- Gambar: AVIF/WebP + srcset/sizes + width/height; hero fetchpriority=high, tidak lazy.
- SEO: JSON-LD ProfilePage/Person, og:image 1200×630, robots.txt, llms.txt, canonical.
- Perkiraan first-load ~90–180 KB gzip, JS = 0 KB.

Sumber: tailwindcss.com/docs, docs.astro.build, web.dev/learn/performance/optimize-web-fonts, MDN.

---

## 5. WARNA

Final: paper `#F4F1EA`, ink `#1C1B19`, **oxblood `#8C2F39`**, brass `#B08D57` (dekorasi saja).
Dark: `#151413` / `#F4F1EA` / `#C75B66` / `#C9A227`.

Kontras (diukur dengan `contrast-check.py`):
- oxblood on paper = 7.21:1 PASS
- ink on paper = 15.26:1 PASS
- brass on paper = 2.74:1 FAIL → dipakai hanya sebagai dekorasi, teks kecil pakai ink

Ditolak: hijau neon, Indigo `#6366F1`, Cyan `#06B6D4`, Violet `#8B5CF6`, mint `#64FFDA`.

---

## 6. KONTEN & PRINSIP

Prinsip Faras: **jangan mengecilkan potensi, jangan membesar-besarkan pengalaman.**
- Experience = nyata (IT Support Intern Soerya Global Komputer 4 bulan; PMR & Dewan Ambalan 2023–2025).
- Projects = DEXTRA BUILT dengan live demo prototype, AI Detector LIVE DEMO (sebelumnya planned, sekarang live), Experiments ONGOING.
- Areas of Interest = 9 bidang, bukan pengalaman.
- BNSP Practical Office Advance = dalam proses terbit, jangan "certified".

File konten: `/sdcard/Download/konten-porto-faras.md`.

### Link proyek live Faras (divalidasi 27 November 2026)

- AI Detector Mahasiswa: https://ai-detector-mahasiswa.vercel.app
  HTTP 200. Judul asli halaman memakai tanda hubung panjang, ditulis di sini dengan koma sesuai aturan R-02 (em dash = 0): "Faraz Detector AI, Detektor AI untuk Mahasiswa". Fitur nyata: tempel/upload txt/md/pdf/docx, 10 pola bahasa, model lokal opsional sekitar 130MB, skor dengan highlight, export laporan PDF, ID dan EN, FAQ jujur (tidak ada detektor 100% akurat, bukan pengganti Turnitin, teks privat di browser). Status: LIVE DEMO.
- DEXTRA: https://dextra-office-agent.vercel.app
  HTTP 200. Judul asli halaman memakai tanda hubung panjang, ditulis di sini dengan koma sesuai R-02: "DEXTRA, Governed Enterprise AI Workforce & Operations Platform". Fitur: 4 spesialis (Finance, HR, Inventory, Operations), Policy Validator deterministik non-LLM, alur Request, Understand, Plan, Validate, Approve, Execute, 6 instrumen kontrol, Next.js 16 dan React 19, MCP. Ada /overview dan /settings (200), tapi `/about` = 404, jadi pakai root `/`. Status: BUILT dengan link live demo, sebut prototype / demo interaktif, bukan production enterprise deployment.

Catatan validasi lanjutan:
- `/about` pada DEXTRA mengembalikan 404, jangan ditautkan.
- Tidak ada repo GitHub publik untuk DEXTRA. Jangan menautkan repo rekaan, semua URL GitHub untuk DEXTRA sudah dicek 404.
- Situs DEXTRA memakai entitas demo fiktif, jadi jangan klaim production deployment.
- Kedua link di atas sudah dipasang di projects.ts, Projects.astro, index.html, index-mobile.html, CV-FARAS.md, dan cv-faras.html.

---

## 7. ANTISLOP

Skill aktif: core + copywriting + UI + human + layoutmobile, mode DURING.
Dial: ENERGY 2 / RHYTHM 2 / MOTION 2.
Delivery Gate dijalankan oleh orchestrator di akhir, dengan bukti grep dan contrast-check.

---

## 8. DEPENDENCY

Belum di-install sesuai instruksi. Estimasi `node_modules` ~110–165 MB, bisa dicicil:
1. fontsource + lucide + sitemap + typescript (~15–20 MB)
2. tailwindcss + @tailwindcss/vite (~15–25 MB)
3. astro (~80–120 MB)

Untuk sekadar membuka `index.html` / `index-mobile.html`, dependency = 0 MB (CSS sudah inline).
