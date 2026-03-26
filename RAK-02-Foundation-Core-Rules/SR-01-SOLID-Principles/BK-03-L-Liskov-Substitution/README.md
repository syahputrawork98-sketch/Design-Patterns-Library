# BK-03: L - Liskov Substitution Principle

> "Subclass harus bisa menggantikan Superclass-nya tanpa merusak Sistem."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda menggunakan kelas turunan (subclass) tapi tiba-tiba ia melempar error "Feature Not Implemented"? Itu berarti Anda melanggar LSP. Anda membuat janji di kelas induk yang tidak bisa dipenuhi oleh kelas anaknya.

## 2. Analogy
Bayangkan Anda memesan **Burger Sapi** (Induk). Jika pelayan membawakan **Burger Ayam** (Anak), Anda mungkin masih bisa menerimanya karena sifatnya tetap "Burger" (Bisa dimakan, ada roti). Tapi jika pelayan membawakan **Burger Plastik**, Anda akan marah karena fungsinya sebagai makanan sudah rusak. Burger Plastik melanggar prinsip substitusi.

## 8. Practical Lab
- [CH-01-Bad-vs-Good/](./CH-01-Bad-vs-Good/)
