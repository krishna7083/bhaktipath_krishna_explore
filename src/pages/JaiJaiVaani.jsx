import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
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
      <motion.div
        className="page-head"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>{t("bhajans.pageTitle")}</h1>
        <p>{t("bhajans.pageSubtitle")}</p>
        <span className="dev-note">{t("bhajans.addNote")}</span>
      </motion.div>

      <motion.div
        className="bhajan-toolbar"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
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
      </motion.div>

      {filtered.length === 0 ? (
        <p className="bhajan-empty">{t("bhajans.noResults")}</p>
      ) : (
        <motion.div
          className="bhajan-list"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {filtered.map((b) => (
            <BhajanCard
              key={b.id}
              bhajan={b}
              onPlay={setNowPlaying}
              isPlaying={nowPlaying?.id === b.id}
            />
          ))}
        </motion.div>
      )}

      <BhajanPlayerModal bhajan={nowPlaying} onClose={() => setNowPlaying(null)} />
    </div>
  );
}
