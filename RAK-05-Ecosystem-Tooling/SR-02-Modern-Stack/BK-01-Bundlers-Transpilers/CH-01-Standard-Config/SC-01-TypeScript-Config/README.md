# SC-01: TypeScript Config

> "Bedah Jantung Konfigurasi: tsconfig.json."

## 1. Skenario Kekacauan (The Problem)
Kenapa TypeScript harus di-config? Tanpa config, compiler tidak tahu apakah Anda ingin menargetkan browser lama atau Node.js terbaru.

## 8. Practical Lab
Contoh konfigurasi `tsconfig.json` standar untuk proyek Design Patterns kita:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "esModuleInterop": true
  }
}
```
Penjelasan:
- **target**: Output ke JavaScript versi apa (ESNext = Paling modern).
- **strict**: Menyalakan mode "Galak" agar kita tidak teledor.
- **outDir**: Folder tempat hasil terjemahan disimpan.
