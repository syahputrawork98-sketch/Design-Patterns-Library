export {};
/**
 * BUILDER - BAD VERSION
 * 
 * Telescoping Constructor: 
 * Kita terpaksa mengirim banyak argument, 
 * bahkan yang kita tidak butuhkan (null/false).
 */

class House {
    constructor(
        public windows: number,
        public doors: number,
        public hasGarage: boolean,
        public hasSwimPool: boolean,
        public hasGarden: boolean,
        public houseType: string
    ) {}
}

// MASALAH: Sulit dibaca, rawan tertukar urutan.
const myHouse = new House(4, 2, true, false, true, "Minimalist");
console.log("Rumah dibangun:", myHouse);
