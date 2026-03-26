# SC-01: TypeScript Lab (Facade)

> "Belajar Membuat 'Dashboard' yang User-Friendly."

## 1. Skenario Kekacauan (The Problem)
Klien seharusnya tidak perlu tahu urutan pemanggilan fungsi library. Urutan yang salah bisa menyebabkan error sistem (race condition). Facade menjamin urutan yang benar.

## 8. Practical Lab
Bandingkan kemudahan penggunaan di:
- [bad.ts](./bad.ts) - Klien yang terlalu repot (Manual).
- [good.ts](./good.ts) - Satu tombol 'Ajaib' (Facade).

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
