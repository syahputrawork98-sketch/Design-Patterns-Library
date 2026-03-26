export {};
/**
 * DECORATOR - GOOD VERSION
 * 
 * Kita menggunakan "Wrapper" (Pembungkus).
 * Fitur ditambah secara dinamis saat runtime.
 */

interface Beverage {
    cost(): number;
    getDescription(): string;
}

// 1. Objek Dasar (Concrete Component)
class SimpleCoffee implements Beverage {
    cost() { return 10; }
    getDescription() { return "Kopi Hitam"; }
}

// 2. Base Decorator
abstract class CoffeeDecorator implements Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        this.beverage = beverage;
    }

    abstract cost(): number;
    abstract getDescription(): string;
}

// 3. Concrete Decorators (Hiasan Nyata)
class MilkDecorator extends CoffeeDecorator {
    cost() { return this.beverage.cost() + 2; }
    getDescription() { return this.beverage.getDescription() + ", Susu"; }
}

class SugarDecorator extends CoffeeDecorator {
    cost() { return this.beverage.cost() + 1; }
    getDescription() { return this.beverage.getDescription() + ", Gula"; }
}

// PENGGUNAAN: Fleksibel dan Dinamis
let myDrink: Beverage = new SimpleCoffee();
myDrink = new MilkDecorator(myDrink);   // Bungkus dengan Susu
myDrink = new SugarDecorator(myDrink);  // Bungkus lagi dengan Gula

console.log(`Pesanan: ${myDrink.getDescription()}`);
console.log(`💸 Total Bayar: $${myDrink.cost()}`);
/**
 * KEAJAIBAN: 
 * Kita hanya butuh 3 kelas (SimpleCoffee, Milk, Sugar) 
 * untuk membuat kombinasi tak terbatas!
 */
