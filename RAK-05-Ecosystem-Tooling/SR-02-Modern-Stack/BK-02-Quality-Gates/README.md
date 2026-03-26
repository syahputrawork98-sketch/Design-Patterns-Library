# BK-02: Quality Gates

> "Saringan Kualitas: Jangan biarkan bug lolos ke tangan user."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda lupa menghapus `console.log` atau variabel yang tidak terpakai? Atau lebih buruk, Anda tanpa sengaja merusak fitur lama saat menambah fitur baru? Tanpa Quality Gates, aplikasi Anda akan penuh dengan "Sampah" dan risiko kegagalan sistem yang tinggi.

## 2. Analogy
Quality Gates adalah seperti **Pemeriksaan Keamanan di Bandara**. 
- Anda tidak bisa membawa barang berbahaya (Bug/Error) ke dalam pesawat (Production). 
- Anda harus melewati X-Ray (Linter) dan pemeriksaan paspor (Testing) sebelum diizinkan terbang.

## 3. Everyday Deep Dive
- **ESLint**: Mengecek typo dan gaya penulisan agar rapi.
- **Vitest**: Menjalankan tes otomatis untuk memastikan fungsi Anda benar.
- **Prettier**: Tukang rapih-rapih yang otomatis merapikan spasi dan titik koma Anda.

## 8. Practical Lab
- [CH-01-Standard-Config/](./CH-01-Standard-Config/)
