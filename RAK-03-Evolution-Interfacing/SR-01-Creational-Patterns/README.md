# SR-01: Creational Patterns

> "Bagaimana Objek Dilahirkan."

## 1. Skenario Kekacauan (The Problem)
Jika setiap komponen di sistem Anda bebas membuat objeknya sendiri, Anda akan kehilangan kendali atas ketergantungan (dependencies). Sistem Anda akan menjadi seperti hutan belantara yang tidak terawat.

## 2. Analogy
Anggaplah Creational Patterns sebagai **Pabrik Otomatis**. Anda tidak perlu tahu bagaimana cara merakit mobil; Anda cukup menekan tombol dan pabrik akan mengeluarkan mobil yang siap pakai untuk Anda.

## 3. Everyday Deep Dive
Sub-Rak ini mencakup pola-pola legendaris untuk mengelola instansiasi:
- **BK-01: Factory Method**: Delegasikan pembuatan ke sub-class.
- **BK-02: Singleton**: Satu instansi untuk selamanya.
- **BK-03: Builder**: Konstruksi objek yang rumit.
- **BK-04: Prototype**: Kloning objek yang mahal.
- **BK-05: Abstract Factory**: Pabrik untuk keluarga objek bertema.

## 8. Practical Lab
- [BK-01-Factory-Method/](./BK-01-Factory-Method/)
- [BK-02-Singleton/](./BK-02-Singleton/)
- [BK-03-Builder/](./BK-03-Builder/)
- [BK-04-Prototype/](./BK-04-Prototype/)
- [BK-05-Abstract-Factory/](./BK-05-Abstract-Factory/)
