# LSP: Liskov Substitution Principle

> "Anak harus bisa menggantikan Bapaknya tanpa menimbulkan kejutan (Error)."

## Analogi Mentor
Bayangkan Anda meminjam mobil teman Anda.
- **Bad**: Teman Anda bilang "Ini mobil biasa (Bapak)". Saat Anda mau nyalakan AC, ternyata mobilnya meledak karena itu mobil modifikasi yang tidak punya sistem AC (Anak yang merusak kontrak).
- **Good**: Jika teman Anda bilang ini "Mobil", Anda harus bisa mengemudikannya seperti mobil pada umumnya. Jika ada fitur unik (seperti pesawat jet), itu seharusnya masuk kategori "Pesawat", bukan "Mobil".

## Penjelasan Detail
Dalam kode `bad.ts`, kita memaksa `Penguin` menjadi `Bird` yang bisa terbang. Saat programmer lain menggunakan fungsi `makeBirdFly`, mereka berekspektasi semua burung bisa terbang. Saat Penguin dimasukkan, program hancur.

Dalam kode `good.ts`, kita memperbaiki **Hirarki**. Kita memisahkan antara kemampuan makan (semua Burung) dan kemampuan terbang (hanya Burung tertentu). Dengan begini, sistem kita aman dari "Anak yang berbohong" tentang kemampuannya.

---
### File Pendukung:
- [bad.ts](./bad.ts) - Contoh pewarisan yang dipaksakan dan merusak program.
- [good.ts](./good.ts) - Contoh hirarki yang benar dan aman disubstitusi.
