export {};
/**
 * FACADE - GOOD VERSION
 * 
 * Kita buat 'SmartHomeFacade' yang menyembunyikan 
 * kerumitan TV, Sound, dan Player.
 */

class TV { turnOn() { console.log("📺 TV Nyala"); } }
class SoundSystem { setVolume(v: number) { console.log(`🔊 Volume: ${v}`); } }
class BlurayPlayer { play(movie: string) { console.log(`🎬 Memutar: ${movie}`); } }

// 1. THE FACADE (Wajah Sederhana)
class HomeTheaterFacade {
    private tv: TV;
    private sounds: SoundSystem;
    private player: BlurayPlayer;

    constructor() {
        this.tv = new TV();
        this.sounds = new SoundSystem();
        this.player = new BlurayPlayer();
    }

    // Satu tombol ajaib
    watchMovie(movie: string) {
        console.log("🚀 Menyiapkan Bioskop Pribadi...");
        this.tv.turnOn();
        this.sounds.setVolume(25);
        this.player.play(movie);
        console.log("✅ Selamat Menikmati!");
    }
}

// 2. CLIENT (SENANG!)
const bioskop = new HomeTheaterFacade();
bioskop.watchMovie("Inception");

/**
 * KEAJAIBAN: 
 * Klien tidak perlu tahu urutan 'On' atau cara setting volume.
 * Jika besok Lampu harus mati otomatis saat nonton, 
 * kita cukup tambah kodenya di dalam Facade, klien tidak akan berubah!
 */
