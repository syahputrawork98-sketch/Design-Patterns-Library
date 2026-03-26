# DIP: Dependency Inversion Principle

> "Bergantunglah pada Rencana (Abstraksi), Bukan pada Alat (Detail)."

## Analogi Mentor
Bayangkan Anda ingin menyalakan **Lampu Tidur**.
- **Bad**: Lampu tidur Anda tersambung langsung ke kabel di dalam tembok. Jika kabel rusak atau Anda ingin pindah lampu, Anda harus bongkar tembok (Modifikasi Keras).
- **Good**: Anda memasang **Stop Kontak (Interface)** di tembok. Lampu Anda punya **Steker (Abstraction)**. Anda bisa ganti lampu apa pun asalkan punya steker yang pas dengan stop kontak di tembok. Keduanya tidak saling "terkunci".

## Penjelasan Detail
Dalam kode `bad.ts`, `Store` terkunci dengan `MySQLDatabase`. Ini menyulitkan jika kita ingin melakukan *Unit Testing* (kita tidak ingin benar-benar simpan ke DB saat test) atau saat ganti teknologi.

Dalam kode `good.ts`, kita membalikkan ketergantungan. `Store` dan `Database` sama-sama tunduk pada kontrak `Database`. Kita bisa "menyuntikkan" (Inject) berbagai macam database tanpa merubah logika inti toko kita.

---
### File Pendukung:
- [bad.ts](./bad.ts) - Ketergantungan kaku ke detail teknis.
- [good.ts](./good.ts) - Ketergantungan fleksibel ke abstraksi.
