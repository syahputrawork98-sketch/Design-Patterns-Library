# BK-01: Factory Method Pattern

> "Memberikan sub-class kuasa untuk menentukan apa yang dilahirkan."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda membuat sistem Logistik? Awalnya hanya ada `Truk`. Anda menulis `new Truk()` di mana-mana. Tiba-tiba, klien minta tambahkan `Kapal`. Anda pun harus merubah seluruh kode Anda untuk mengecek apakah harus memanggil `Truk` atau `Kapal`. Hubungan yang terlalu erat ini membuat Anda pusing saat ada moda transportasi baru (misal: Pesawat).

## 2. Analogy
Bayangkan Anda memiliki sebuah **Pabrik Kartu Ucapan**.
- Anda tidak perlu tahu bagaimana cara mencetak kartu (Detail).
- Anda hanya perlu meminta "Cetak Kartu Ulang Tahun" atau "Cetak Kartu Pernikahan".
- Pabrik akan memilihkan mesin dan bahan yang tepat secara otomatis sesuai pesanan Anda.

## 3. Everyday Deep Dive
Factory Method memisahkan "Siapa yang butuh objek" dari "Siapa yang tahu cara buat objek".
- **Creator (Induk)**: Menentukan kontrak (Interface) produk.
- **Concrete Creator (Anak)**: Melaksanakan pembuatan produk yang spesifik.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
