export {};
/**
 * OCP (Open/Closed Principle) - BAD VERSION
 * 
 * Kenapa ini buruk?
 * Bayangkan jika bos Anda minta tambah metode pengiriman "Instant" (Gojek).
 * Anda terpaksa merubah `calculateShipping` dan menambah `else if`. 
 * Ini melanggar prinsip "Closed for modification". 
 * Merubah kode lama beresiko merusak logika yang sudah jalan (Standard/Express).
 */

class ShippingService {
    calculateShippingCost(type: string, weight: number): number {
        if (type === 'Standard') {
            return weight * 5000;
        } else if (type === 'Express') {
            return weight * 10000;
        }
        // Jika ada tipe baru, harus tambah else if terus...
        return 0;
    }
}

// Penggunaan:
const service = new ShippingService();
console.log(service.calculateShippingCost('Standard', 2)); // 10000
console.log(service.calculateShippingCost('Express', 2));  // 20000
