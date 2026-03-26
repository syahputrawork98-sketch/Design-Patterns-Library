export {};
/**
 * OBSERVER - BAD VERSION
 * 
 * Polling: 
 * Client terus-menerus bertanya apakah barang sudah ready.
 */

class Store {
    public isProductReady = false;

    restock() {
        console.log("🏪 Stok masuk!");
        this.isProductReady = true;
    }
}

class Customer {
    check(store: Store) {
        if (store.isProductReady) {
            console.log("👤 Pelanggan: Akhirnya barang ada! Beliiii...");
        } else {
            console.log("👤 Pelanggan: Huft, belum ada juga. Nanti balik lagi.");
        }
    }
}

const tokped = new Store();
const budi = new Customer();

// MASALAH: Budi harus nanya terus (Melelahkan)
budi.check(tokped);
budi.check(tokped);
tokped.restock();
budi.check(tokped);
