# RAK-03: Evolution & Interfacing (Creational Patterns)

> "Seni menciptakan objek tanpa membuat kekacauan."

## 1. The Problem (Fundamental Intent)
Menggunakan perintah `new MyClass()` di mana-mana akan membuat kode Anda kaku (Rigid). Jika besok cara membuat objeknya berubah, Anda harus merubah ratusan file.

## 2. The Analogy
Bayangkan Anda ingin memesan Pizza. Anda tidak perlu tahu bagaimana cara membuat adonan atau menyalakan oven. Anda cukup bilang ke "Pelayan" (Factory) jenis Pizza apa yang Anda mau, dan mereka akan memberikannya kepada Anda.

## 3. Everyday Deep Dive
Kita akan mempelajari para "Pencipta" yang pintar:
- **Singleton**: Menjamin hanya ada satu instance di seluruh dunia.
- **Factory Method**: Delegasikan pembuatan objek ke ahlinya.
- **Abstract Factory**: Pabrik dari segala pabrik.
- **Builder**: Membangun objek yang kompleks selangkah demi selangkah.
- **Prototype**: Menggandakan objek yang sudah ada.

## 4. The Blueprint (Structural)
(Diagram kelas untuk Creational Patterns)

## 5. The "Magic" (Decoupling Strategy)
Memisahkan proses *Instansiasi* (Pembuatan) dari *Penggunaan* objek.

## 6. Multi-Language Nuances
Beberapa bahasa seperti Go/Rust tidak punya "Class" tradisional, bagaimana cara mereka "menciptakan" objek?

## 7. Wisdom & Warnings
Jangan gunakan Singleton hanya karena malas kirim variabel lewat parameter!

## 8. Practical Lab
(Implementasi 5 Creational Patterns lintas bahasa)
