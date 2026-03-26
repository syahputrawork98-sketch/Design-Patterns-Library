# BK-05: D - Dependency Inversion Principle

> "Bergantunglah pada Abstraksi, bukan pada Implementasi Detil."

## 1. Skenario Kekacauan (The Problem)
Jika logika bisnis Anda (Level Tinggi) langsung memanggil database MySQL (Level Rendah), saat Anda ingin ganti ke PostgreSQL, Anda harus membongkar seluruh logika bisnis Anda. Kode Anda jadi "Terbelenggu" oleh teknologi tertentu.

## 2. Analogy
Bayangkan **Colokan Listrik di Hotel**. Laptop Anda (High Level) tidak peduli listriknya berasal dari Panel Surya atau PLTA (Low Level). Anda hanya peduli bahwa stopkontaknya sesuai dengan standar internasional. Hotel menyediakan "Interface" (Stopkontak) agar Anda tetap bisa bekerja terlepas dari mana asal listriknya.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
