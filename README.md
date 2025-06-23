# 🎬 Movie-Time

Movie-Time adalah aplikasi web modern untuk menemukan dan menjelajahi film-film terbaru dan terpopuler. Dibangun dengan React dan Vite, aplikasi ini menggunakan The Movie Database (TMDb) API untuk memberikan informasi film yang lengkap dan terkini.

## ✨ Fitur Utama

- 🎪 **Carousel Film Terbaru** - Tampilan slider untuk film-film terbaru
- 🔍 **Pencarian Film** - Cari film berdasarkan judul atau kata kunci
- 📋 **Detail Film** - Informasi lengkap film termasuk sinopsis, rating, dan genre
- ❤️ **Daftar Favorit** - Simpan film favorit untuk ditonton nanti
- 📱 **Responsive Design** - Tampilan yang optimal di semua perangkat
- 🎨 **UI Modern** - Interface yang indah menggunakan Tailwind CSS dan Flowbite

## 🛠️ Teknologi yang Digunakan

- **React 19** - Library JavaScript untuk membangun user interface
- **Vite** - Build tool yang cepat untuk development
- **React Router DOM** - Routing untuk Single Page Application
- **Axios** - HTTP client untuk API calls
- **Tailwind CSS** - Utility-first CSS framework
- **Flowbite React** - Component library untuk React
- **TMDb API** - The Movie Database API untuk data film

## 📋 Prasyarat

Pastikan Anda memiliki software berikut terinstall:

- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn**
- **Git**

## 🚀 Instalasi dan Setup

1. **Clone repository**

   ```bash
   git clone <repository-url>
   cd p1-gc01-FadhlanKhusnainiAlBarid
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**

   Buat file `.env` di root directory dan tambahkan API key TMDb Anda:

   ```env
   VITE_API_KEY=your_tmdb_api_key_here
   ```

   Untuk mendapatkan API key:

   - Daftar di [The Movie Database (TMDb)](https://www.themoviedb.org/)
   - Buat aplikasi baru di pengaturan API
   - Copy API key (Bearer Token) ke file `.env`

4. **Jalankan aplikasi**

   ```bash
   npm run dev
   ```

5. **Buka browser**

   Aplikasi akan berjalan di `http://localhost:5173`

## 📁 Struktur Project

```
src/
├── assets/          # Gambar dan icon
├── components/      # Komponen React yang reusable
│   ├── carousel.jsx    # Carousel untuk film terbaru
│   ├── navbar.jsx      # Navigation bar
│   ├── sidebar.jsx     # Sidebar navigation
│   └── slide.jsx       # Slide komponen
├── hooks/           # Custom React hooks
│   ├── useAddFavorite.jsx  # Hook untuk menambah favorit
│   ├── useGetGenres.jsx    # Hook untuk mendapatkan genre
│   └── useReqToken.jsx     # Hook untuk request token
├── pages/           # Halaman-halaman utama
│   ├── Detail.jsx      # Halaman detail film
│   ├── Favorites.jsx   # Halaman daftar favorit
│   ├── Home.jsx        # Halaman beranda
│   ├── Search.jsx      # Halaman pencarian
│   └── error-page.jsx  # Halaman error
├── MainLayout.jsx   # Layout utama aplikasi
├── router.jsx       # Konfigurasi routing
└── main.jsx        # Entry point aplikasi
```

## 🎯 Fitur dan Halaman

### 🏠 Halaman Beranda (`/`)

- Carousel film terbaru dan terpopuler
- Grid card film dengan rating dan genre
- Navigation yang mudah ke halaman lain

### 🔍 Halaman Pencarian (`/search`)

- Search bar untuk mencari film
- Hasil pencarian dengan pagination
- Filter berdasarkan genre (jika tersedia)

### 📝 Halaman Detail (`/Detail/:movieId`)

- Informasi lengkap film (poster, judul, sinopsis, rating, genre)
- Tombol untuk menambahkan ke favorit
- Trailer dan media terkait (jika tersedia)

### ❤️ Halaman Favorit (`/Favorites`)

- Daftar film yang telah ditandai sebagai favorit
- Kemampuan untuk menghapus dari favorit
- Grid layout yang responsif

## 🔧 Scripts yang Tersedia

```bash
# Development server
npm run dev

# Build untuk production
npm run build

# Preview build production
npm run preview

# Linting dengan ESLint
npm run lint

# Post-install script untuk Flowbite
npm run postinstall
```

## 🌐 API Integration

Aplikasi ini mengintegrasikan dengan TMDb API untuk:

- **Film Terbaru**: `/movie/now_playing`
- **Film Populer**: `/movie/popular`
- **Detail Film**: `/movie/{movie_id}`
- **Pencarian Film**: `/search/movie`
- **Genre**: `/genre/movie/list`

## 📱 Responsive Design

Aplikasi ini dioptimalkan untuk berbagai ukuran layar:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🎨 Styling

- **Tailwind CSS** untuk utility classes
- **Flowbite React** untuk pre-built components
- **Custom CSS** untuk styling khusus
- **Dark mode support** (jika diimplementasikan)

## 🔒 Environment Variables

Pastikan untuk mengamankan API key Anda:

```env
# TMDb API Key (Bearer Token)
VITE_API_KEY=your_api_key_here
```

**⚠️ Penting**: Jangan commit file `.env` ke repository. Pastikan `.env` sudah ada di `.gitignore`.

## 🚀 Deployment

Untuk deploy aplikasi:

1. **Build aplikasi**

   ```bash
   npm run build
   ```

2. **Upload folder `dist/` ke hosting**

   - Vercel
   - Netlify
   - GitHub Pages
   - Atau hosting lainnya

3. **Set environment variables** di platform hosting

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 License

Project ini menggunakan lisensi MIT. Lihat file `LICENSE` untuk detail lebih lanjut.

## 👨‍💻 Author

**Fadhlan Khusnaini Al Barid**

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) untuk API data film
- [React](https://reactjs.org/) untuk framework JavaScript
- [Tailwind CSS](https://tailwindcss.com/) untuk styling
- [Flowbite](https://flowbite.com/) untuk UI components

---

⭐ Jika project ini bermanfaat, jangan lupa berikan star!
