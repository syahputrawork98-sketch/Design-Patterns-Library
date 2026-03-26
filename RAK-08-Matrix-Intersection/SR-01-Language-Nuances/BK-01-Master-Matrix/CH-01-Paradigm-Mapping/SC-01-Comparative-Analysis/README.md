# SC-01: Comparative Analysis

> "Analisis Mendalam 3 Bahasa Utama: TS, Go, Rust."

## 1. Skenario Kekacauan (The Problem)
Mari kita bedah satu pola desain (Strategy) dan lihat bagaimana ia diimplementasikan di 3 bahasa berbeda untuk melihat perbedaan filosofinya.

## 8. Practical Lab
Lihat perbandingan sintaks di bawah ini untuk pola **Strategy**:

### 1. TypeScript (Tradisional OOP)
```typescript
interface Strategy { execute(): void; }
class ConcreteA implements Strategy { execute() { ... } }
class Context { constructor(private s: Strategy) {} }
```

### 2. Go (Composition-first)
```go
type Strategy interface { Execute() }
type ConcreteA struct{}
func (a ConcreteA) Execute() { ... }
type Context struct { s Strategy }
```
*Nuansa: Tidak ada keyword 'implements'. Go otomatis tahu jika struct memenuhi kriteria.*

### 3. Rust (Trait-based)
```rust
trait Strategy { fn execute(&self); }
struct ConcreteA;
impl Strategy for ConcreteA { fn execute(&self) { ... } }
struct Context<T: Strategy> { s: T }
```
*Nuansa: Sangat ketat pada tipe data dan statis (Zero-cost abstraction).*

---
**Simpulan:**
Pola desain adalah konsep universal. Skill Anda sebagai arsitek tidak diukur dari seberapa hafal syntax, tapi seberapa paham Anda akan **tujuan** dari pola tersebut.
