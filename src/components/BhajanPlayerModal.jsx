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
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="player-header">
              <h4>{bhajan.title}</h4>
              <button onClick={onClose} aria-label="Close">
                <CloseIcon width={20} height={20} />
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
