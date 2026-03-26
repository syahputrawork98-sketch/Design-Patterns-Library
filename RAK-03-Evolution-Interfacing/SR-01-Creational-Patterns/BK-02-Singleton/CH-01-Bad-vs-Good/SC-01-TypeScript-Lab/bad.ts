export {};
/**
 * SINGLETON - BAD VERSION
 * 
 * Di sini constructor bersifat public. 
 * Siapa pun bisa membuat database berkali-kali.
 */

class Database {
    constructor() {
        console.log("🛠️ Membuka koneksi database baru...");
    }
}

// MASALAH: Dua objek berbeda (Duplikasi resource)
const db1 = new Database();
const db2 = new Database();

console.log("Apakah db1 sama dengan db2?", db1 === db2); // false
