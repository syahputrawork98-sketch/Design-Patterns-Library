export {};
/**
 * STRATEGY - BAD VERSION
 * 
 * Di sini kita menggunakan switch-case besar. 
 * Masalah: Open/Closed Principle terlanggar. 
 * Kita harus merubah file ini setiap ada metode baru.
 */

class ShoppingCart {
    pay(amount: number, method: string) {
        if (method === 'creditcard') {
            console.log(`💳 Membayar $${amount} lewat Kartu Kredit.`);
        } else if (method === 'paypal') {
            console.log(`🅿️ Membayar $${amount} lewat PayPal.`);
        } else {
            console.log("❌ Metode tidak didukung.");
        }
    }
}

const cart = new ShoppingCart();
cart.pay(100, 'creditcard');
