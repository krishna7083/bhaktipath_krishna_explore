import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import BhajanCard from "../components/BhajanCard";
import BhajanPlayerModal from "../components/BhajanPlayerModal";
import { bhajans } from "../data/bhajans";
import "../components/BhajanCard.css";
import "./JaiJaiVaani.css";

export default function JaiJaiVaani() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [nowPlaying, setNowPlaying] = useState(null);

  const categoryOptions = useMemo(
    () => Array.from(new Set(bhajans.map((b) => b.category))),
    []
  );

  const filtered = bhajans.filter((b) => {
    const matchesQuery = b.title.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "all" || b.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="page container">
      <div className="page-head">
        <h1>{t("bhajans.pageTitle")}</h1>
        <p>{t("bhajans.pageSubtitle")}</p>
        <span className="dev-note">{t("bhajans.addNote")}</span>
      </div>

      <div className="bhajan-toolbar">
        <input
          type="text"
          placeholder={t("bhajans.searchPlaceholder")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">{t("bhajans.allCategories")}</option>
          {categoryOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="bhajan-empty">{t("bhajans.noResults")}</p>
      ) : (
        <div className="bhajan-list">
          {filtered.map((b) => (
            <BhajanCard key={b.id} bhajan={b} onPlay={setNowPlaying} />
          ))}
        </div>
      )}

      <BhajanPlayerModal bhajan={nowPlaying} onClose={() => setNowPlaying(null)} />
    </div>
  );
}
