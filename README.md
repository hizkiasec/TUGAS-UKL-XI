<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3A7BD5,100:00d2ff&height=180&section=header&text=✨%20HIZKIA%20AGELLVIN%20GIRSANG%20✨&fontSize=38&fontColor=ffffff&animation=fadeIn" width="100%" />

<h2 style="color:#00BFFF; font-weight:bold;">XI RPL 3</h2>

<p style="font-size:16px; color:#B0E0E6; font-style:italic;">
Uji Kenaikan Level – Backend Developer (Node.js • Express • MySQL)
</p>

<img src="https://github.com/hizkiaagellvin/presensi-api/assets/your-avatar-placeholder.gif" width="120" height="120" style="border-radius:50%; margin-top:10px;" />

<br/>
<img src="https://img.shields.io/badge/Platform-Windows%20|%20Android%20|%20iOS-00d2ff?style=for-the-badge&logo=devices&logoColor=white" />
<img src="https://img.shields.io/badge/Language-JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Database-MySQL-blue?style=for-the-badge&logo=mysql&logoColor=white" />

</div>

---

# 🚀 Presensi API (Node.js + Express + MySQL)

## 🧾 Deskripsi

Proyek ini adalah **RESTful API modern** untuk **Aplikasi Presensi Online**, dikembangkan dalam rangka **Uji Kenaikan Level XI RPL (Backend)**.
Fitur unggulan:

* 🔐 **Autentikasi JWT**
* 👥 **Manajemen Pengguna**
* 🕒 **Pencatatan Presensi**
* 📅 **Rekap Bulanan**
* 📊 **Analisis Kehadiran**

---

## ⚙️ Persyaratan

Pastikan sudah terpasang:

* 🧩 [Node.js](https://nodejs.org/) (v16 atau lebih baru)
* 🗄️ MySQL Server
* 📦 npm (Node Package Manager)

---

## 🌐 Ringkasan Endpoint

|  Method  | Endpoint                           | Deskripsi                  |
| :------: | ---------------------------------- | -------------------------- |
| **POST** | `/api/auth/login`                  | Login user, dapatkan token |
| **POST** | `/api/users`                       | Buat user baru             |
|  **GET** | `/api/users/:id`                   | Ambil data user            |
|  **PUT** | `/api/users/:id`                   | Update user                |
| **POST** | `/api/attendance`                  | Catat presensi             |
|  **GET** | `/api/attendance/history/:user_id` | Lihat riwayat presensi     |
|  **GET** | `/api/attendance/summary/:user_id` | Rekap bulanan              |
| **POST** | `/api/attendance/analysis`         | Analisis kehadiran         |

---

## 🧪 Contoh Alur (Postman)

1️⃣ **Registrasi User Baru**

```json
POST /api/users
{
  "name": "Hizkia",
  "email": "hizkia@example.com",
  "password": "123456",
  "role": "student",
  "class_or_position": "XI RPL 3"
}
```

2️⃣ **Login**

```json
POST /api/auth/login
{
  "email": "hizkia@example.com",
  "password": "123456"
}
```

3️⃣ **Gunakan Token JWT**
Header:

```
Authorization: Bearer <token>
```

4️⃣ **Catat Presensi**

```json
POST /api/attendance
{
  "userId": 1,
  "date": "2025-11-04",
  "checkInTime": "07:45:00",
  "note": "Hadir tepat waktu",
  "status": "present"
}
```

---

## 🗒️ Catatan Tambahan

* Sequelize otomatis membuat tabel (`users`, `attendances`) saat server dijalankan.
* Gunakan password yang kuat dan amankan token JWT.
* Proyek ini dapat dijalankan di semua platform (💻 Windows, 📱 Android, 🍎 iOS).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3A7BD5,100:00d2ff&height=150&section=footer&animation=fadeIn" width="100%" />

<p style="font-size:14px; color:#B0E0E6;">
✨ Dibuat dengan semangat oleh <b>Hizkia Agellvin Girsang</b> – XI RPL 3 ✨
</p>

</div>
