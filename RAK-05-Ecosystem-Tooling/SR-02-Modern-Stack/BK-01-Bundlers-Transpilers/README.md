# BK-01: Bundlers & Transpilers

> "Mesin Pengolah Kode: Bagaimana ribuan file menjadi satu aplikasi cepat."

## 1. Skenario Kekacauan (The Problem)
Tanpa alat ini, Anda harus mengelola ratusan file `<script>` di HTML secara manual. Urutan pemanggilan yang salah akan membuat aplikasi error. Selain itu, Anda tidak bisa menggunakan fitur modern TypeScript karena browser tidak mendukungnya secara langsung.

## 2. Analogy
Bundlers adalah seperti **Tukang Paket (Logistik)**. 
- Anda punya banyak barang kecil (File/Module).
- Tukang paket mengaturnya, membungkusnya dalam satu box yang efisien (Bundle), dan memberi label tujuan.
- Transpiler adalah seperti **Penerjemah Bahasa**. Mengubah dokumen bahasa tinggi (TypeScript) menjadi bahasa yang dimengerti warga lokal (Browser/JavaScript).

## 3. Everyday Deep Dive
- **Vite (The Modern King)**: Sangat cepat karena menggunakan sistem modern (ES Modules).
- **SWC (The Speed Demon)**: Transpiler berbasis bahasa Rust yang 20x lebih cepat dari Babel.
- **Rollup**: Spesialis pembungkus library (seperti yang kita buat sekarang).

## 8. Practical Lab
- [CH-01-Standard-Config/](./CH-01-Standard-Config/)
