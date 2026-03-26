export {};
/**
 * STATE - GOOD VERSION
 * 
 * Logika setiap status dipindah ke kelasnya masing-masing.
 * Smartphone hanya bertugas menyimpan 'state' saat ini.
 */

interface MobileState {
    pressHome(): void;
    touchScreen(): void;
}

// 1. Concrete States (Status Nyata)
class LockedState implements MobileState {
    constructor(private phone: Smartphone) {}

    pressHome() {
        console.log("🔓 Membuka kunci layar...");
        this.phone.setState(new HomeState(this.phone));
    }
    touchScreen() {
        console.log("❌ Layar terkunci, sentuhan diabaikan.");
    }
}

class HomeState implements MobileState {
    constructor(private phone: Smartphone) {}

    pressHome() {
        console.log("🏠 Sudah berada di layar utama.");
    }
    touchScreen() {
        console.log("📱 Membuka aplikasi...");
        this.phone.setState(new InAppState(this.phone));
    }
}

class InAppState implements MobileState {
    constructor(private phone: Smartphone) {}

    pressHome() {
        console.log("⬅️ Menutup aplikasi, kembali ke Home.");
        this.phone.setState(new HomeState(this.phone));
    }
    touchScreen() {
        console.log("🎮 Sedang berinteraksi di dalam aplikasi.");
    }
}

// 2. CONTEXT (Wadah State)
class Smartphone {
    private state: MobileState;

    constructor() {
        // Awalnya terkunci
        this.state = new LockedState(this);
    }

    setState(state: MobileState) {
        this.state = state;
    }

    // Delegasikan tugas ke objek State saat ini
    pressHomeButton() { this.state.pressHome(); }
    touchScreen() { this.state.touchScreen(); }
}

// PENGGUNAAN
const myPhone = new Smartphone();

console.log("--- Kondisi Awal ---");
myPhone.touchScreen();
myPhone.pressHomeButton();

console.log("--- Kondisi Terbuka ---");
myPhone.touchScreen();
myPhone.pressHomeButton();

/**
 * KEAJAIBAN: 
 * Jika ada status 'Low Battery', kita tinggal buat class baru 
 * tanpa harus mengotori class Smartphone sama sekali!
 */
