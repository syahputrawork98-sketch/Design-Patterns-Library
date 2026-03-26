export {};
/**
 * DECORATOR - BAD VERSION
 * 
 * Class Explosion: 
 * Kita membuat kelas baru untuk setiap kombinasi fitur.
 */

class Coffee {
    cost() { return 10; }
}

// MASALAH: Bagaimana jika ada 10 jenis topping? 
// Kita akan butuh ratusan kelas kombinasi.
class CoffeeWithMilk extends Coffee {
    cost() { return super.cost() + 2; }
}

class CoffeeWithSugar extends Coffee {
    cost() { return super.cost() + 1; }
}

class CoffeeWithMilkAndSugar extends Coffee {
    cost() { return 10 + 2 + 1; }
}

const myOrder = new CoffeeWithMilkAndSugar();
console.log("Total Bayar:", myOrder.cost());
