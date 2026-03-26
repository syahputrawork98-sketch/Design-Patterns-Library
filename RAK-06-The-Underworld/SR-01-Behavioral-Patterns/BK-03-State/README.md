# BK-03: State Pattern

> "Berubah Sifat seiring Berubahnya Hati (State)."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda menulis kode untuk **Mesin Penjual Otomatis (Vending Machine)**?
- `if (state === 'NoCoin') { ... }`
- `else if (state === 'HasCoin') { ... }`
- `else if (state === 'SoldOut') { ... }`
Setiap kali Anda menambah satu tombol baru, Anda harus merubah puluhan `if-else` untuk mengecek status mesin saat itu. Kode Anda menjadi sangat rapuh.

## 2. Analogy
Bayangkan **Smartphone**.
- Saat smartphone dalam **Layar Terkunci**, menekan layar tidak akan membuka aplikasi (Perilaku A).
- Saat smartphone **Terbuka**, menekan layar akan membuka aplikasi (Perilaku B).
- Tombol yang sama memberikan hasil yang berbeda karena "Status" (State) HPnya berbeda.
- State Pattern meletakkan perilaku-perilaku tersebut di dalam objek status itu sendiri.

## 3. Everyday Deep Dive
State Pattern memungkinkan sebuah objek merubah perilakunya saat state internalnya berubah. Objek tersebut akan terlihat seolah-olah merubah kelasnya.
- **Context**: Kelas utama (misal: Smartphone).
- **State Interface**: Kontrak untuk semua perilaku (misal: onTouch).
- **Concrete States**: Perilaku nyata (misal: LockedState, UnlockedState).

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
