export {};
/**
 * DIP (Dependency Inversion Principle) - BAD VERSION
 * 
 * Kenapa ini buruk?
 * Kelas `Store` (High Level) bergantung langsung pada `MySQLDatabase` (Low Level). 
 * Ini adalah "Ketergantungan Kaku". 
 * Jika besok Anda ingin ganti ke MongoDB, Anda harus BUKAR-PASANG kode di dalam `Store`. 
 * Ini membuat `Store` sulit ditest dan tidak fleksibel.
 */

class MySQLDatabase {
    save(data: string) {
        console.log(`Menyimpan "${data}" ke MySQL...`);
    }
}

class Store {
    private db: MySQLDatabase;

    constructor() {
        // ❌ Pelanggaran DIP: Membuat instance langsung di dalam constructor
        this.db = new MySQLDatabase();
    }

    purchase(item: string) {
        this.db.save(item);
    }
}

// Penggunaan:
const myStore = new Store();
myStore.purchase("Laptop");
