# SR-03: Abstraction & Encapsulation

> "Fondasi pemikiran arsitektural: Sembunyikan Detail, Ekspos Kontrak."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda merombak database dan tiba-tiba seluruh fitur di aplikasi Anda rusak? Itu terjadi karena kode Anda "tahu terlalu banyak" detail (Exposure). Tanpa Abstraksi dan Enkapsulasi, kode Anda saling melilit (Spaghetti).

## 2. Analogy
Mempelajari konsep ini seperti belajar menggunakan **Tombol Lampu**.
- **Abstraction**: Anda cukup tahu "Pencet tombol, lampu nyala" (Kebutuhan Anda). Anda tidak perlu tahu tegangan listrik atau kabel mana yang ditarik.
- **Encapsulation**: Seluruh kabel dan aliran listrik berbahaya dibungkus di dalam tembok. Anda tidak perlu melihatnya, dan itu aman bagi Anda.

## 3. Everyday Deep Dive
Materi utama:
- **BK-01: The Contract Principle**: Bagaimana Interface bertindak sebagai Janji/Kontrak.
- **Encapsulate What Varies**: Bungkuslah bagian yang sering berubah agar tidak merepotkan bagian yang tetap.

## 8. Practical Lab
- [BK-01-The-Contract-Principle/](./BK-01-The-Contract-Principle/)
