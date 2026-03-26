# CH-01: Interface vs Abstract Class

> "Kapan Menggunakan 'Murni' dan Kapan Menggunakan 'Dasar'?"

## 1. Skenario Kekacauan (The Problem)
Banyak programmer bingung memilih antara `interface` dan `abstract class`. Mereka sering menggunakan `abstract class` secara berlebihan sehingga hierarki kelas menjadi sangat dalam dan sulit dirubah.

## 2. Analogy
- **Interface**: Seperti **Daftar Spesifikasi**. Anda bilang sebuah alat harus bisa "Menyala" dan "Mati". Anda tidak peduli bagaimana cara kerjanya.
- **Abstract Class**: Seperti **Cetak Biru Setengah Jadi**. Anda menyediakan kerangka dasar (misal: semua mobil harus punya roda), tapi membiarkan detail lainnya (misal: jenis mesin) ditentukan nanti.

## 3. Everyday Deep Dive
- **Interface**: 100% Abstraksi. Hanya menentukan *apa* (What). Sangat fleksibel.
- **Abstract Class**: Campuran. Menentukan *apa* (What) dan menyediakan sedikit *bagaimana* (How).

## 8. Practical Lab
- [SC-01-Encapsulate-What-Varies/](./SC-01-Encapsulate-What-Varies/)
