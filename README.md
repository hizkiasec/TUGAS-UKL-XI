<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00C9FF,100:92FE9D&height=180&section=header&text=✨%20HIZKIA%20AGELLVIN%20GIRSANG%20✨&fontSize=35&fontColor=ffffff&animation=twinkling" width="100%" />

<h3 style="color:#00C9FF;">XI RPL 3</h3>

<p><b>Uji Kenaikan Level – Backend Development (Node.js + MySQL)</b></p>

</div>

---

# 🚀 Presensi API (Node.js + Express + MySQL) – FULL

## 🧾 Deskripsi

Project ini adalah **RESTful API lengkap untuk Aplikasi Presensi Online**, disiapkan untuk tugas **Uji Kenaikan Level XI RPL (Backend)**.
Fitur utama:

* 🔐 Autentikasi JWT
* 👥 Manajemen Pengguna
* 🕒 Pencatatan Presensi
* 📅 Rekap Bulanan
* 📊 Analisis Kehadiran

---

## ⚙️ Persyaratan

Pastikan kamu sudah menginstal:

* [Node.js](https://nodejs.org/) (versi 16 atau lebih baru)
* MySQL Server
* npm (Node Package Manager)

---

## 📡 Endpoints (Ringkasan)

| Method   | Endpoint                           | Deskripsi                      |
| :------- | :--------------------------------- | :----------------------------- |
| **POST** | `/api/auth/login`                  | Login user, dapatkan token     |
| **POST** | `/api/users`                       | Buat user baru (public)        |
| **GET**  | `/api/users/:id`                   | Ambil data user (protected)    |
| **PUT**  | `/api/users/:id`                   | Update user (protected)        |
| **POST** | `/api/attendance`                  | Catat presensi (protected)     |
| **GET**  | `/api/attendance/history/:user_id` | Riwayat presensi (protected)   |
| **GET**  | `/api/attendance/summary/:user_id` | Rekap bulanan (protected)      |
| **POST** | `/api/attendance/analysis`         | Analisis kehadiran (protected) |

---

## 🧪 Contoh Alur Singkat (Postman)

1️⃣ **Buat user baru**
`POST /api/users`
Body:

```json
{
  "name": "Hizkia",
  "email": "hizkia@example.com",
  "password": "123456",
  "role": "student",
  "class_or_position": "XI RPL 3"
}
```

2️⃣ **Login user**
`POST /api/auth/login` → ambil token hasil login

3️⃣ **Gunakan token JWT**
Tambahkan di header semua request:

```
Authorization: Bearer <token>
```

4️⃣ **Catat presensi**
`POST /api/attendance`
Body:

```json
{
  "userId": 1,
  "date": "2025-11-04",
  "checkInTime": "07:45:00",
  "note": "Hadir tepat waktu",
  "status": "present"
}
```

5️⃣ **Lihat riwayat dan rekap kehadiran**
`GET /api/attendance/history/1`
`GET /api/attendance/summary/1`

---

## 🗒️ Catatan Tambahan

* Saat server pertama kali dijalankan, Sequelize akan otomatis membuat tabel:
  `users`, `attendances`
* Gunakan password yang kuat untuk akun production.
* Semua endpoint dilindungi JWT, jadi login dulu sebelum akses data presensi.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00C9FF,100:92FE9D&height=140&section=footer&animation=twinkling" width="100%" />

</div>
