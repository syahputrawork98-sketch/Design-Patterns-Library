export {};
/**
 * SRP (Single Responsibility Principle) - BAD VERSION
 * 
 * Kenapa ini buruk?
 * Kelas `User` ini mengerjakan terlalu banyak hal (Tukang Sapu):
 * 1. Mengelola data user (Constructor)
 * 2. Mengirim email (Logika Bisnis/Notifikasi)
 * 3. Menyimpan ke database (Infrastruktur/Persistence)
 */

class User {
    constructor(public name: string, public email: string) {}

    // ❌ Pelanggaran SRP: User tidak seharusnya tahu cara kirim email
    sendWelcomeEmail() {
        console.log(`Mengirim email selamat datang ke ${this.email}...`);
        // Logika pengiriman email yang rumit di sini...
    }

    // ❌ Pelanggaran SRP: User tidak seharusnya tahu detail database
    saveToDatabase() {
        console.log(`Menyimpan user ${this.name} ke database MySQL...`);
        // Logika koneksi DB di sini...
    }
}

// Penggunaan:
const user = new User("Budi", "budi@example.com");
user.sendWelcomeEmail();
user.saveToDatabase();
