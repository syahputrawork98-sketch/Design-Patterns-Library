# SC-01: TypeScript Lab (Singleton)

> "Melihat Rahasia di Balik Private Constructor."

## 1. Skenario Kekacauan (The Problem)
Jika kita membiarkan `constructor` kita menjadi `public`, maka siapa pun bisa memanggil `new Database()`. Ini akan membuat banyak koneksi yang tidak perlu dan menghabiskan sumber daya server.

## 8. Practical Lab
Bandingkan efisiensi memori dan keunikan objek di:
- [bad.ts](./bad.ts) - Objek yang terus menduplikasi dirinya.
- [good.ts](./good.ts) - Objek yang tetap setia pada satu instansi.

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
3. Perhatikan output `Object A === Object B`.
