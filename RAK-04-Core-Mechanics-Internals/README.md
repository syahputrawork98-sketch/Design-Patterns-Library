# RAK-04: Core Mechanics & Internals (Structural Patterns)

> "Menghubungkan komponen agar bekerja harmonis."

## 1. The Problem (Fundamental Intent)
Bagaimana cara menghubungkan dua komponen yang tidak nyambung? Atau bagaimana cara membungkus fitur lama dengan fitur baru tanpa merusak kode yang sudah ada?

## 2. The Analogy
Bayangkan Anda punya iPhone tapi colokan di dinding adalah colokan lama. Anda butuh **Adapter**. Structural Patterns adalah "Adapter", "Pembungkus", dan "Jembatan" untuk kode Anda.

## 3. Everyday Deep Dive
Mempelajari arsitektur internal:
- **Adapter**: Penerjemah antar dua interface berbeda.
- **Bridge**: Memisahkan abstraksi dari implementasi.
- **Composite**: Mengelola struktur pohon (Tree).
- **Decorator**: Menambah fitur baru secara dinamis.
- **Facade**: Antarmuka sederhana untuk sistem yang rumit.
- **Flyweight**: Berbagi memori untuk objek kecil dalam jumlah besar.
- **Proxy**: Perwakilan untuk objek lain.

## 4. The Blueprint (Structural)
(Diagram komposisi objek)

## 5. The "Magic" (Decoupling Strategy)
Menggunakan *Komposisi* daripada *Pewarisan* (Composition over Inheritance).

## 6. Multi-Language Nuances
Bagaimana Traits di Rust mempermudah pembuatan Decorators dibandingkan Class di TS.

## 7. Wisdom & Warnings
Jangan membuat lapisan abstraksi terlalu dalam hingga Anda sendiri bingung di mana logika aslinya berada.

## 8. Practical Lab
(Implementasi Structural Patterns lintas bahasa)
