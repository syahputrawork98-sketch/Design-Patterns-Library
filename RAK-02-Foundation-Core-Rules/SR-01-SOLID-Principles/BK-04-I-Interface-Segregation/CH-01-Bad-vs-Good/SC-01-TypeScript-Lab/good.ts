export {};
/**
 * ISP (Interface Segregation Principle) - GOOD VERSION
 * 
 * Kenapa ini bagus?
 * Kita memecah interface raksasa menjadi "Colokan Kecil" yang spesifik. 
 * `Printer`, `Scanner`, dan `Faxer`. 
 * `OldPrinter` cukup menggunakan colokan `Printer`. 
 * `AllInOnePrinter` bisa menggunakan ketiga colokan tersebut sekaligus. 
 * Tidak ada kode yang dipaksakan, tidak ada Error yang tidak perlu.
 */

interface Printer {
    print(): void;
}

interface Scanner {
    scan(): void;
}

interface Faxer {
    fax(): void;
}

class AllInOnePrinter implements Printer, Scanner, Faxer {
    print() { console.log("Printing document..."); }
    scan() { console.log("Scanning document..."); }
    fax() { console.log("Faxing document..."); }
}

class OldPrinter implements Printer {
    print() {
        console.log("Printing document...");
    }
}

// Penggunaan:
const modernPrinter = new AllInOnePrinter();
const oldPrinter = new OldPrinter();

modernPrinter.scan(); // ✅ Bisa Scan
oldPrinter.print();   // ✅ Bisa Print
// oldPrinter.scan(); // ✅ TypeScript akan memberi tahu Error: scan() tidak ada di OldPrinter.
