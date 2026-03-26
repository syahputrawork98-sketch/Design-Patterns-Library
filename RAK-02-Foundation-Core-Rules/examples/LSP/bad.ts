export {};
/**
 * LSP (Liskov Substitution Principle) - BAD VERSION
 * 
 * Kenapa ini buruk?
 * Kelas `Penguin` adalah anak dari `Bird`. 
 * Namun, Penguin tidak bisa terbang! 
 * Saat kita mengganti `Bird` dengan `Penguin` di fungsi `makeBirdFly`, 
 * program akan CRASH karena Penguin melempar Error. 
 * Ini melanggar prinsip Substitusi Liskov: Anak harus bisa menggantikan Bapak tanpa merusak sistem.
 */

class Bird {
    fly() {
        console.log("Burung terbang tinggi...");
    }
}

class Eagle extends Bird {}

class Penguin extends Bird {
    // ❌ Pelanggaran LSP: Penguin memodifikasi perilaku Bapak sampai merusak kontrak
    fly() {
        throw new Error("Maaf, Penguin tidak bisa terbang!");
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

// Penggunaan:
makeBirdFly(new Eagle());   // ✅ Berhasil
makeBirdFly(new Penguin()); // ❌ CRASH: Error: Maaf, Penguin tidak bisa terbang!
