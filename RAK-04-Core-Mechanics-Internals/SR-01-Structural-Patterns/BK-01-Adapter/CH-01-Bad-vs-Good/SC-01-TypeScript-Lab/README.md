# SC-01: TypeScript Lab (Adapter)

> "Belajar Membuat 'Penerjemah' yang Handal."

## 1. Skenario Kekacauan (The Problem)
Mengubah ratusan baris kode `logger.log("hello")` menjadi `logger.log({ message: "hello" })` adalah pekerjaan yang membosankan dan berisiko tinggi terhadap bug.

## 8. Practical Lab
Bandingkan kemudahan integrasi di:
- [bad.ts](./bad.ts) - Perubahan paksa yang merusak sistem.
- [good.ts](./good.ts) - Integrasi mulus menggunakan Adapter.

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
