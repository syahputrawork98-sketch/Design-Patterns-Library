export {};
/**
 * FACADE - BAD VERSION
 * 
 * Di sini client harus memanggil banyak komponen 'jeroan' 
 * hanya untuk melakukan satu aksi (Nonton Film).
 */

class TV { turnOn() { console.log("📺 TV Nyala"); } }
class SoundSystem { setVolume(v: number) { console.log(`🔊 Volume: ${v}`); } }
class BlurayPlayer { play(movie: string) { console.log(`🎬 Memutar: ${movie}`); } }

// CLIENT (REPOT!)
const tv = new TV();
const sounds = new SoundSystem();
const player = new BlurayPlayer();

console.log("--- Persiapan Nonton ---");
tv.turnOn();
sounds.setVolume(20);
player.play("The Matrix");
