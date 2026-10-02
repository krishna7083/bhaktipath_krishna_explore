import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon } from "./Icons";

// Equalizer Visualizer Component
function SoundEqualizer() {
  return (
    <div className="sound-equalizer">
      <span className="eq-bar bar1" />
      <span className="eq-bar bar2" />
      <span className="eq-bar bar3" />
      <span className="eq-bar bar4" />
    </div>
  );
}

// Vinyl Disc Component
function SpinningVinyl() {
  return (
    <div className="vinyl-disc-container">
      <div className="vinyl-disc">
        <div className="vinyl-groove" />
        <div className="vinyl-center-label">
          <span className="vinyl-hole" />
        </div>
      </div>
    </div>
  );
}

export default function BhajanCard({ bhajan, onPlay, isPlaying }) {
  const { t } = useTranslation();
  const [showLyrics, setShowLyrics] = useState(false);

  return (
    <motion.div
      className={`bhajan-card ${isPlaying ? "is-playing" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="bhajan-top">
        <div className="bhajan-title-wrap">
          <div className="bhajan-meta-header">
            <span className="bhajan-tag">{bhajan.category}</span>
            {isPlaying && <SoundEqualizer />}
          </div>
          <div className="bhajan-title-row">
            <SpinningVinyl />
            <h3 className="bhajan-title">{bhajan.title}</h3>
          </div>
        </div>

        <div className="bhajan-actions">
          <button
            className={`lyrics-btn ${showLyrics ? "active" : ""}`}
            onClick={() => setShowLyrics((s) => !s)}
          >
            {showLyrics ? t("bhajans.hideLyrics") : t("bhajans.viewLyrics")}
          </button>

          <button
            className={`play ${isPlaying ? "now-playing-btn" : ""}`}
            onClick={() => onPlay(bhajan)}
          >
            {isPlaying ? (
              <>
                <SoundEqualizer />
                <span>Playing</span>
              </>
            ) : (
              <>
                <PlayIcon width={15} height={15} />
                <span>{t("bhajans.playOnYoutube")}</span>
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showLyrics && (
          <motion.div
            className="bhajan-lyrics"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="lyrics-content">{bhajan.lyrics}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
