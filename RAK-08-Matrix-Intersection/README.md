# RAK-08: Matrix Intersection (Cross-Lang)

> "Bahasa boleh berbeda, tapi pola pikir (Pattern) tetap sama."

## 1. Skenario Kekacauan (The Problem)
Pernahkah Anda mencoba menerapkan pola **Singleton** di bahasa pemrograman **Go** menggunakan cara yang sama seperti di **Java**? Anda akan mendapati bahwa Go tidak memiliki `private constructor` yang sama persis seperti Java. Memaksa satu gaya bahasa ke bahasa lain tanpa memahami nuansanya akan membuat kode Anda terlihat "asing" dan tidak idiomatik (*Non-Idiomatic Code*).

## 2. Analogy
Pola Desain adalah seperti **Resep Masakan**.
- Resepnya sama: "Nasi Goreng".
- Jika Anda memasak di **Indonesia**, Anda menggunakan Wajan dan Api Kompor.
- Jika Anda memasak di **Barat**, Anda mungkin menggunakan Pan listrik.
- Alatnya (Syntax) berbeda, tapi langkah-langkah logikanya (Pattern) tetap menghasilkan Nasi Goreng.

## 3. Everyday Deep Dive (Penjelasan Santai)
Rak ini adalah "Kamus Terjemah" bagi arsitek software:
- **TypeScript**: Kuat di Interface dan Class (Tradisional OOP).
- **Go**: Interface bersifat implisit (*Duck Typing*) dan lebih fokus pada komposisi struktur (*Structs*).
- **Rust**: Menggunakan `Traits` dan aturan kepemilikan memori (*Ownership*) yang ketat.
- **Python**: Sangat dinamis, seringkali pola desain bisa digantikan dengan fitur bawaan bahasa (misal: Decorator bawaan).

## 4. The Blueprint (The Matrix)
| Design Pattern | TypeScript (OOP) | Go (Composition) | Rust (Traits) |
|---|---|---|---|
| **Strategy** | Interface + Class | Interface + Struct | Trait + Impl |
| **Observer** | Event Emitter / List | Channels / Callback | Trait Objects |
| **Singleton** | Static Property | Once.Do / Package Var | OnceCell / Lazy |

## 8. Practical Lab
Struktur navigasi rak ini mengikuti **Hirarki 5-Level**:
- **[SR-01-Language-Nuances/](./SR-01-Language-Nuances/)**
  - [BK-01: Master Matrix](./SR-01-Language-Nuances/BK-01-Master-Matrix/)
