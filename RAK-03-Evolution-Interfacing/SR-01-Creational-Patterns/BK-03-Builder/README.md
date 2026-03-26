# BK-03: Builder Pattern

> "Merakit objek kompleks langkah demi langkah, seperti bermain LEGO."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda melihat kelas dengan constructor yang sangat panjang? 
`new House(4, 2, true, true, false, "Red", true...)`
Ini disebut **Telescoping Constructor**. Sangat sulit dibaca, rawan tertukar urutan argumennya, dan seringkali kita terpaksa memasukkan nilai `null` atau `false` untuk fitur yang tidak kita butuhkan.

## 2. Analogy
Bayangkan memesan **Custom Pizza**.
- Anda tidak ingin pelayan membawakan pizza "Default" lalu Anda membuang topping yang tidak suka.
- Anda ingin bilang: "Saya mau adonan tipis", lalu "Tambahkan keju", lalu "Tambahkan jamur", dan terakhir "Sajikan!".
- Builder adalah "Pelayan" yang mencatat setiap langkah rakitan Anda hingga objek siap digunakan.

## 3. Everyday Deep Dive
Builder memisahkan **Konstruksi** (Langkah rakitan) dari **Representasi** (Objek akhir).
1.  **Product**: Objek kompleks yang ingin dibuat.
2.  **Builder**: Interface/Kelas yang berisi langkah-langkah pembuatan.
3.  **Director** (Opsional): "Mandor" yang tahu urutan langkah untuk membuat variasi tertentu (misal: Rumah Mewah vs Rumah Minimalis).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
