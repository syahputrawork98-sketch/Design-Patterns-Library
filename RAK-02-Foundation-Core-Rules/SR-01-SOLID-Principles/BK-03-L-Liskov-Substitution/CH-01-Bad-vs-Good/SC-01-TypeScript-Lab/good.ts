export {};
/**
 * LSP (Liskov Substitution Principle) - GOOD VERSION
 * 
 * Kenapa ini bagus?
 * Kita merubah cara kita mengelompokkan hewan. 
 * Kita tidak lagi mengasumsikan semua `Bird` bisa terbang.
 * Kita membagi menjadi `FlyingBird` dan `SwimmingBird`. 
 * Dengan begini, fungsi `makeFlyingBirdFly` HANYA menerima burung yang memang bisa terbang.
 * Tidak ada lagi kejutan Error di tengah jalan!
 */

class Bird {
    eat() {
        console.log("Burung sedang makan...");
    }
}

class FlyingBird extends Bird {
    fly() {
        console.log("Burung terbang tinggi...");
    }
}

class SwimmingBird extends Bird {
    swim() {
        console.log("Burung berenang di air...");
    }
}

class Eagle extends FlyingBird {}
class Penguin extends SwimmingBird {}

function makeFlyingBirdFly(bird: FlyingBird) {
    bird.fly();
}

// Penggunaan:
const eagle = new Eagle();
const penguin = new Penguin();

makeFlyingBirdFly(eagle); // ✅ Berhasil
// makeFlyingBirdFly(penguin); // ✅ TypeScript akan memberi tahu Error SEBELUM program dijalankan!
penguin.eat(); // ✅ Penguin tetap bisa makan walau tidak bisa terbang.
