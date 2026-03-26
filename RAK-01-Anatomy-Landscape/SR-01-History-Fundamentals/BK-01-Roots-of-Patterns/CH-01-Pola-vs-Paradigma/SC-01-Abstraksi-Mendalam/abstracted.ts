export {};
/**
 * SC-01: Abstraksi Mendalam - ABSTRACTED (WHAT)
 * 
 * Kenapa ini "Elegan"?
 * Kita tidak peduli *bagaimana* barang ditemukan. 
 * Kita hanya bilang "Hey Gudang, cari barang ini" (What we want). 
 * Di balik layar, Gudang bisa menggunakan loop, database, atau pencarian AI. 
 * Kode kita tetap bersih dan tidak terikat detail teknis.
 */

interface Inventory {
    exists(item: string): boolean;
}

class SimpleInventory implements Inventory {
    private items = ["Buku", "Pena", "Laptop", "Meja"];

    exists(item: string): boolean {
        // Kita menggunakan fungsi bawaan yang sudah terabstraksi (.includes)
        return this.items.includes(item);
    }
}

// Penggunaan Arsitektur:
const myInventory: Inventory = new SimpleInventory();
console.log("Hasil Pencarian (Abstraksi):", myInventory.exists("Laptop"));
