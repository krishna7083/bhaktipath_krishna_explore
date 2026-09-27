// ─────────────────────────────────────────────────────────────────────────
// LANGUAGE SETUP
// To add a THIRD language (say Marathi):
//   1. Copy src/i18n/locales/en.json to src/i18n/locales/mr.json and
//      translate every value (never rename the keys on the left).
//   2. Import it below and add it to `resources`.
//   3. Add { code: "mr", label: "मराठी" } in src/components/LanguageSwitcher.jsx
// That's the whole process — every page updates automatically.
// See EDITING_GUIDE.md → "Adding a new language".
// ─────────────────────────────────────────────────────────────────────────
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";

const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("bhaktipath-lang") : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: savedLanguage || "hi", // Bhaktipath opens in Hindi by default
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
