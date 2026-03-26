export {};
/**
 * SC-01: Abstraksi Mendalam - PROCEDURAL (HOW)
 * 
 * Kenapa ini "Terlalu Detail"?
 * Di sini kita menulis seluruh langkah-langkah teknis secara manual.
 * Jika kita ingin mencari item di gudang, kita harus tahu detail raknya, 
 * cara jalannya, dan cara mengambilnya. 
 * Ini sulit diubah jika gudangnya berubah.
 */

const items = ["Buku", "Pena", "Laptop", "Meja"];

// Langkah manual: Loop satu per satu, bandingkan, lalu simpan hasilnya.
function findItemManual(target: string) {
    let found = false;
    for (let i = 0; i < items.length; i++) {
        console.log(`[Procedural] Memeriksa index ${i}...`);
        if (items[i] === target) {
            found = true;
            break;
        }
    }
    return found;
}

console.log("Hasil Pencarian:", findItemManual("Laptop"));
