# BK-01: E-Commerce Engine

> "Membangun Mesin Belanja yang Skalabel."

## 1. Skenario Kekacauan (The Problem)
Sebuah E-Commerce memiliki aliran kerja yang rumit:
1. Memilih barang (Product).
2. Memasukkan ke keranjang (Cart).
3. Memilih ekspedisi (Logistics).
4. Membayar (Payment).
5. Notifikasi (Notification).
Jika semua ini ditulis di satu file `OrderProcessor.ts`, maka file tersebut akan menjadi ribuan baris yang mustahil dikelola.

## 2. Analogy
Bayangkan sebuah **Restoran Cepat Saji**. 
- Ada bagian kasir (Facade).
- Ada bagian dapur yang bikin burger (Factory).
- Ada berbagai pilihan saus (Strategy).
- Ada monitor yang bunyi saat pesanan siap (Observer).
Masing-masing bagian bekerja mandiri namun terkoordinasi dengan baik.

## 3. Everyday Deep Dive (APS Standard)
Dalam studi kasus ini, kita menggabungkan:
- **Factory Method**: Untuk membuat berbagai jenis Produk (Elektronik, Pakaian, Makanan).
- **Strategy**: Untuk mengurus berbagai metode pembayaran (Gopay, OVO, Transfer).
- **Observer**: Untuk mengirim notifikasi ke user dan bagian gudang saat stok berkurang.

## 8. Practical Lab
- [CH-01-Pattern-Combinations/](./CH-01-Pattern-Combinations/)
