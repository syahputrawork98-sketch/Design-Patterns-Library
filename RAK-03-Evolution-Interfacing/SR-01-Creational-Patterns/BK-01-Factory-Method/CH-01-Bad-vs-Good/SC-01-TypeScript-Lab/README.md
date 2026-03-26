# SC-01: TypeScript Lab (Factory Method)

> "Melihat Kontras Nyata antara 'Tahu Semuanya' vs 'Delegasi'."

## 1. Skenario Kekacauan (The Problem)
Jika kelas `Logistics` langsung membuat `new Truck()`, maka saat Anda ingin menambahkan `Ship()`, Anda harus merubah kelas `Logistics`. Ini melanggar **Open/Closed Principle** yang sudah kita pelajari di RAK-02.

## 8. Practical Lab
Mari bandingkan dua gaya penulisan ini:
- [bad.ts](./bad.ts) - Cara kaku yang menyulitkan perombakan.
- [good.ts](./good.ts) - Cara elegan menggunakan Factory Method.

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts` untuk melihat perbedaannya.
