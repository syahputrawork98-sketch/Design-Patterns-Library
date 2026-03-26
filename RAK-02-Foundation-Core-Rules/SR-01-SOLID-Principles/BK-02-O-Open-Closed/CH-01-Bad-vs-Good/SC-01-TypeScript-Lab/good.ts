export {};
/**
 * OCP (Open/Closed Principle) - GOOD VERSION
 * 
 * Kenapa ini bagus?
 * Kita menggunakan "Colokan" (Interface) `ShippingMethod`.
 * Jika ada metode pengiriman baru (Instant), kita cukup BUAT KELAS BARU.
 * Kita TIDAK PERLU merubah kode `ShippingCalculator` yang sudah ada.
 * Inilah yang disebut "Open for extension, Closed for modification".
 */

interface ShippingMethod {
    calculateCost(weight: number): number;
}

class StandardShipping implements ShippingMethod {
    calculateCost(weight: number): number {
        return weight * 5000;
    }
}

class ExpressShipping implements ShippingMethod {
    calculateCost(weight: number): number {
        return weight * 10000;
    }
}

// Fitur baru: Instant Shipping tinggal ditambahkan tanpa merubah kode lama!
class InstantShipping implements ShippingMethod {
    calculateCost(weight: number): number {
        return weight * 20000;
    }
}

class ShippingCalculator {
    calculate(method: ShippingMethod, weight: number): number {
        return method.calculateCost(weight);
    }
}

// Penggunaan:
const calc = new ShippingCalculator();
console.log(calc.calculate(new StandardShipping(), 2)); // 10000
console.log(calc.calculate(new InstantShipping(), 2));  // 40000
