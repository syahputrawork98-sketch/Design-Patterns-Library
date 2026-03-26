# ISP: Interface Segregation Principle

> "Jangan Paksa Klien Menggunakan Fitur yang Tidak Mereka Butuhkan."

## Analogi Mentor
Bayangkan Anda sedang makan di sebuah **Restoran Prasmanan**.
- **Bad**: Restoran hanya punya satu paket menu seharga Rp 1.000.000 yang berisi Steak, Sushi, dan Pizza. Walaupun Anda hanya ingin makan Sushi, Anda dipaksa membayar dan menerima semua menu tersebut.
- **Good**: Restoran menyediakan menu **Ala Carte**. Jika Anda hanya ingin Sushi, Anda pesan dan bayar Sushi saja. Anda tidak perlu repot dengan Steak atau Pizza yang tidak Anda inginkan.

## Penjelasan Detail
Dalam kode `bad.ts`, `OldPrinter` terpaksa membawa beban fungsi `scan()` dan `fax()`. Ini membuat kode kita kotor dan beresiko melempar Error jika ada yang memanggil fungsi tersebut secara tidak sengaja.

Dalam kode `good.ts`, kita memilah fungsi menjadi kepingan-kepingan kecil. Sebuah kelas hanya perlu mengimplementasikan apa yang benar-benar ia lalui. Ini membuat sistem kita jauh lebih bersih dan modular.

---
### File Pendukung:
- [bad.ts](./bad.ts) - Interface "Gemuk" yang menyusahkan kelas lama.
- [good.ts](./good.ts) - Interface yang ramping dan spesifik.
