// ─────────────────────────────────────────────────────────────────────────
// JAI JAI VAANI — DYNAMIC BHAJAN LOADER
// Automatically imports every bhajan file placed inside src/data/bhajans/ folder.
//
// TO ADD A NEW BHAJAN:
// Simply drop a new .js or .json file into `src/data/bhajans/` directory!
//
// Example file shape inside `src/data/bhajans/my_new_bhajan.js`:
// export default {
//   id: "my-unique-id",
//   title: "Bhajan Title Here",
//   category: "Jai Jai Vaani", // or "Jai Jagannath", "Radha Damodar Stuti", etc.
//   lyrics: `Your bhajan lyrics here...`,
//   youtubeUrl: "https://www.youtube.com/watch?v=..."
// };
// ─────────────────────────────────────────────────────────────────────────

// Dynamically import all files from src/data/bhajans/ directory at build/runtime
const bhajanModules = import.meta.glob("./bhajans/*.{js,json}", { eager: true });

export const bhajans = Object.values(bhajanModules).map((mod) => mod.default || mod);
