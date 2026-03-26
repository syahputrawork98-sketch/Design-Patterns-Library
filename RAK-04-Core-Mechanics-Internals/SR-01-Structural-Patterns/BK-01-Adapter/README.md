# BK-01: Adapter Pattern

> "Menjembatani dua dunia yang tidak saling mengenal."

## 1. Skenario Kekacauan (The Problem)
Bayangkan Anda memiliki aplikasi yang selama ini menggunakan sistem Log lama yang menerima pesan dalam format `string`. Tiba-tiba, Anda harus menggunakan Library Logging modern yang hanya menerima objek `JSON`. 
- Jika Anda merubah seluruh aplikasi Anda untuk menggunakan `JSON`, Anda melanggar prinsip stabilitas kode lama. 
- Jika tidak merubah, Library modern tersebut tidak bisa dipakai.

## 2. Analogy
Bayangkan Anda membawa **Laptop dari Indonesia (Colokan Bulat)** ke **Singapura (Colokan Kotak Kotak)**.
- Laptop Anda tidak rusak, dan stopkontak di Singapura juga tidak salah. Hanya "Bentuk"-nya yang berbeda.
- Anda butuh sebuah **Travel Adapter** (Konverter). Travel adapter itulah yang menjembatani laptop Anda ke stopkontak Singapura tanpa merubah komponen asli keduanya.

## 3. Everyday Deep Dive
Adapter mengubah interface sebuah kelas menjadi interface lain yang diinginkan klien. 
- **Client**: Sistem lama Anda.
- **Adapter**: Perantara yang menerjemahkan permintaan.
- **Adaptee**: Sistem baru yang ingin Anda gunakan.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
