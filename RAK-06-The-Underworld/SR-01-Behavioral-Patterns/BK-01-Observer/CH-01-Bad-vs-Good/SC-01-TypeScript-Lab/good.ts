export {};
/**
 * OBSERVER - GOOD VERSION
 * 
 * Subscription: 
 * Pelanggan cukup daftar, nanti toko yang panggil.
 */

interface Observer {
    update(productName: string): void;
}

class Store {
    private observers: Observer[] = [];

    subscribe(o: Observer) {
        this.observers.push(o);
        console.log("✅ Berhasil langganan notifikasi!");
    }

    notify(productName: string) {
        console.log(`📣 Mengirim notifikasi: ${productName} READY!`);
        this.observers.forEach(o => o.update(productName));
    }

    restock(productName: string) {
        console.log("🏪 Toko: Menambah stok...");
        this.notify(productName);
    }
}

class Customer implements Observer {
    constructor(private name: string) {}

    update(productName: string) {
        console.log(`👤 ${this.name}: "Asik! ${productName} sudah ada, langsung beli!"`);
    }
}

// PENGGUNAAN
const store = new Store();
const budi = new Customer("Budi");
const ani = new Customer("Ani");

store.subscribe(budi);
store.subscribe(ani);

// KEAJAIBAN: Satu kali restock, semua subscriber diberitahu secara otomatis!
store.restock("iPhone 15");
