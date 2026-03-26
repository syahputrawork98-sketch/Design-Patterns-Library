# OCP: Open/Closed Principle

> "Terbuka untuk Dikembangkan, Tertutup untuk Dimodifikasi."

## Analogi Mentor
Bayangkan Anda sedang membangun sebuah **Gedung Pintar**.
- **Bad**: Jika ingin menambah sistem keamanan baru, Anda harus membongkar dinding untuk memasang kabel baru (Modifikasi).
- **Good**: Anda sudah memasang **Colokan Listrik Standar** di setiap dinding. Jika ingin pasang AC atau Lampu baru, Anda cukup "Colok" saja (Ekstensi) tanpa membongkar dinding.

## Penjelasan Detail
Dalam kode `bad.ts`, setiap kali ada metode logistik baru, kita harus merubah fungsi `calculateShippingCost`. Padahal, fungsi tersebut seharusnya sudah matang dan "tutup" permukaannya.

Dalam kode `good.ts`, kita menggunakan kontrak `ShippingMethod`. Jika ada kurir baru, kita cukup membuat "Plugin" baru (kelas Implementasi). Kalkulator pengiriman tidak perlu tahu siapa kurirnya, ia hanya tahu cara menghitung biaya sesuai kontrak yang ada.

---
### File Pendukung:
- [bad.ts](./bad.ts) - Kode yang harus dirubah-ubah setiap kali ada fitur baru.
- [good.ts](./good.ts) - Kode yang fleksibel menggunakan Interface/Abstraction.
