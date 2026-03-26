# BK-01: The Contract Principle

> "Interface sebagai janji yang mengikat."

## 1. Skenario Kekacauan (The Problem)
Tanpa Kontrak, komponen di dalam kode Anda akan saling menuntut detail yang berlebihan. Programmer A membuat fungsi yang butuh data spesifik, Programmer B menyediakannya namun dengan format yang berbeda. Kekacauan koordinasi pun terjadi.

## 2. Analogy
Bayangkan Anda **Menyewa Tukang**. Kontrak Anda adalah: "Pekerjaan Selesai, Bayaran Lunas". Anda tidak peduli tukangnya pakai palu merk apa atau mulai kerja jam berapa (Detail). Selama hasil akhirnya (Kontrak) sesuai, Anda senang.

## 3. Everyday Deep Dive
- **Interface**: Definisi perilaku tanpa isi.
- **Abstract Class**: Definisi perilaku dengan beberapa isi dasar.
- **Implementation**: Realisasi nyata dari janji yang dibuat oleh Interface/Abstract Class.

## 8. Practical Lab
- [CH-01-Interface-vs-Abstract/](./CH-01-Interface-vs-Abstract/)
