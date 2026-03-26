# BK-02: O - Open/Closed Principle

> "Terbuka bagi Perluasan, Tertutup bagi Modifikasi."

## 1. Skenario Kekacauan (The Problem)
Setiap kali ada tipe data baru (misal: jenis diskon baru atau jenis pembayaran baru), Anda harus membedah kode lama dan menambahkan `if-else` atau `switch-case`. Satu kesalahan titik koma di kode lama bisa meruntuhkan seluruh sistem yang sudah stabil.

## 2. Analogy
Bayangkan sebuah **Stopkontak Dinding**. Saat Anda membeli alat elektronik baru (TV, Kulkas, Lampu), Anda tidak perlu membongkar tembok untuk menyambungkan kabelnya satu per satu. Anda cukup "mencoloknya" ke stopkontak yang sudah ada. Stopkontak itu **Open** untuk alat baru, tapi **Closed** untuk dibongkar-bongkar.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
