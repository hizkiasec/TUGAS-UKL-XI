# Presensi API (Node.js + Express + MySQL) - FULL

## Deskripsi
Project ini adalah RESTful API lengkap untuk Aplikasi Presensi Online, disiapkan untuk tugas Uji Kenaikan Level XI RPL (Backend).   
Fitur utama: autentikasi JWT, manajemen pengguna, pencatatan presensi, rekap bulanan, dan analisis kehadiran.

## Persyaratan
- Node.js (v16+ recommended)
- MySQL server
- npm

## Endpoints (ringkasan)
- `POST /api/auth/login` - Login user, dapatkan token.
- `POST /api/users` - Buat user baru (public).
- `GET /api/users/:id` - Ambil data user (protected).
- `PUT /api/users/:id` - Update user (protected).
- `POST /api/attendance` - Catat presensi (protected).
- `GET /api/attendance/history/:user_id` - Riwayat presensi (protected).
- `GET /api/attendance/summary/:user_id` - Rekap bulanan (protected).
- `POST /api/attendance/analysis` - Analisis kehadiran (protected).

## Contoh alur singkat (Postman)
1. Buat user: `POST /api/users` (body: name,email,password,...)
2. Login: `POST /api/auth/login` → ambil token.
3. Tambahkan header `Authorization: Bearer <token>` untuk endpoint lain.
4. Coba `POST /api/attendance` untuk mencatat presensi.
5. Lihat riwayat dan rekap.

## Catatan
- Saat server pertama dijalankan, Sequelize akan membuat tabel (`users`, `attendances`) otomatis.
- Untuk production, gunakan password kuat dan atur konfigurasi keamanan lainnya.
