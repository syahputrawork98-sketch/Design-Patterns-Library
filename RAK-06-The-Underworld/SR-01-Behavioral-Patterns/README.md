# SR-01: Behavioral Patterns

> "Mengatur Tata Tertib dan Arus Informasi Antar Komponen."

## 1. Skenario Kekacauan (The Problem)
Tanpa aturan main yang jelas, objek-objek di aplikasi Anda akan saling memanggil secara liar. Ini membuat debugging menjadi neraka karena Anda tidak tahu dari mana asal sebuah aksi dimulai dan ke mana ia berakhir.

## 2. Analogy
Struktur ini seperti **Orkestra**. Setiap pemain alat musik tahu kapan harus mulai, kapan harus berhenti, dan bagaimana merespon instruksi konduktor tanpa harus saling berteriak satu sama lain.

## 3. Everyday Deep Dive
Sub-Rak ini mencakup pola-pola untuk mengatur kelakuan objek:
- **BK-01: Observer**: Siaran otomatis kepada pengikut.
- **BK-02: Strategy**: Pilih strategi terbaik di saat yang tepat.
- **BK-03: State**: Berubah perilaku sesuai kondisi internal.

## 8. Practical Lab
- [BK-01-Observer/](./BK-01-Observer/)
- [BK-02-Strategy/](./BK-02-Strategy/)
- [BK-03-State/](./BK-03-State/)
