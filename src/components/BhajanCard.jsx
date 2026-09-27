import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PlayIcon } from "./Icons";

export default function BhajanCard({ bhajan, onPlay }) {
  const { t } = useTranslation();
  const [showLyrics, setShowLyrics] = useState(false);

  return (
    <div className="bhajan-card">
      <div className="bhajan-top">
        <div className="bhajan-title-wrap">
          <span className="bhajan-tag">{bhajan.category}</span>
          <h3 className="bhajan-title">{bhajan.title}</h3>
        </div>

        <div className="bhajan-actions">
          <button onClick={() => setShowLyrics((s) => !s)}>
            {showLyrics ? t("bhajans.hideLyrics") : t("bhajans.viewLyrics")}
          </button>
          <button className="play" onClick={() => onPlay(bhajan)}>
            <PlayIcon width={15} height={15} />
            {t("bhajans.playOnYoutube")}
          </button>
        </div>
      </div>

      {showLyrics && <div className="bhajan-lyrics">{bhajan.lyrics}</div>}
    </div>
  );
}
