import { useTranslation } from "react-i18next";
import { LotusIcon } from "./Icons";

export default function GalleryGrid({ photos }) {
  const { t } = useTranslation();

  return (
    <div className="gallery-grid">
      {photos.map((photo) => (
        <div className="gallery-tile" key={photo.id}>
          {photo.src ? (
            <img src={photo.src} alt={photo.caption} loading="lazy" />
          ) : (
            <div className="gallery-tile-placeholder">
              <LotusIcon width={26} height={26} />
              <span>{t("gallery.emptySlot")}</span>
            </div>
          )}
          <span className="gallery-caption">{photo.caption}</span>
        </div>
      ))}
    </div>
  );
}
