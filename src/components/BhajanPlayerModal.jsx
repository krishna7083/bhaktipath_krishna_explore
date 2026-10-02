import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { CloseIcon } from "./Icons";
import { getYoutubeId } from "../utils/youtube";

export default function BhajanPlayerModal({ bhajan, onClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {bhajan && (
        <motion.div
          className="player-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="player-box"
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Equalizer & Spinning Vinyl Disc */}
            <div className="player-header">
              <div className="player-title-box">
                <div className="modal-vinyl-disc spinning">
                  <div className="vinyl-hole" />
                </div>
                <div>
                  <h4>{bhajan.title}</h4>
                  <div className="modal-playing-badge">
                    <span className="eq-bar bar1" />
                    <span className="eq-bar bar2" />
                    <span className="eq-bar bar3" />
                    <span className="eq-bar bar4" />
                    <span>Now Playing</span>
                  </div>
                </div>
              </div>
              <button onClick={onClose} aria-label="Close">
                <CloseIcon width={22} height={22} />
              </button>
            </div>

            {(() => {
              const id = getYoutubeId(bhajan.youtubeUrl);
              if (!id) {
                return <p className="player-empty">{t("bhajans.noVideoYet")}</p>;
              }
              return (
                <div className="player-frame-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title={bhajan.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
