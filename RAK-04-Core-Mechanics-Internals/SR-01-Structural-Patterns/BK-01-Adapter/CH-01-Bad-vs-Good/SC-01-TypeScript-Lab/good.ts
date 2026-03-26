export {};
/**
 * ADAPTER - GOOD VERSION
 * 
 * LegacyApp tetap bersih. Kita buat perantara (Adapter)
 * yang menerjemahkan string ke JSON.
 */

// 1. Interface yang Diharapkan Sistem Lama
interface OldLogger {
    send(msg: string): void;
}

// 2. Library Modern yang "Bahasanya Berbeda"
class ModernLogger {
    logJSON(data: { text: string }) {
        console.log("🚀 Modern JSON Log (via Adapter):", data);
    }
}

// 3. TRAVEL ADAPTER (Jembatan)
class LoggerAdapter implements OldLogger {
    private modernLogger: ModernLogger;

    constructor(modernLogger: ModernLogger) {
        this.modernLogger = modernLogger;
    }

    send(msg: string) {
        // Terjemahkan Bahasa String -> Bahasa JSON
        this.modernLogger.logJSON({ text: msg });
    }
}

// 4. Aplikasi Tetap "Bahagia" Tanpa Perlu Tahu Ada Perubahan
class LegacyApp {
    private logger: OldLogger;

    constructor(logger: OldLogger) {
        this.logger = logger;
    }

    run() {
        this.logger.send("Sistem berjalan mulus!");
    }
}

// PENGGUNAAN
const modern = new ModernLogger();
const adapter = new LoggerAdapter(modern);
const app = new LegacyApp(adapter);

app.run();
/**
 * KEAJAIBAN: 
 * LegacyApp tidak pernah tau kalau di bawahnya sudah pakai ModernLogger.
 * Kita cukup merubah konfigurasi di level 'Inisialisasi', bukan 'Logika'.
 */
