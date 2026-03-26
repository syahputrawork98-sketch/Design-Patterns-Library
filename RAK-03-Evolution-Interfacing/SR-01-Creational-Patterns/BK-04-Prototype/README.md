# BK-04: Prototype Pattern

> "Menggandakan masa lalu daripada membangun dari nol."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda ingin membuat objek yang sangat mirip dengan objek yang sudah ada, tapi proses pembuatannya sangat "mahal" (misal: harus ambil data dari database atau proses hitung rumit)? 
Jika Anda membuat objek baru dari nol (`new`), Anda membuang-buang waktu dan memori. Keadaan (state) objek lama juga akan sulit ditiru secara presisi.

## 2. Analogy
Bayangkan **Membelah Diri (Clone)** seperti sel biologi.
- Sel tidak perlu menunggu "Instruksi Pembuatan" dari otak untuk tumbuh dari nol lagi.
- Sel cukup membelah dirinya menjadi dua yang identik. Apa yang ada di sel lama, ada di sel baru secara instan.
- Prototype adalah tombol "Copy-Paste" bagi objek Anda.

## 3. Everyday Deep Dive
Prototype memungkinkan kita menyalin objek yang sudah ada tanpa membuat kode kita terikat pada kelas objek tersebut.
- **Prototype Interface**: Menyediakan metode `clone()`.
- **Concrete Prototype**: Mengimplementasikan cara menyalin dirinya sendiri.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
