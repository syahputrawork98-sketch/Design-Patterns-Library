# BK-02: Decorator Pattern

> "Menambah fitur tanpa merusak struktur: Seni membungkus objek."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda membuat banyak sub-class hanya untuk kombinasi fitur yang berbeda? 
- `CoffeeWithMilk`
- `CoffeeWithSugar`
- `CoffeeWithMilkAndSugar`
- `CoffeeWithChocolateAndMilk...`
Ini disebut **Class Explosion**. Anda akan memiliki ratusan kelas hanya untuk urusan topping sederhana. Sangat kaku dan tidak fleksibel untuk kombinasi baru di masa depan.

## 2. Analogy
Bayangkan memesan **Kopi**.
- Anda mendapatkan kopi dasar (Base).
- Anda ingin tambah **Susu**? Anda tidak perlu membuat kopi baru dari nol. Anda cukup "membungkus" kopi tadi dengan lapisan susu.
- Mau tambah **Gula**? Bungkus lagi kopi bersusu tadi dengan lapisan gula.
- Decorator adalah seperti **Pakaian** atau **Topping**. Anda tetaplah orang yang sama (Objek Dasar), tapi Anda bisa memakai jaket, topi, atau kacamata (Decorator) secara bergantian atau bersamaan.

## 3. Everyday Deep Dive
Decorator memungkinkan kita menambah tanggung jawab ke sebuah objek secara dinamis dengan menempatkan objek tersebut di dalam objek "pembungkus" khusus.
- **Component**: Interface dasar objek.
- **Concrete Component**: Objek dasar yang akan dihias (misal: Kopi Hitam).
- **Base Decorator**: Kelas yang menyimpan referensi ke objek component.
- **Concrete Decorators**: Pelapis yang memberi fitur tambahan (misal: Topping Susu).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
