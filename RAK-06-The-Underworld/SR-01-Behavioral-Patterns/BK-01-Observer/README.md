# BK-01: Observer Pattern

> "Sistem Langganan: Biarkan mereka tahu saat ada yang baru."

## 1. Skenario Kekacauan (The Problem)
Bayangkan Anda memiliki aplikasi **Toko Online**. Pelanggan ingin tahu kapan sebuah produk Ready Stock lagi.
- Tanpa Observer: Pelanggan harus refresh halaman toko setiap jam (Polling). Melelahkan bagi pelanggan, memberatkan server.
- Dengan Observer: Pelanggan cukup tekan "Ingatkan Saya". Saat barang ready, toko akan mengirim notifikasi ke semua pelanggan yang mendaftar secara otomatis.

## 2. Analogy
Bayangkan **YouTube Channel**. 
- Anda (Subscriber) tidak perlu mengecek channel YouTube favorit Anda setiap menit untuk melihat video baru. 
- Anda cukup tekan tombol **Subscribe & Lonceng**. 
- YouTube (Subject) akan mengirim notifikasi ke HP Anda (Observer) segera setelah video baru di-upload.

## 3. Everyday Deep Dive
Observer mendefinisikan hubungan satu-ke-banyak (one-to-many) agar saat satu objek merubah state-nya, semua dependennya diberitahu.
- **Subject (Publisher)**: Yang punya data/event (misal: YouTube Channel).
- **Observer (Subscriber)**: Yang ingin dapet data (misal: Penonton).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
