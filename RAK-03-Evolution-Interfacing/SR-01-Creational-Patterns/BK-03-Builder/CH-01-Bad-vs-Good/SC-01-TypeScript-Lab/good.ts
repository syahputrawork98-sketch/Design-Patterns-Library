export {};
/**
 * BUILDER - GOOD VERSION
 * 
 * Fluent Interface: 
 * Kita membangun objek langkah demi langkah.
 * Lebih deskriptif dan opsional.
 */

class House {
    public windows: number = 0;
    public doors: number = 0;
    public hasGarage: boolean = false;
    public hasSwimPool: boolean = false;
    public hasGarden: boolean = false;
}

class HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    setWindows(count: number): this {
        this.house.windows = count;
        return this;
    }

    setDoors(count: number): this {
        this.house.doors = count;
        return this;
    }

    addGarage(): this {
        this.house.hasGarage = true;
        return this;
    }

    addSwimPool(): this {
        this.house.hasSwimPool = true;
        return this;
    }

    build(): House {
        return this.house;
    }
}

// PENGGUNAAN: Sangat deskriptif dan fleksibel.
const myLuxuryHouse = new HouseBuilder()
    .setWindows(10)
    .setDoors(4)
    .addGarage()
    .addSwimPool()
    .build();

console.log("Rumah Mewah Selesai:", myLuxuryHouse);
