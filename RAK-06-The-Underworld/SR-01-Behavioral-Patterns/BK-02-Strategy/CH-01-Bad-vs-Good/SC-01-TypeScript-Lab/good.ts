export {};
/**
 * STRATEGY - GOOD VERSION
 * 
 * Strategi pembayaran dipisahkan ke kelas masing-masing.
 * ShoppingCart tidak perlu tau isi logikanya.
 */

// 1. Interface Strategi
interface PaymentStrategy {
    execute(amount: number): void;
}

// 2. Strategi Konkret
class CreditCardPay implements PaymentStrategy {
    execute(amount: number) {
        console.log(`💳 Membayar $${amount} lewat Kartu Kredit.`);
    }
}

class GopayPay implements PaymentStrategy {
    execute(amount: number) {
        console.log(`📱 Membayar $${amount} lewat GOPAY.`);
    }
}

// 3. Konteks (Pangguna)
class ShoppingCart {
    private strategy: PaymentStrategy;

    constructor(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PaymentStrategy) {
        this.strategy = strategy;
    }

    checkout(amount: number) {
        this.strategy.execute(amount);
    }
}

// PENGGUNAAN
const myCart = new ShoppingCart(new CreditCardPay());
myCart.checkout(250);

// KEAJAIBAN: Kita ganti strategi di jalan!
console.log("--- Customer ganti pikiran ---");
myCart.setStrategy(new GopayPay());
myCart.checkout(250);

/**
 * KEUNTUNGAN: 
 * Jika ada ShopeePay, kita tinggal buat class baru 
 * tanpa harus menyentuh class ShoppingCart.
 */
