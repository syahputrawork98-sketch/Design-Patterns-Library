# SRP: Single Responsibility Principle

> "Satu Kelas, Satu Alasan untuk Berubah."

## Analogi Mentor
Bayangkan seorang koki di restoran.
- **Bad**: Koki memasak, mencuci piring, menyapu lantai, dan melayani pelanggan. Jika koki sakit, seluruh restoran berhenti total (Kekacauan).
- **Good**: Ada Koki (Masak), ada Waiter (Melayani), ada Cleaner (Membersihkan). Jika ada masalah di dapur, pembersihan tetap bisa berjalan.

## Penjelasan Detail
Dalam kode `bad.ts`, kelas `User` memiliki 3 tanggung jawab. Jika besok Anda ingin ganti cara kirim email (misal dari Gmail ke SendGrid), Anda harus merubah file `User.ts`. Ini berbahaya karena bisa merusak logika data user.

Dalam kode `good.ts`, kita memecahnya. Jika email service berubah, kita hanya merubah `EmailService`. Kelas `User` tetap aman dan tidak terpengaruh.

---
### File Pendukung:
- [bad.ts](./bad.ts) - Kode "Spaghetti" yang melanggar SRP.
- [good.ts](./good.ts) - Kode "Bersih" yang mengikuti SRP.
