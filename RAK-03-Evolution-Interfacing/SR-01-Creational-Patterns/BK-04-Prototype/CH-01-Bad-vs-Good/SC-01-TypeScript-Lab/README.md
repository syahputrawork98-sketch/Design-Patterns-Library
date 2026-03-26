# SC-01: TypeScript Lab (Prototype)

> "Melihat Kekuatan Metode .clone()."

## 1. Skenario Kekacauan (The Problem)
Menyalin objek secara manual `copy.x = original.x` adalah cara kuno yang akan rusak jika struktur kelas `original` berubah. 

## 8. Practical Lab
Bandingkan efisiensi di:
- [bad.ts](./bad.ts) - Cara manual yang kaku.
- [good.ts](./good.ts) - Menggunakan metode `clone()`.

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
