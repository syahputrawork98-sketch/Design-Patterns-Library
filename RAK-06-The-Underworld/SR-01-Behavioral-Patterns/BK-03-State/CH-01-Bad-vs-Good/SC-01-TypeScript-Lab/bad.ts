export {};
/**
 * STATE - BAD VERSION
 * 
 * Di sini kita menggunakan banyak if-else di dalam satu kelas.
 * Masalah: Sangat sulit dibaca dan rawan error saat ada status baru.
 */

class Smartphone {
    private state: string = 'LOCKED';

    pressHomeButton() {
        if (this.state === 'LOCKED') {
            console.log("🔓 Membuka kunci layar...");
            this.state = 'HOME_SCREEN';
        } else if (this.state === 'HOME_SCREEN') {
            console.log("🏠 Kembali ke layar utama.");
        } else if (this.state === 'IN_APP') {
            console.log("⬅️ Menutup aplikasi, kembali ke Home.");
            this.state = 'HOME_SCREEN';
        }
    }

    touchScreen() {
        if (this.state === 'LOCKED') {
            console.log("❌ Layar terkunci, sentuhan diabaikan.");
        } else if (this.state === 'HOME_SCREEN') {
            console.log("📱 Membuka aplikasi...");
            this.state = 'IN_APP';
        }
    }
}

const hp = new Smartphone();
hp.touchScreen();
hp.pressHomeButton();
hp.touchScreen();
