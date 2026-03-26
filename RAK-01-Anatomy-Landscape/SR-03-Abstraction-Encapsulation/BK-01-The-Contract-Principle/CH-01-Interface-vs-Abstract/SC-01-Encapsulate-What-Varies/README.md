# SC-01: Encapsulate What Varies

> "Prinsip Emas: Bungkuslah Bagian yang Paling Bawel (Sering Berubah)."

## 1. Skenario Kekacauan (The Problem)
Bayangkan Anda punya sistem Notifikasi. Hari ini menggunakan SMS, besok menggunakan Email, lusa menggunakan WhatsApp. Jika kode "Kirim Notifikasi" menyebar di mana-mana, Anda akan lelah merubah kode di ratusan tempat.

## 2. Analogy
Bayangkan **Adaptor Listrik Universal**. Colokan listrik di berbagai negara berbeda-beda (Sesuatu yang berubah). Listrik di laptop Anda tetap (Sesuatu yang tetap). Adaptor membungkus perbedaan colokan tersebut sehingga laptop Anda tidak perlu peduli Anda sedang di negara mana.

## 3. Everyday Deep Dive
Prinsip ini adalah "Roh" dari hampir semua Design Patterns:
1. Identifikasi bagian mana yang mungkin berubah di masa depan.
2. Pisahkan bagian tersebut.
3. Bungkus (Enkapsulasi) di balik sebuah Interface.
4. Bagian kode Anda yang lain hanya perlu bicara pada Interface tersebut.

## 8. Practical Lab
Dalam lab ini, kita akan melihat bagaimana memisahkan "Logika Hitung Pajak" (yang selalu berubah tiap tahun) dari "Logika Keranjang Belanja" (yang tetap).
(Lihat file pendukung untuk simulasi enkapsulasi pajak)
