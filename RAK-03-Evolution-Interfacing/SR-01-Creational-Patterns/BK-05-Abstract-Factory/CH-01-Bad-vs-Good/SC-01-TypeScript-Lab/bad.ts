export {};
/**
 * ABSTRACT FACTORY - BAD VERSION
 * 
 * Di sini kita mengecek tema setiap kali membuat UI.
 * Sangat kaku dan rawan salah pasang tema.
 */

class ModernButton { render() { console.log("🔘 Render Modern Button"); } }
class RetroButton { render() { console.log("📺 Render Retro Button"); } }

function createUI(theme: string) {
    // MASALAH: Harus cek tema secara manual di setiap komponen
    if (theme === "modern") {
        const btn = new ModernButton();
        btn.render();
    } else {
        const btn = new RetroButton();
        btn.render();
    }
}

createUI("modern");
