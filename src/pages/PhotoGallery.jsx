import { useState } from "react";
import { useTranslation } from "react-i18next";
import GalleryGrid from "../components/GalleryGrid";
import { gallerySections } from "../data/gallery";
import "../components/GalleryGrid.css";

export default function PhotoGallery() {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(gallerySections[0]?.id);

  const active = gallerySections.find((s) => s.id === activeId) ?? gallerySections[0];

  return (
    <div className="page container">
      <div className="page-head">
        <h1>{t("gallery.pageTitle")}</h1>
        <p>{t("gallery.pageSubtitle")}</p>
        <span className="dev-note">{t("gallery.addNote")}</span>
      </div>

      <div className="gallery-tabs">
        {gallerySections.map((s) => (
          <button
            key={s.id}
            className={s.id === activeId ? "active" : ""}
            onClick={() => setActiveId(s.id)}
          >
            {t(s.titleKey)}
          </button>
        ))}
      </div>

      {active && <GalleryGrid photos={active.photos} />}
    </div>
  );
}
