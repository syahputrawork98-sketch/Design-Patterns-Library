export {};
/**
 * PROTOTYPE - BAD VERSION
 * 
 * Di sini kita mencoba menyalin objek secara manual properti per properti.
 * Masalah: Capek, rawan lupa, dan tidak bisa akses field private.
 */

class Shape {
    public x: number = 0;
    public y: number = 0;
    public color: string = "";

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

const circle1 = new Shape(10, 20, "Red");

// MASALAH: Copy manual yang melelahkan
const circle2 = new Shape(circle1.x, circle1.y, circle1.color);
circle2.color = "Blue";

console.log("Original:", circle1);
console.log("Clone manual:", circle2);
