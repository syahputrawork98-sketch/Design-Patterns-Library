export {};
/**
 * ISP (Interface Segregation Principle) - BAD VERSION
 * 
 * Kenapa ini buruk?
 * Interface `SmartDevice` ini terlalu "Gemuk" (Bloated). 
 * Saat kita membangun `OldPrinter`, kita dipaksa untuk mengimplementasikan `fax()` dan `scan()`.
 * Padahal alat lama tersebut tidak punya fitur itu. 
 * Ini mengganggu pemeliharaan dan membingungkan developer lain.
 */

interface SmartDevice {
    print(): void;
    scan(): void;
    fax(): void;
}

class AllInOnePrinter implements SmartDevice {
    print() { console.log("Printing document..."); }
    scan() { console.log("Scanning document..."); }
    fax() { console.log("Faxing document..."); }
}

class OldPrinter implements SmartDevice {
    print() {
        console.log("Printing document...");
    }

    // ❌ Pelanggaran ISP: Dipaksa mengimplementasikan yang tidak perlu
    scan() {
        throw new Error("Maaf, alat ini tidak bisa Scan!");
    }

    fax() {
        throw new Error("Maaf, alat ini tidak bisa Fax!");
    }
}

// Penggunaan:
const printer = new OldPrinter();
printer.print(); // ✅ Berhasil
printer.scan();  // ❌ CRASH: Error: Maaf, alat ini tidak bisa Scan!
