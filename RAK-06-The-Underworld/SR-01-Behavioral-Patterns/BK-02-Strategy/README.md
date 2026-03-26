# BK-02: Strategy Pattern

> "Gonta-ganti Jurus sesuai kondisi musuh di medan perang."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda menulis fungsi dengan `switch-case` yang sangat besar?
- `if (payMethod === 'Gopay') { ... }`
- `else if (payMethod === 'OVO') { ... }`
- `else if (payMethod === 'CreditCard') { ... }`
Saat Anda ingin menambah metode pembayaran baru, Anda harus merubah fungsi utama tersebut. Fungsi Anda menjadi "Raksasa" yang sulit dites dan mudah pecah (Fragile).

## 2. Analogy
Bayangkan **Jalur Perjalanan**.
- Anda ingin pergi ke kantor.
- Anda bisa memilih Strategi: **Naik Motor**, **Naik KRL**, atau **Naik Sepeda**.
- Cara Anda berpakaian mungkin sama, tapi alat transportasinya berbeda. 
- Anda bisa menukar strategi transportasi berdasarkan kondisi cuaca atau kemacetan tanpa merubah tujuan akhir Anda.

## 3. Everyday Deep Dive
Strategy memisahkan "Logika Utama" dari "Kumpulan Algoritma". 
- **Context**: Kelas yang memakai strategi (misal: Keranjang Belanja).
- **Strategy Interface**: Kontrak untuk semua algoritma (misal: Metode Bayar).
- **Concrete Strategies**: Algoritma nyata (misal: Gopay, OVO).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
