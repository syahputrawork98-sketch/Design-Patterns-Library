# RAK-06: The Underworld (Behavioral Patterns)

> "Membantu objek berkomunikasi tanpa membuat kekacauan massal."

## 1. The Problem (Fundamental Intent)
Bagaimana cara objek di dalam sistem Anda saling berbicara tanpa harus tahu detail satu sama lain? Jika Objek A memanggil Objek B, dan Objek B memanggil Objek C secara langsung, maka sistem Anda akan lumpuh saat salah satunya dirubah (Tight coupling).

## 2. The Analogy
Bayangkan menara pengawas Bandara. Pilot tidak bicara langsung ke pilot lain di udara. Mereka bicara ke menara pengawas (Mediator). Ini menjaga keamanan dan keteraturan tanpa perlu semua orang tahu semua detail.

## 3. Everyday Deep Dive
Mempelajari otak dari interaksi sistem:
- **Chain of Responsibility**: Menyalurkan permintaan melalui rantai penanganan.
- **Command**: Mengubah permintaan menjadi objek mandiri.
- **Iterator**: Cara menelusuri koleksi tanpa tahu isi dalamnya.
- **Mediator**: Makelar komunikasi antar objek.
- **Memento**: Menyimpan status objek (Ctrl+Z).
- **Observer**: Langganan berita (Subscribe/Notify).
- **State**: Merubah perilaku objek saat statusnya berubah.
- **Strategy**: Punya banyak pilihan jurus dan bisa ganti jurus kapan saja.
- **Template Method**: Menentukan kerangka algoritma di Bapak, detail di Anak.
- **Visitor**: Menambah operasi baru tanpa merubah kelas yang didatangi.

## 4. The Blueprint (Structural)
(Diagram alur interaksi Behavioral Patterns)

## 5. The "Magic" (Decoupling Strategy)
Memisahkan *Algoritma* dan *Perilaku* dari *Struktur* data.

## 6. Multi-Language Nuances
Beberapa bahasa modern sudah punya fitur bawaan (misal: *Channels* di Go atau *Iterators* di Rust) yang menggantikan pola tradisional.

## 7. Wisdom & Warnings
Hati-hati, Behavioral Pattern seringkali membuat alur program jadi sulit ditelusuri (*Traceability*) karena banyak loncatan logika.

## 8. Practical Lab
(Implementasi Behavioral Patterns lintas bahasa)
