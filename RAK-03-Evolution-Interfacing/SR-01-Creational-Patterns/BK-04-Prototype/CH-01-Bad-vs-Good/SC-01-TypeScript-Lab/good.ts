export {};
/**
 * PROTOTYPE - GOOD VERSION
 * 
 * Objek tahu cara menyalin dirinya sendiri.
 * Klien tidak perlu tahu detail isi propertinya.
 */

interface Prototype {
    clone(): this;
}

class Shape implements Prototype {
    constructor(
        public x: number, 
        public y: number, 
        public color: string
    ) {}

    clone(): this {
        // Menggunakan Object.assign atau cara kloning lain yang sesuai
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
}

const circle1 = new Shape(10, 20, "Red");

// KEAJAIBAN: Cukup panggil .clone()
const circle2 = circle1.clone();
circle2.color = "Green"; // Merubah clone tidak merubah original

console.log("Original:", circle1.color); // Red
console.log("Clone:", circle2.color);    // Green
console.log("✅ Berhasil dikloning dengan sempurna!");
