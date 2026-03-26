# SC-01: TypeScript Lab (Builder)

> "Belajar 'Chaining' untuk Kode yang Super Bersih."

## 1. Skenario Kekacauan (The Problem)
Constructor yang terlalu panjang adalah sumber bug utama. Salah memasukkan angka `4` di posisi `2` bisa membuat rumah Anda punya 2 kamar tidur tapi 4 atap!

## 8. Practical Lab
Bandingkan kemudahan membaca kode di:
- [bad.ts](./bad.ts) - Constructor Raksasa (Telescoping).
- [good.ts](./good.ts) - Fluent Interface menggunakan Builder.

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
