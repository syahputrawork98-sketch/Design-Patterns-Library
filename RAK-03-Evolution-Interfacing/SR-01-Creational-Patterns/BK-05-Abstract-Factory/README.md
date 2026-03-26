# BK-05: Abstract Factory Pattern

> "Pabrik dari segala pabrik: Menciptakan Keluarga Objek yang satu tema."

## 1. Skenario Kekacauan (The Problem)
Bayangkan Anda sedang membuat aplikasi yang mendukung tema **Modern** dan **Retro**. 
- Jika Anda mencampuradukkan `new ModernButton()` dengan `new RetroCheckbox()`, tampilan aplikasi Anda akan berantakan (Inconsistent UI). 
- Tanpa Abstract Factory, Anda harus mengecek tema di setiap baris pembuatan UI. Melelahkan dan rawan kesalahan.

## 2. Analogy
Bayangkan Anda pergi ke **Toko Mebel**.
- Anda ingin membeli satu set perabotan bertema **Minimalis**.
- Toko tersebut memiliki "Pabrik Minimalis" yang memproduksi Kursi Minimalis, Meja Minimalis, dan Lemari Minimalis secara otomatis.
- Anda tidak perlu khawatir mendapatkan Kursi Gotik di tengah Meja Minimalis Anda karena asalnya dari Pabrik yang sama.

## 3. Everyday Deep Dive
Abstract Factory menyediakan interface untuk membuat **Keluarga Objek** yang terkait tanpa menentukan kelas konkretnya.
- **Abstract Factory**: Interface yang mendata semua produk yang bisa dibuat (Pesan Kursi, Pesan Meja).
- **Concrete Factory**: Pabrik spesifik (Pabrik Modern, Pabrik Retro).
- **Abstract Product**: Interface untuk masing-masing barang (Kursi, Meja).
- **Concrete Product**: Barang nyata (Kursi Modern, Kursi Retro).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
