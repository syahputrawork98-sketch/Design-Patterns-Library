export {};
/**
 * FACTORY METHOD - GOOD VERSION
 * 
 * Di sini Logistics tidak lagi peduli moda apa yang dipakai.
 * Ia hanya memanggil 'createTransport()' dan membiarkan sub-class 
 * yang menentukan apa yang dikirim.
 */

// 1. Kontrak Produk (Interface)
interface Transport {
    deliver(): void;
}

// 2. Produk Nyata
class Truck implements Transport {
    deliver() { console.log("🚚 Mengirim lewat darat menggunakan Truk."); }
}

class Ship implements Transport {
    deliver() { console.log("🚢 Mengirim lewat laut menggunakan Kapal."); }
}

// 3. Pencipta (Creator) - Abstract
abstract class Logistics {
    // Inilah "Factory Method"
    abstract createTransport(): Transport;

    planDelivery() {
        const transport = this.createTransport();
        transport.deliver();
    }
}

// 4. Implementasi Pencipta Spesifik
class LandLogistics extends Logistics {
    createTransport(): Transport {
        return new Truck();
    }
}

class SeaLogistics extends Logistics {
    createTransport(): Transport {
        return new Ship();
    }
}

// 5. Penggunaan Arsitektur
console.log("--- Lewat Darat ---");
const land = new LandLogistics();
land.planDelivery();

console.log("--- Lewat Laut ---");
const sea = new SeaLogistics();
sea.planDelivery();
/**
 * KEAJAIBAN: 
 * Jika besok ada 'AirLogistics (Pesawat)', kita tinggal buat class baru
 * tanpa harus merubah kode di class Logistics yang sudah ada!
 */
