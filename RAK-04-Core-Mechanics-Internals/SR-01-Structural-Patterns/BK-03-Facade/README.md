# BK-03: Facade Pattern

> "Wajah sederhana untuk sistem yang rumit di belakangnya."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda menggunakan library pihak ketiga yang mengharuskan Anda memanggil 10 fungsi berbeda hanya untuk melakukan satu hal sederhana? 
- `auth.init()`
- `auth.checkSession()`
- `auth.getPermissions()`
- `auth.connectToDatabase()...`
Klien (UI atau Logic lain) harus tahu terlalu banyak detail tentang bagaimana sistem tersebut bekerja. Jika sistem tersebut berubah, Anda harus merubah seluruh bagian aplikasi yang memanggil 10 fungsi tadi.

## 2. Analogy
Bayangkan menggunakan **Home Theater**.
- Tanpa Facade: Anda harus menyalakan TV, menyalakan Player, memilih Input HDMI, meredupkan lampu, menarik layar proyektor, dan mengatur volume speaker secara manual satu per satu.
- Dengan Facade: Anda cukup menekan satu tombol **"Watch Movie"**.
- Tombol tersebut akan mengurus seluruh kerumitan menyalakan 5-6 perangkat di belakang layar. Itulah Facade.

## 3. Everyday Deep Dive
Facade menyediakan interface tingkat tinggi yang membuat sebuah sub-sistem lebih mudah digunakan.
- **Facade**: Kelas yang "menelan" kerumitan dan menyediakan fungsi-fungsi sederhana.
- **Sub-systems**: Kumpulan kelas rumit yang bekerja di belakang layar.
- **Client**: Meminta tugas lewat Facade tanpa peduli detail teknisnya.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
