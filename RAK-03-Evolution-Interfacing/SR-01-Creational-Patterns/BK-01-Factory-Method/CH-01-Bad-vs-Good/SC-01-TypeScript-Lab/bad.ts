export {};
/**
 * FACTORY METHOD - BAD VERSION
 * 
 * Di sini kelas Logistics tahu terlalu banyak detail tentang moda transportasi.
 * Jika kita mau tambah 'Kapal', kita harus merubah fungsi planDelivery.
 */

class Truck {
    deliver() {
        console.log("🚚 Mengirim lewat darat menggunakan Truk.");
    }
}

class Logistics {
    private mode: string;

    constructor(mode: string) {
        this.mode = mode;
    }

    planDelivery() {
        // MASALAH: Kaku (Tight Coupling)
        if (this.mode === 'truck') {
            const transport = new Truck();
            transport.deliver();
        } else {
            console.log("❌ Moda transportasi tidak didukung.");
        }
    }
}

const app = new Logistics('truck');
app.planDelivery();
