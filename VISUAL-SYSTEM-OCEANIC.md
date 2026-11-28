# Visual System · White Editorial × Oceanic

Dokumen eksplorasi visual · 28 November 2026 · Status: **direction only, bukan implementasi**

Ini adalah eksplorasi **sistem visual** dari portofolio yang sudah ada. Ia tidak mengganti struktur halaman, tidak membuat website baru, tidak menimpa konten, dan tidak mengubah `DESIGN.md` v4.0, `PRD.md` v4.0, `VISUAL-UPGRADE.md`, `src/`, `index*.html`, atau `package.json`. Jika ada konflik, ketiga dokumen itu tetap menjadi sumber kebenaran untuk struktur, fakta, dan konten. Dokumen ini hanya mengajukan **cara warna, huruf, dan gerak dirasakan** apabila owner menyetujui arah ini sebagai amandemen terpisah.

Dokumen ini tidak meminta generate website, tidak meminta redesign layout, dan tidak menambah elemen HTML baru. Semua contoh CSS di bawah adalah ilustrasi token, bukan petunjuk untuk memasang komponen baru.

Metode: `antislop` core, `antislop-copywriting`, `antislop-ui`, `antislop-human` (mode **DURING**), `learn-taste`, `emil-design-eng`, `review-animations`, Vercel `web-design-guidelines`, Matt `code-review`. Cloudflare tidak dipakai. Semua kontras diukur dengan `~/.agents/skills/antislop-human/contrast-check.py`, bukan dikira.

**Catatan verifikasi visual:** CDP di `http://127.0.0.1:9222` tidak merespons (`Connection refused`) saat dokumen ini ditulis. Tidak ada screenshot live yang dibaca untuk tugas ini, maka **tidak ada klaim lulus visual**. Sesuai PRD §10.5, verifikasi visual diserahkan ke owner di browser yang benar-benar merender.

---

## 1. COLOR SYSTEM · White Editorial × Oceanic

### 1.1 Palet enam hex

| Peran | Hex | Nama | Alasan satu baris (R-31) |
|---|---|---|---|
| Kanvas dominan | `#FFFFFF` | Pure White | Putih bersih memberi ruang baca dan membuat bukti proyek jadi satu-satunya benda berat di halaman |
| Permukaan sekunder | `#F3F7FA` | Mist | Putih kebiruan sangat ringan memisahkan blok tanpa menambah garis tebal atau warna baru |
| Teks utama | `#202631` | Graphite | Gelap tetapi tidak hitam pekat, cukup berat untuk heading tanpa membuat halaman terasa gelap |
| Teks pendukung | `#596575` | Slate | Abu kebiruan yang masih punya tulang, bukan abu pucat yang lemah saat dibaca |
| Aksen identitas | `#176D83` | Ocean Blue | Satu warna laut yang dipakai untuk menandai arah, fokus, dan status, bukan untuk mewarnai seluruh blok |
| Aksen sekunder | `#168F91` | Sea Teal | Teal hanya sebagai pendamping pada detail kecil, bukan saingan ocean blue |

Distribusi: **75–85% putih / putih kebiruan**, graphite untuk heading, slate untuk deskripsi, ocean blue sebagai aksen utama, teal sebagai aksen sekunder. Gradient laut **selektif**, maksimal di hero dan satu momen project feature, bukan di setiap section. Sisanya dibiarkan bernapas.

Turunan yang diizinkan: transparansi dari enam hex di atas untuk hover halus, misalnya `rgba(32,38,49,.06)` di terang dan `rgba(255,255,255,.08)` di atas graphite. Tidak ada hex identitas ketujuh.

### 1.2 Aturan pakai per peran

| Peran | Boleh | Tidak boleh | Alasan (R-31) |
|---|---|---|---|
| `#FFFFFF` | Latar default, permukaan kode, area gambar | Dipakai sebagai teks di atas `#F3F7FA` | Putih butuh gelap di belakangnya supaya tidak hilang |
| `#F3F7FA` | Latar section pembuka, latar panel metadata, ruang negatif | Menjadi latar teal small text tanpa pengecekan ulang | Mist menaikkan luminansi, jadi warna yang tipis melemah |
| `#202631` | Heading, angka besar, teks di atas putih/mist, latar penutup | Dipakai sebagai garis tipis dekoratif di semua elemen | Beratnya ada pada massa teks, bukan pada garis |
| `#596575` | Paragraf, caption, label, deskripsi proyek | Small text di atas permukaan gelap | Slate dirumuskan untuk latar terang |
| `#176D83` | Garis 1px, fokus, status statis, satu kata kunci per layar | Background penuh, glow, fill tombol, teks kecil di atas graphite | Aksen hilang kalau dipakai di mana-mana |
| `#168F91` | Garis pendamping, label sekunder besar, detail hover | Teks normal, teks kecil, badge berulang | Kontrasnya tidak cukup untuk teks normal di terang (lihat 1.3) |

### 1.3 Kontras terukur

Diukur 28 November 2026 dengan `.agents/skills/antislop-human/contrast-check.py`. Tool lolos selftest: `9 reference pairs OK`. Ambang: **4.5:1 untuk teks normal**, **3.0:1 untuk teks besar**.

| # | Pasangan (teks pada latar) | Rasio | Normal 4.5:1 | Large 3.0:1 |
|---|---|---:|---|---|
| 1 | `#202631` / `#FFFFFF` | **15.18:1** | PASS | PASS |
| 2 | `#202631` / `#F3F7FA` | **14.10:1** | PASS | PASS |
| 3 | `#596575` / `#FFFFFF` | **5.93:1** | PASS | PASS |
| 4 | `#596575` / `#F3F7FA` | **5.50:1** | PASS | PASS |
| 5 | `#176D83` / `#FFFFFF` | **5.91:1** | PASS | PASS |
| 6 | `#168F91` / `#FFFFFF` | **3.91:1** | **FAIL** | PASS |

**Temuan penting:** slate `#596575` **tidak gagal** AA untuk small text. Ia lolos dengan margin sehat di atas`#FFFFFF` (5.93:1) dan `#F3F7FA` (5.50:1), jadi tidak perlu fallback lebih gelap untuk slate pada kedua latar itu. Fallback tetap disiapkan hanya untuk permukaan yang lebih gelap dari mist atau untuk teks sangat kecil di atas teal.

**Teal perlu fallback.** `#168F91` lolos untuk teks besar (3.91:1) tapi **gagal untuk teks normal**. Maka:

| Fallback | Latar | Rasio | Status |
|---|---|---:|---|
| `#0F6E70` / `#FFFFFF` | Pure White | **6.03:1** | PASS, fallback teal untuk teks normal |
| `#0F6E70` / `#F3F7FA` | Mist | **5.59:1** | PASS, fallback teal untuk teks normal |
| `#4A5666` / `#F3F7FA` | Mist | **6.93:1** | PASS, fallback slate lebih gelap bila dipakai di atas permukaan gelap turunan |
| `#4A5666` / `#FFFFFF` | Pure White | **7.46:1** | PASS |

Aturan turunan: `#168F91` hanya untuk garis, dekorasi non-teks, atau teks besar. Untuk teks small dan body, pakai `#0F6E70`. Dua hex fallback ini **bukan identitas baru**, hanya turunan aksen yang terukur.

**Pasangan yang dilarang setelah diukur:**

| Pasangan | Rasio | Keputusan |
|---|---:|---|
| `#176D83` / `#202631` | 2.57:1 | Dilarang sebagai teks maupun garis fokus di atas graphite |
| `#168F91` / `#202631` | 3.88:1 | Lolos non-teks saja; jangan dipakai sebagai teks kecil di penutup gelap |
| `#168F91` / `#F3F7FA` | 3.63:1 | Gagal teks normal; wajib fallback `#0F6E70` |

Di atas `#202631`, teks memakai `#FFFFFF` (15.18:1). Fokus keyboard di atas graphite memakai garis terang, bukan ocean blue.

### 1.4 Gradient laut yang selektif

Satu-satunya bentuk gradient yang dipertimbangkan: sapuan sangat lemah dari `#F3F7FA` ke `#FFFFFF` dengan pencahayaan `#176D83` pada **opacity maksimal 0.06**, hanya di belakang elemen hero atau satu project feature. Bukan di About, Experience, Skills, Contact. Bukan glow, bukan radial orb, bukan warna penuh.

```css
:root {
  --white: #FFFFFF;
  --mist: #F3F7FA;
  --graphite: #202631;
  --slate: #596575;
  --ocean: #176D83;
  --teal: #168F91;
  --teal-text: #0F6E70; /* fallback terukur untuk teks normal */
  --sea-wash: 0.06;
}

.oceanic-wash {
  background: linear-gradient(
    135deg,
    var(--mist) 0%,
    var(--white) 62%,
    color-mix(in srgb, var(--ocean) calc(var(--sea-wash) * 100%), var(--white)) 100%
  );
}
```

R-31: gradient dipakai sekali untuk memberi arah cahaya pada momen pembuka, karena mengulangnya di semua section akan mengubah identitas menjadi dekorasi.

### 1.5 Dilarang

Beige, cream, dark-dominan sebagai default, gradient berlebih, neon, SaaS generik, glow, blur dekoratif, shadow berlebih, bento grid, kartu identik, capsule badge, colored stripe, ungu, emas, dan efek 3D berat. Dua screenshot asli (`dextra.webp`, `ai-detector.webp`) tidak diubah, ditimpa gradient, atau dijadikan mockup.

---

## 2. TYPOGRAPHY SYSTEM

### 2.1 Famili

| Peran | Font | Alasan satu baris (R-31) |
|---|---|---|
| Display | **Syne** | Bentuk geometris yang tegas dan agak liar memberi suara editorial yang tidak dimiliki font default, tanpa menjadi poster berteriak |
| Body / UI | **Plus Jakarta Sans** | Rapi dan hangat pada paragraf panjang, cukup netral untuk tetap profesional di sebelah Syne |
| Metadata | **JetBrains Mono** | Angka, status, dan penomoran sejajar rapi tanpa menambah warna atau badge |

Catatan implementasi: font di atas adalah **arah yang diusulkan**, bukan pengganti langsung dari Space Grotesk / Inter / mono yang aktif sekarang. `DESIGN.md` v4.0 dan `PRD.md` §11 tetap berlaku sampai owner menyetujui amandemen. Jika disetujui, terapkan lewat token font dan preload satu display font saja, `font-display: swap`, tanpa CDN.

### 2.2 Specimen realistis

Ukuran di bawah adalah rentang untuk eksplorasi, bukan perintah mengubah selector yang sudah ada.

| Peran | Desktop | Mobile | Perlakuan |
|---|---:|---:|---|
| Hero | 64–88px | 40–52px | Syne, `line-height: 1.02`, `text-wrap: balance`, sentence case, kata tidak pecah |
| Section heading | 40–52px | 32–38px | Syne, weight lebih ringan dari hero, whitespace di atas lebih besar daripada di bawah |
| Project title | 28–36px | 25–30px | Syne, normal case, berhenti sebelum deskripsi mulai |
| Body | 16–18px | 16px | Plus Jakarta Sans, `line-height: 1.6`, maksimal 60–68ch |
| Metadata | 12–14px | 12px | JetBrains Mono, `tabular-nums`, tracking terukur, bukan extreme letter-spacing |

Satu baris specimen desktop:

```text
Syne 88px     Building with intent.
Syne 48px     Technology should solve real problems.
Syne 32px     DEXTRA
Mono 13px     SYSTEM DESIGN / 2026
Jakarta 17px  Building modular interfaces, REST services, and autonomous scripting with modern web stacks and LLM endpoints.
```

Satu baris specimen mobile 390px:

```text
Syne 46px     Building with intent.
Syne 34px     Technology should solve real problems.
Syne 27px     DEXTRA
Mono 12px     SYSTEM DESIGN / 2026
Jakarta 16px  Building modular interfaces, REST services, and autonomous scripting with modern web stacks and LLM endpoints.
```

Tiga frasa pendek di atas (`Building with intent.`, `Technology should solve real problems.`, `SYSTEM DESIGN / 2026`) adalah **contoh specimen yang disediakan untuk eksplorasi tipografi**. Tidak ditemukan di `src/` saat dokumen ini ditulis, jadi tidak boleh diklaim sebagai copy existing dan tidak boleh disisipkan ke halaman tanpa keputusan owner. Contoh body diambil dari teks yang memang ada di `src/components/WhatIDo.astro`.

### 2.3 Aturan hierarki

- Jangan semua heading uppercase. Uppercase hanya untuk metadata dan status yang memang berfungsi sebagai label.
- Pakai **sentence case + weight + whitespace** untuk membuat hierarki. Besar huruf bukan satu-satunya alat.
- Syne dipakai untuk section heading dan project title. Jangan dipakai untuk seluruh paragraf.
- JetBrains Mono hanya untuk data, status, penomoran, dan caption teknis. Bukan untuk headline aesthetic.
- `text-wrap: balance` pada heading supaya tidak ada widow.
- Panjang baris 60–68ch untuk body, jangan lebih.
- Tap target tetap 44px, tidak berubah karena tipografi.

| Keputusan | Alasan satu baris (R-31) |
|---|---|
| Syne sebagai display | Karakternya memberi identitas yang langsung dikenali, sehingga portofolio tidak terbaca sebagai template |
| Plus Jakarta Sans sebagai body | Huruf ini menjaga narasi teknis tetap enak dibaca saat Syne sedang berbicara di heading |
| JetBrains Mono sebagai metadata | Data sejajar dan terasa sengaja, tanpa menambah warna atau badge |
| Hero 64–88px desktop | Cukup berani untuk identitas, tetapi tidak memecah kata di 390px |
| Section 40–52px | Section punya berat sendiri tanpa menyaingi hero |
| Body 16–18px | Paragraf profesional terbaca lama tanpa menjadi dinding teks |

---

## 3. MOTION SYSTEM

Satu sistem gerak saja. CSS + IntersectionObserver yang sudah ada tetap成为 default. Tidak ada library animasi baru untuk dokumen ini.

Easing:

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
```

| Efek | Durasi | Ease | Trigger | Alasan (R-31) |
|---|---:|---|---|---|
| Hero entrance, staggered text reveal | 600–900ms total, stagger 60–90ms per baris | `ease-out` | Load, gate `has-motion` | Nama dibaca lebih dulu, lalu peran, lalu CTA, bukan semua muncul sekaligus |
| Scroll reveal, fade + translateY 16–24px | 450–600ms | `ease-out` | IntersectionObserver | Konten muncul saat dibaca, bukan saat halaman selesai dimuat |
| Image mask / clip-path reveal | 500–600ms | `ease-out` | IntersectionObserver | Screenshot asli “mendarat” dengan arah, bukan sekadar fade |
| Nav underline transition | 180–250ms | `ease-out` | Hover / active | Menandai posisi tanpa berkedip atau berpindah mendadak |
| Project hover scale | 1.02–1.04, 180–250ms | `ease-out` | `@media (hover:hover) and (pointer:fine)` | Feedback kecil pada satu elemen yang memang interaktif |
| Section opacity / transform halus | 450–600ms | `ease-out` | IntersectionObserver | Memberi ritme antar section tanpa berubah jadi kartu animasi |
| Parallax sangat ringan | maksimal 6–8px | linear | Scroll, desktop saja | Kedalaman tipis pada potret, tidak mengubah cara halaman digulir |
| Page transition fade singkat | 180–250ms | `ease-out` | Hanya bila framework benar-benar mendukung | Menghindari lompatan putih saat pindah halaman, bukan efek dekoratif |

### 3.1 Aturan keras

- `prefers-reduced-motion: reduce` wajib. Semua gerak non-esensial mati. Yang tersisa hanya perubahan warna/opacity instan untuk state dan fokus.
- Konten tetap terlihat tanpa JS. Gate `html.has-motion`, `<noscript>`, dan safety timeout dari `DESIGN.md` Bab 6 tetap dipertahankan.
- Hindari bounce, floating tanpa alasan, custom cursor, scroll hijacking, loading screen gaya, dan animasi yang terus berjalan.
- Hover motion digate di `@media (hover: hover) and (pointer: fine)`. Pointer effects mati di touch.
- Tidak ada `transition: all`, tidak ada `scale(0)`, tidak ada `ease-in` pada UI, tidak ada animasi >300ms pada elemen interaktif.
- Animasikan `transform` dan `opacity`; `clip-path` boleh sebagai pengecualian yang terukur. Jangan animasi `width`, `height`, `margin`, `padding`, `top`, atau `left`.
- Jangan animasi pada aksi keyboard yang berulang. Jangan menempatkan animasi di tiap paragraf.

R-31: gerak hanya membimbing perhatian dan memberi feedback, karena dial MOTION 1 di `DESIGN.md` v4.0 tidak berubah.

---

## 4. COMPONENT TREATMENTS

Contoh visual ini adalah **deskripsi + CSS ringan untuk dievaluasi**, bukan spesifikasi implementasi dan bukan penambahan komponen baru. Semua memakai bahasa monokrome + aksen oceanic. Tidak ada card, badge, pill, blob, atau glow generik.

### 4.1 Hero headline

Headline Syne 64–88px, graphite di atas putih. Baris pertama lebih berat, baris kedua lebih ringan. Garis ocean blue 1px muncul di bawah peran, bukan di bawah nama. Tidak ada outline, tidak ada text-stroke.

```css
.hero-title {
  font-family: "Syne", sans-serif;
  font-size: clamp(4rem, 6.2vw, 5.5rem);
  font-weight: 700;
  line-height: 1.02;
  color: var(--graphite);
  text-wrap: balance;
}
.hero-rule {
  height: 1px;
  background: var(--ocean);
  transform-origin: left center;
}
```

### 4.2 Section eyebrow

Bukan pill dan bukan badge. Nomor editorial berhuruf mono, diikuti label kecil dengan jarak 12px, lalu garis 1px sepanjang 32px berwarna ocean blue. Label memakai slate, bukan abu pucat.

```css
.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font: 500 13px/1.4 "JetBrains Mono", monospace;
  color: var(--slate);
  font-variant-numeric: tabular-nums;
}
.eyebrow::after {
  content: "";
  width: 32px;
  height: 1px;
  background: var(--ocean);
}
```

Contoh isi: `SYSTEM DESIGN / 2026`. Ini contoh label, bukan copy baru yang dipasang.

### 4.3 Project preview frame

Frame tipis 1px mist, tidak ada shadow. Screenshot asli tetap utuh dengan `width`/`height` eksplisit. Caption mono di bawah gambar memakai slate. Reveal memakai clip-path, bukan zoom besar.

```css
.project-frame {
  border: 1px solid var(--mist);
  background: var(--white);
  overflow: clip;
}
.project-frame img {
  display: block;
  width: 100%;
  height: auto;
}
.project-caption {
  font: 400 12px/1.5 "JetBrains Mono", monospace;
  color: var(--slate);
}
```

### 4.4 Timeline hairline

Garis vertikal 1px mist dengan titik ocean blue hanya pada entri yang benar-benar terjadi, bukan pada semua baris. Tanggal mono, deskripsi slate. Tidak ada kartu tanggal.

```css
.timeline {
  border-left: 1px solid var(--mist);
  padding-left: 24px;
}
.timeline-item::before {
  content: "";
  position: absolute;
  left: -4px;
  top: 8px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--ocean);
}
```

### 4.5 Contact CTA

Penutup memakai graphite sebagai latar. Teks putih, garis fokus putih, satu garis ocean blue non-teks sebagai aksen arah. CTA tidak memakai teal sebagai teks kecil karena tidak lolos AA di atas graphite.

```css
.contact {
  background: var(--graphite);
  color: var(--white);
}
.contact-cta {
  min-height: 44px;
  border: 1px solid rgba(255,255,255,.32);
  color: var(--white);
  transition: border-color 200ms var(--ease-out);
}
.contact-cta:focus-visible {
  outline: 1px solid var(--white);
  outline-offset: 3px;
}
```

R-31: kelima treatment memakai garis, hierarki, dan satu aksen karena itu bahasa yang sudah ada di portofolio, bukan karena tren komponen.

---

## 5. CATATAN IMPLEMENTASI UNTUK OPENCODE

1. Ini **hanya design system**. Jangan mengganti struktur, layout, section, selector, atau urutan konten yang sudah ada. Jangan membuat halaman baru dan jangan menghasilkan website baru.
2. Terapkan token warna dan font **secara bertahap**, satu kelompok per langkah. Cek diff setelah tiap langkah. `DESIGN.md` v4.0 tetap berlaku sampai owner menyetujui amandemen palet dan font ini.
3. Pertahankan dua screenshot asli (`public/screenshots/dextra.webp` dan `public/screenshots/ai-detector.webp`) apa adanya. Tidak ada recreate, mockup, AI image, crop ulang, atau gradient di atasnya.
4. Pertahankan semua fakta: DEXTRA prototipe interaktif, AI Detector indikator tidak pasti, Experiments ongoing, peran anggota bukan leader, BNSP in issuance, dan dua URL demo berbeda. Tidak ada sertifikat, metrik, atau klien tambahan.
5. Pertahankan `prefers-reduced-motion`, gate `has-motion`, `<noscript>`, safety timeout, fokus keyboard, tap target 44px, dan kontras AA. Pasangan warna baru wajib diukur ulang dengan `contrast-check.py` sebelum dipakai.
6. Jangan menambah em dash pada contoh UI copy. Gunakan `·` bila perlu pemisah, sesuai permintaan owner.
7. Jangan install, build, commit, atau push tanpa otorisasi eksplisit owner.

---

## Validasi dokumen

| # | Pemeriksaan | Hasil | Bukti |
|---|---|---|---|
| 1 | Hanya satu file baru dibuat | PASS | `git status --short` menunjukkan `?? VISUAL-SYSTEM-OCEANIC.md` saja; file lain tidak disentuh |
| 2 | Enam hex baru muncul | PASS | `#FFFFFF`, `#F3F7FA`, `#202631`, `#596575`, `#176D83`, `#168F91` |
| 3 | Kontras diukur, bukan dikira | PASS | Enam pasangan wajib diukur dengan `contrast-check.py`; selftest `9 reference pairs OK` |
| 4 | Ada fallback bila FAIL | PASS | `#168F91` gagal teks normal; fallback `#0F6E70` terukur 6.03:1 dan 5.59:1 |
| 5 | Tidak ada instruksi generate website / redesign layout / semantic HTML baru | PASS | Bab 5 secara eksplisit melarangnya; contoh CSS hanya ilustrasi token |
| 6 | Tidak ada em dash di contoh UI copy | PASS | Contoh copy memakai titik dan `/`; pemisah memakai `·` |
| 7 | Tidak ada sertifikat atau metrik palsu | PASS | Tidak ada angka kinerja, klien, atau kredensial baru |
| 8 | Visual verification | SKIP (limitation) | CDP `127.0.0.1:9222` connection refused; tidak ada klaim lulus visual, sesuai PRD §10.5 |
| 9 | Tidak ada build / install / commit / push | PASS | Tidak ada perintah tersebut yang dijalankan |

R-31 terakhir: dokumen ini berhenti di arah dan aturan, karena sistem visual yang belum disetujui owner dan belum diverifikasi di browser tidak boleh diubah menjadi kode.
