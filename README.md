# Proyek Website Pariwisata - Wonderful Indonesia

Ini adalah proyek tugas untuk mata kuliah Pemrograman Web 1. Proyek ini merupakan sebuah website statis yang responsif dengan tema pariwisata dan kebudayaan Indonesia. Website ini menampilkan beberapa destinasi unggulan serta informasi budaya khas Nusantara.

## ✨ Fitur Utama

- **Desain Responsif**: Tampilan website dapat menyesuaikan diri dengan baik di berbagai ukuran layar, mulai dari desktop hingga perangkat mobile.
- **Halaman Utama Dinamis**: Menampilkan hero banner yang menarik dan galeri destinasi unggulan.
- **Halaman Destinasi Detail**: Terdapat 3 halaman destinasi terpisah (Borobudur, Raja Ampat, Bromo) yang masing-masing berisi:
  - Deskripsi lengkap.
  - Informasi praktis dan teknis.
  - Galeri foto dengan 3 gambar.
  - Peta lokasi interaktif menggunakan **Leaflet.js**.
- **Halaman Kebudayaan**:
  - Penjelasan mengenai keberagaman budaya.
  - Video pertunjukan budaya yang di-embed dari YouTube.
  - Daftar budaya dalam tabel yang bisa di-scroll.
  - Formulir kontak sederhana.
- **Navigasi Dropdown**: Menu "Destinasi" pada navigasi utama berfungsi sebagai dropdown untuk memudahkan perpindahan antar halaman destinasi.
- **Komponen Terpusat**: Header dan Footer dibuat sebagai komponen terpisah (`header.html`, `footer.html`) dan dimuat secara dinamis menggunakan JavaScript, sehingga memudahkan pemeliharaan.
- **Layout Modern**: Menggunakan teknik CSS modern seperti Flexbox dan Grid untuk tata letak yang bersih dan terstruktur.
- **Sticky Footer**: Footer akan selalu menempel di bagian bawah halaman, bahkan pada halaman dengan konten yang pendek.

## 💻 Teknologi yang Digunakan

- **HTML5**: Untuk struktur dan konten website.
- **CSS3**: Untuk styling dan layout, termasuk:
  - Flexbox
  - Grid
  - Media Queries (Responsive Design)
- **JavaScript (ES6)**: Untuk fungsionalitas dinamis, seperti:
  - Memuat komponen Header & Footer.
  - Menu mobile (hamburger).
  - Inisialisasi peta interaktif.
- **Leaflet.js**: Pustaka open-source untuk menampilkan peta interaktif.
- **Font Awesome**: Untuk ikon-ikon di seluruh website.

## 📂 Struktur File

```
wonderful-indonesia/
│
├── 📂 css/
│   └── styles.css
│
├── 📂 images/
│   ├── (Semua file gambar .jpg/.png)
│
├── 📂js/
│   └── script.js
│
├── 📄 header.html       (Komponen Header)
├── 📄 footer.html       (Komponen Footer)
├── 📄 index.html        (Halaman Utama)
├── 📄 destinasi-borobudur.html
├── 📄 destinasi-rajaampat.html
├── 📄 destinasi-bromo.html
├── 📄 budaya.html
└── 📄 kontak.html
```

## 🚀 Cara Menjalankan Proyek

Proyek ini menggunakan JavaScript `fetch()` untuk memuat komponen `header.html` dan `footer.html`. Karena kebijakan keamanan browser (CORS policy), Anda **tidak bisa** langsung membuka file `index.html` dari file system (`file:///...`).

Anda perlu menjalankannya melalui sebuah server lokal sederhana. Cara termudah adalah menggunakan ekstensi **Live Server** di **Visual Studio Code**.

1.  **Buka Folder Proyek**: Buka folder `wonderful-indonesia` di Visual Studio Code.
2.  **Install Ekstensi**: Buka tab Extensions (Ctrl+Shift+X), cari "Live Server" oleh Ritwick Dey, lalu klik Install.
3.  **Jalankan Server**: Klik kanan pada file `index.html` di file explorer VS Code.
4.  Pilih **"Open with Live Server"**.
5.  Browser Anda akan otomatis terbuka dengan alamat seperti `http://127.0.0.1:5500/index.html` dan seluruh fungsionalitas website akan berjalan dengan baik.

## 👨‍💻 Author

- **Nama**: Syakib Binnur

---
