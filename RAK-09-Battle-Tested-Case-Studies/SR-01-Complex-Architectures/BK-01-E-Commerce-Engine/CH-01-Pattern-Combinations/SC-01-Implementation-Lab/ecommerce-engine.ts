export {};
/**
 * RAK-09: E-COMMERCE ENGINE (Pattern Composition)
 * 
 * Di sini kita menggabungkan:
 * 1. Factory (Membuat Produk)
 * 2. Strategy (Sistem Pembayaran)
 * 3. Observer (Notifikasi Berhasil)
 */

// --- 1. OBSERVER PATTERN ---
interface NotificationObserver {
    notify(msg: string): void;
}

class UserNotification implements NotificationObserver {
    notify(msg: string) { console.log(`📧 Push Notification: ${msg}`); }
}

class InventorySystem implements NotificationObserver {
    notify(msg: string) { console.log(`📦 Gudang: Menghapus stok (Info: ${msg})`); }
}

// --- 2. STRATEGY PATTERN ---
interface PaymentStrategy {
    pay(amount: number): boolean;
}

class GopayPayment implements PaymentStrategy {
    pay(amount: number) { 
        console.log(`📱 Membayar $${amount} via GOPAY...`);
        return true; 
    }
}

// --- 3. FACTORY PATTERN ---
interface Product { name: string; price: number; }

class ProductFactory {
    static createProduct(type: 'EL' | 'CL'): Product {
        if (type === 'EL') return { name: "Laptop ROG", price: 1000 };
        return { name: "Kaos Polos", price: 20 };
    }
}

// --- ORKESTRASI (THE ENGINE) ---
class OrderEngine {
    private observers: NotificationObserver[] = [];

    addObserver(o: NotificationObserver) { this.observers.push(o); }

    processOrder(type: 'EL' | 'CL', payment: PaymentStrategy) {
        // Step 1: Buat Produk (Factory)
        const product = ProductFactory.createProduct(type);
        console.log(`🛒 Melakukan pemesanan: ${product.name}`);

        // Step 2: Bayar (Strategy)
        const isPaid = payment.pay(product.price);

        if (isPaid) {
            // Step 3: Kabari semua pihak (Observer)
            this.observers.forEach(o => o.notify(`Pesanan ${product.name} Berhasil!`));
            console.log("✅ ORDER COMPLETE!");
        }
    }
}

// --- EKSEKUSI ---
const engine = new OrderEngine();
engine.addObserver(new UserNotification());
engine.addObserver(new InventorySystem());

console.log("--- Customer Membeli Laptop ---");
engine.processOrder('EL', new GopayPayment());

/**
 * KEAJAIBAN: 
 * Lihat betapa bersihnya class OrderEngine. 
 * Ia tidak peduli bagaiama Laptop dibuat, bagaimana Gopay bekerja, 
 * atau siapa saja yang perlu diberi notifikasi.
 * Inilah puncak dari penerapan Pola Desain (Design Patterns).
 */
