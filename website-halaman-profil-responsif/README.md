# Website Halaman Profil Responsif - Muhammad Rozaan

Website profil pribadi modern, minimalis, responsif, dan ringan untuk **Muhammad Rozaan** (Web Developer & Programmer). Dibangun menggunakan teknologi web murni (*pure vanilla HTML5, CSS3, dan JavaScript*) tanpa dependensi *bloatware*, sesuai dengan prinsip efisiensi dan performa tinggi.

---

## 🌟 Fitur Utama

- **Desain Modern & Minimalis**: Tata letak bersih, tipografi yang nyaman dibaca (*Inter* & *JetBrains Mono*), aksen warna biru profesional sesuai identitas di CV.
- **Responsif Penuh**: Mendukung perangkat mobile (smartphone), tablet, laptop, hingga monitor desktop beresolusi tinggi.
- **Dark Mode & Light Mode**: Mode tema otomatis mengikuti preferensi sistem operasi pengguna dengan tombol pengubah (*toggle*) dan penyimpanan preferensi di `localStorage`.
- **Fokus Profil Pribadi**: Memuat informasi komprehensif dari CV dan portofolio:
  - *Tentang Saya*: Ringkasan profil, dedikasi teknis, dan statistik ringkas.
  - *Keahlian Teknis*: Backend, DevOps, Bahasa Pemrograman, Framework, Database, dan Workflow.
  - *Pengalaman Kerja & Proyek*: Magang di Diskominfo Kab. Cirebon (Proyek utama *ZonaShare*) dan Kepemimpinan UKM CE Divisi Ristek UMC.
  - *Pendidikan & Sertifikasi*: S1 Teknik Informatika UMC, SMKN 1 Kota Cirebon (RPL), dan Sertifikat Kompetensi BNSP.
  - *Kontak Interaktif*: Akses langsung ke Email, WhatsApp, GitHub, LinkedIn, Instagram, fitur salin sekali klik (*copy-to-clipboard*), dan form kontak cepat.
- **Unduh CV Terintegrasi**: Tombol unduh langsung untuk file PDF CV resmi.
- **Ringan & Cepat**: 0 dependensi library eksternal berlebih, waktu muat instan (*instant load time*).

---

## 📁 Struktur Berkas

```
website-halaman-profil-responsif/
├── index.html                 # Struktur markup utama website
├── css/
│   └── style.css              # Styling modern, token CSS variables, responsif & tema
├── js/
│   └── main.js                # Interaktivitas (toggle tema, menu mobile, scroll spy, copy toast)
├── assets/
│   ├── images/
│   │   └── profile.png        # Foto profil resmi Muhammad Rozaan (ekstraksi resolusi tinggi)
│   └── docs/
│       └── CV_Muhammad_Rozaan.pdf  # Berkas CV resmi untuk fitur unduh
└── README.md                  # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan

Website ini adalah website statis murni sehingga dapat dijalankan dengan sangat mudah:

### 1. Langsung Lewat Browser
Cukup buka berkas `index.html` langsung dengan klik dua kali atau menggunakan browser pilihan Anda (Google Chrome, Firefox, Brave, Edge).

### 2. Menggunakan Local HTTP Server (Opsional)
Jika ingin menjalankan melalui local server:

- **Menggunakan Python**:
  ```bash
  cd website-halaman-profil-responsif
  python3 -m http.server 8000
  ```
  Lalu buka `http://localhost:8000` di peramban web.

- **Menggunakan Node.js / npx serve**:
  ```bash
  npx serve website-halaman-profil-responsif
  ```
