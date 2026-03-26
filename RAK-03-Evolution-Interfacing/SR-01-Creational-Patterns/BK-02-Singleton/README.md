# BK-02: Singleton Pattern

> "Hanya ada satu Raja di dalam Istana."

## 1. Skenario Kekacauan (The Problem)
Apa yang terjadi jika Anda memiliki dua objek Database yang berjalan bersamaan?
- Masalah sinkronisasi data.
- Pemborosan memori (Resource leak).
- Kebingungan aplikasi: "Ke mana saya harus menyimpan data ini?".
Kadang-kadang, kita butuh sebuah objek yang **hanya ada satu** di seluruh dunia (aplikasi) kita.

## 2. Analogy
Bayangkan jabatan **Presiden** di sebuah negara.
- Tidak peduli siapa orangnya, di seluruh negara hanya boleh ada satu orang yang menjabat sebagai Presiden pada satu waktu. 
- Jika semua orang ingin memberikan laporan, mereka semua memberikan laporan ke **Satu Orang** yang sama. Ini menjamin pusat koordinasi yang stabil.

## 3. Everyday Deep Dive
Singleton memastikan:
1. Sebuah kelas hanya memiliki satu instansi.
2. Memberikan akses global (titik akses tunggal) ke instansi tersebut.
3. Melindungi instansi tersebut agar tidak bisa dibuat lagi dari luar.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
