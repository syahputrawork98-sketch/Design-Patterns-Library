export {};
/**
 * DIP (Dependency Inversion Principle) - GOOD VERSION
 * 
 * Kenapa ini bagus?
 * 1. `Store` tidak lagi tahu database apa yang digunakan. Ia hanya tahu kontrak `Database`. 
 * 2. Kita menggunakan "Dependency Injection": Memasukkan database dari LUAR. 
 * 3. Sekarang kita bisa ganti database sesuka hati tanpa merubah satu baris pun di `Store`. 
 * Inilah keajaiban Inversion of Control (IoC).
 */

interface Database {
    save(data: string): void;
}

class MySQLDatabase implements Database {
    save(data: string) {
        console.log(`[MySQL] Menyimpan "${data}"...`);
    }
}

class MongoDatabase implements Database {
    save(data: string) {
        console.log(`[MongoDB] Menyimpan "${data}"...`);
    }
}

class Store {
    // ✅ Mengikuti DIP: Bergantung pada Abstraksi (Interface)
    constructor(private db: Database) {}

    purchase(item: string) {
        this.db.save(item);
    }
}

// Penggunaan: 
// Kita tinggal "Suntikkan" database yang kita mau dari luar
const myStoreMySQL = new Store(new MySQLDatabase());
myStoreMySQL.purchase("Laptop");

const myStoreMongo = new Store(new MongoDatabase());
myStoreMongo.purchase("Keyboard");
