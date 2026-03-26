# BK-04: I - Interface Segregation Principle

> "Jangan Paksa Klien bergantung pada fungsi yang tidak mereka gunakan."

## 1. Skenario Kekacauan (The Problem)
Interface "Raksasa" (Fat Interface) memaksa kelas-kelas kecil untuk mengimplementasikan fungsi yang tidak berguna bagi mereka (misal: Printer kecil dipaksa punya fungsi `fax()` dan `scan()`). Ini membuat kode jadi "berisik" dan penuh dengan fungsi kosong.

## 2. Analogy
Bayangkan sebuah **Remot TV** yang punya 1.000 tombol, termasuk tombol untuk mengontrol AC dan Mesin Cuci. Anda hanya ingin ganti channel TV, tapi harus mencari tombolnya di antara ratusan tombol yang tidak relevan. Sangat menyulitkan, bukan? Lebih baik punya satu remot TV sendiri dan satu remot AC sendiri.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
