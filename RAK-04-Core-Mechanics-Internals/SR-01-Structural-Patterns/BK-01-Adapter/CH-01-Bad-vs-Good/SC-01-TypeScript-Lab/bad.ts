export {};
/**
 * ADAPTER - BAD VERSION
 * 
 * Sistem lama (LegacyApp) terpaksa harus dirubah 
 * isinya untuk menyesuaikan Library Modern.
 */

class LegacyApp {
    // MASALAH: Merubah logika internal aplikasi demi library baru
    send(msg: string) {
        console.log("Legacy Logging: " + msg);
        
        // Integrasi Paksa
        const jsonLogger = new ModernLogger();
        jsonLogger.logJSON({ text: msg });
    }
}

class ModernLogger {
    logJSON(data: { text: string }) {
        console.log("Modern JSON Log:", data);
    }
}

const app = new LegacyApp();
app.send("Halo Dunia!");
