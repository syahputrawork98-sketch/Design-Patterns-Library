export {};
/**
 * SINGLETON - GOOD VERSION
 * 
 * Di sini constructor kita sembunyikan (private).
 * Satu-satunya cara mendapatkan objek adalah lewat 'getInstance()'.
 */

class Database {
    private static instance: Database | null = null;

    // 1. Sembunyikan constructor
    private constructor() {
        console.log("🚀 Membuka koneksi database HANYA SEKALI.");
    }

    // 2. Titik akses tunggal
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(sql: string) {
        console.log(`Executing: ${sql}`);
    }
}

// 3. Penggunaan:
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log("Apakah db1 sama dengan db2?", db1 === db2); // true
console.log("✅ Konsistensi terjaga, memori hemat!");
