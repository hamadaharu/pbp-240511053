## Refleksi Pemrograman Berbasis Platform

### 1. Platform yang Paling Menarik dan Alasannya
Bagi saya, platform **Desktop** dan **Mobile** adalah yang paling menarik untuk dipelajari. Selama ini saya sudah terbiasa dengan ekosistem web, mengeksplorasi framework seperti Laravel, CodeIgniter, Astro, Hugo, hingga CMS konvensional maupun headless seperti Sveltia dan DecapCMS.

Karena itu, saya ingin mencoba hal baru. Di platform desktop, saya berkeinginan membuat aplikasi native yang ringan dan hemat daya tanpa ketergantungan pada Chromium atau webview (seperti Electron, Tauri, atau Wails) yang menurut saya *bloated* untuk aplikasi sederhana seperti kalkulator. Sementara di ranah mobile, daya tariknya terletak pada penggunaan smartphone yang masif, sehingga aplikasi yang dibangun dapat langsung digunakan dan memberi manfaat nyata bagi banyak orang.

### 2. Tantangan Terbesar Saat Setup Environment
Meskipun sudah terbiasa mengoperasikan terminal dan membaca dokumentasi teknis, tantangan terberat justru muncul pada ketidakcocokan versi (*version mismatch*) dan manajemen dependensi. Sering kali versi package, runtime SDK, atau file pustaka/DLL tertentu tidak kompatibel satu sama lain, sehingga menuntut *troubleshooting* ekstra untuk mencari versi yang tepat atau melakukan *downgrade*. Selain itu, konsumsi RAM dan ruang penyimpanan perkakas mobile juga tetap menjadi pertimbangan penting.

### 3. Rencana Mengatasi Tantangan
Rencana saya adalah mengunci versi dependensi secara ketat (*version pinning*) menggunakan *lockfile* atau manajemen versi terisolasi, serta mendokumentasikan setiap konfigurasi yang berhasil. Untuk efisiensi sistem, saya juga akan memanfaatkan *debugging* lewat perangkat fisik langsung alih-alih emulator berat (adb).
