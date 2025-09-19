# PRD: Website Portofolio Pribadi - Sakti Indra Heradewa

| Versi | Tanggal           | Penulis                 | Status        |
| ----- | ----------------- | ----------------------- | ------------- |
| 1.0   | 19 September 2025 | Sakti Indra Heradewa    | In Progress   |

---

### 1. Latar Belakang dan Masalah (Background & Problem)

Sebagai seorang mahasiswa Teknik Informatika semester 5 yang aktif membangun proyek, saya membutuhkan sebuah platform tunggal yang profesional untuk menampilkan karya dan kemampuan saya. Saat ini, proyek-proyek tersebar di GitHub dan sulit untuk menceritakan konteks serta proses di baliknya. Website portofolio ini akan berfungsi sebagai pusat digital identitas profesional saya untuk menjangkau rekruter, calon klien, dan sesama developer.

**Masalah yang Diselesaikan:**
-   Kurangnya representasi profesional yang terpusat untuk menampilkan proyek dan skill.
-   Kesulitan dalam menceritakan kisah di balik setiap proyek kepada audiens non-teknis (HRD).
-   Memperkuat personal branding sebagai seorang Web Developer yang kompeten.

---

### 2. Tujuan dan Metrik Keberhasilan (Goals & Success Metrics)

**Tujuan Utama:**
-   Membuat sebuah website portofolio yang cepat, modern, dan informatif untuk menunjukkan kompetensi dalam pengembangan web full-stack.

**Tujuan Pendukung:**
1.  Menampilkan proyek-proyek kunci (UangSakti.my.id & Zona Movie) dengan deskripsi pencapaian yang jelas.
2.  Menyoroti kemampuan teknis spesifik: Next.js, Laravel, Supabase, dan skill DevOps (self-hosting).
3.  Menyediakan akses mudah ke profil profesional lain (LinkedIn, GitHub).

**Metrik Keberhasilan:**
-   **Kualitatif:** Mendapat feedback positif dari rekruter atau rekan developer mengenai desain dan konten portofolio.
-   **Kuantitatif:**
    -   Website berhasil di-deploy dan dapat diakses publik dengan baik.
    -   (Jangka Panjang) Peningkatan kunjungan ke profil LinkedIn atau GitHub yang berasal dari website portofolio.

---

### 3. User Persona (Target Audiens)

1.  **Rekruter Teknis / HRD Perusahaan Teknologi:**
    -   **Tujuan:** Mencari kandidat potensial dengan cepat. Ingin melihat proyek nyata dan skill yang relevan dalam waktu singkat.
    -   **Kebutuhan:** Website harus *scannable*, *to-the-point*, dan menonjolkan pencapaian utama.

2.  **Manajer Teknik / Developer Senior:**
    -   **Tujuan:** Mengevaluasi kedalaman teknis kandidat.
    -   **Kebutuhan:** Tertarik pada arsitektur proyek, pilihan teknologi, dan ingin melihat kualitas kode (melalui link ke GitHub).

---

### 4. Ruang Lingkup & Fitur (Scope & Features)

Website ini akan dibangun sebagai *Single-Page Application* (SPA) dengan navigasi *scroll* ke setiap bagian. Semua konten akan dikelola melalui satu file konfigurasi (`src/config/index.ts`) untuk fleksibilitas maksimal.

#### **Fitur In-Scope (Akan Dibuat):**

1.  **Navigasi Utama:** Tautan yang mengarah ke bagian: `Pengalaman`, `Proyek`, `Tentang Saya`.
2.  **Hero Section:** Tampilan pembuka yang berisi nama, spesialisasi, ringkasan singkat, dan email.
3.  **Experience Section:** Menampilkan pengalaman proyek dalam format linimasa, merinci posisi, durasi, dan poin-poin pencapaian.
4.  **Projects Section:** Galeri proyek dalam bentuk kartu (card). Setiap kartu berisi gambar, nama proyek, ringkasan, dan tautan ke *Live Preview* & *Source Code*.
5.  **About Section:** Paragraf deskriptif tentang diri sendiri, hasrat di bidang teknologi, dan foto personal.
6.  **Footer/Contact Section:** Berisi tautan ke media sosial (LinkedIn, GitHub, Instagram).
7.  **Desain Responsif:** Tampilan website harus optimal di perangkat desktop maupun mobile.

#### **Fitur Out-of-Scope (Tidak Dibuat di v1.0):**

-   Sistem Blog.
-   Formulir Kontak (kontak hanya melalui email dan media sosial).
-   Database atau CMS eksternal.
-   Fitur animasi yang kompleks.

---

### 5. Persyaratan Teknis (Technical Requirements)

1.  **Framework:** **Next.js** (dengan **Static Site Generation - SSG** untuk performa maksimal).
2.  **Styling:** **Tailwind CSS** untuk pengembangan UI yang cepat dan konsisten.
3.  **Manajemen Konten:** Semua teks dan data akan dikelola secara terpusat di file `src/config/index.ts` dengan tipe data yang sudah didefinisikan (`SiteConfig` & `SiteContent`).
4.  **Kontrol Versi:** **Git**, dengan repository di-host di **GitHub**.
5.  **Hosting & Deployment:** Di-deploy di **Vercel** untuk CI/CD yang mulus dan otomatis setiap kali ada `git push` ke branch `main`.
6.  **Persyaratan Non-Fungsional:**
    -   **Performa:** Target skor Google Lighthouse di atas 90 untuk kategori Performance, Accessibility, dan SEO.
    -   **Aksesibilitas:** Menggunakan tag HTML semantik untuk memastikan website dapat diakses oleh semua pengguna.

---

### 6. Desain dan Wireframe (UX/UI)

-   **Prinsip Desain:** Clean, Minimalist, dan Profesional. Fokus pada keterbacaan dan presentasi konten yang jelas.
-   **Palet Warna:**
    -   **Primary:** `#5755ff` (Biru/Ungu yang modern).
    -   **Background:** Putih atau Abu-abu sangat terang (`#F8F9FA`).
    -   **Teks:** Hitam atau Abu-abu gelap (`#212529`).
-   **Inspirasi:** Mencari referensi dari website seperti Lapa Ninja, Awwwards, dan portofolio developer lain yang menggunakan Next.js.
-   **Wireframe:** (Untuk saat ini, struktur akan mengikuti urutan section: Hero -> Experience -> Projects -> About -> Footer).