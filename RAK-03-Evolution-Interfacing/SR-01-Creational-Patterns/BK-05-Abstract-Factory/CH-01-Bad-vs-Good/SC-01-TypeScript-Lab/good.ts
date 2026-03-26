export {};
/**
 * ABSTRACT FACTORY - GOOD VERSION
 * 
 * Kita membuat "Tema" sebagai sebuah Pabrik. 
 * Klien cukup memanggil pabrik tema tersebut.
 */

// 1. Kontrak Produk
interface Button { render(): void; }
interface Checkbox { check(): void; }

// 2. Factory Interface
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// 3. Implementasi Modern
class ModernButton implements Button { render() { console.log("🔘 Render Modern Button"); } }
class ModernCheckbox implements Checkbox { check() { console.log("☑️ Modern Checkbox Checked"); } }

class ModernFactory implements GUIFactory {
    createButton() { return new ModernButton(); }
    createCheckbox() { return new ModernCheckbox(); }
}

// 4. Implementasi Retro
class RetroButton implements Button { render() { console.log("📺 Render Retro Button"); } }
class RetroCheckbox implements Checkbox { check() { console.log("✅ Retro Checkbox Checked"); } }

class RetroFactory implements GUIFactory {
    createButton() { return new RetroButton(); }
    createCheckbox() { return new RetroCheckbox(); }
}

// 5. Penggunaan Arsitektur
function startApp(factory: GUIFactory) {
    const btn = factory.createButton();
    const chk = factory.createCheckbox();
    btn.render();
    chk.check();
}

console.log("--- Menjalankan Tema Modern ---");
startApp(new ModernFactory());

console.log("--- Menjalankan Tema Retro ---");
startApp(new RetroFactory());

/**
 * KEAJAIBAN: 
 * Klien 'startApp' tidak tahu dia sedang pakai tema apa. 
 * Kita menjamin seluruh UI akan konsisten dalam satu tema!
 */
