# SC-01: TypeScript Lab (Observer)

> "Belajar Membuat 'Pusat Notifikasi' Sendiri."

## 1. Skenario Kekacauan (The Problem)
Tanpa Observer, kode Anda akan dipenuhi dengan fungsi `checkStatus()` yang berulangkali dipanggil (Polling). Ini menghabiskan tenaga CPU dan membuat baterai perangkat user cepat habis.

## 8. Practical Lab
Bandingkan efisiensi di:
- [bad.ts](./bad.ts) - Polling manual (Melelahkan).
- [good.ts](./good.ts) - Subscription (Event-driven).

---
### Cara Menjalankan:
1. Buka terminal di folder ini.
2. Jalankan `ts-node bad.ts` dan `ts-node good.ts`.
