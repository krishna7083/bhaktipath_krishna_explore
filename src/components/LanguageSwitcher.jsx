import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

// TODO(ADD-LANGUAGE): add a new { code, label } entry here once you've
// created its locale file in src/i18n/locales/ and registered it in
// src/i18n/i18n.js. See EDITING_GUIDE.md → "Adding a new language".
const LANGUAGES = [
  { code: "hi", label: "हिंदी" },
  { code: "en", label: "English" },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  function handleChange(e) {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("bhaktipath-lang", lang);
    document.documentElement.lang = lang;
  }

  return (
    <div className="lang-switch">
      <select
        aria-label={t("language.label")}
        value={i18n.language}
        onChange={handleChange}
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}
