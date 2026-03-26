export {};
/**
 * SRP (Single Responsibility Principle) - GOOD VERSION
 * 
 * Kenapa ini bagus?
 * Kita membagi tanggung jawab ke kelas-kelas kecil yang spesifik:
 * 1. `User`: Hanya sebagai kontainer data (Entity).
 * 2. `EmailService`: Khusus untuk urusan pengiriman email.
 * 3. `UserRepository`: Khusus untuk urusan simpan-simpan data.
 */

class User {
    constructor(public name: string, public email: string) {}
}

class EmailService {
    sendWelcomeEmail(user: User) {
        console.log(`[EmailService] Mengirim email selamat datang ke ${user.email}...`);
    }
}

class UserRepository {
    save(user: User) {
        console.log(`[UserRepository] Menyimpan ${user.name} ke database...`);
    }
}

// Penggunaan:
const budi = new User("Budi", "budi@example.com");
const emailService = new EmailService();
const userRepo = new UserRepository();

emailService.sendWelcomeEmail(budi);
userRepo.save(budi);
