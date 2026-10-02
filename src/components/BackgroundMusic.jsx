import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./BackgroundMusic.css";

// ─────────────────────────────────────────────────────────────────────────
// DEVOTIONAL BACKGROUND MUSIC PLAYER
// Plays background devotional audio ONLY when the user is on the Home page ("/").
// Automatically pauses when navigating away to "Jai Jai Vaani" or other pages.
// ─────────────────────────────────────────────────────────────────────────

export default function BackgroundMusic({ isEntered }) {
  const location = useLocation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isHomePage = location.pathname === "/";

  // Handle play/pause depending on whether user is on Home page and entered
  useEffect(() => {
    if (!audioRef.current) return;

    if (isEntered && isHomePage) {
      audioRef.current.volume = 0.45;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log("Autoplay waiting for gesture:", err);
            setIsPlaying(false);
          });
      }
    } else {
      // Automatically pause music when navigating away from Home page
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isEntered, isHomePage]);

  const togglePlay = () => {
    if (!audioRef.current || !isHomePage) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-music-container">
      {/* HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/bg_music.mp3"
        loop
        preload="auto"
      />

      {/* Floating Music Control Widget (Only visible on Home page) */}
      <AnimatePresence>
        {isEntered && isHomePage && (
          <motion.div
            className={`bg-music-widget ${isPlaying ? "playing" : "paused"}`}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={togglePlay}
          >
            {/* Ambient Pulse Glow */}
            <div className="bg-music-glow" />

            {/* Icon / Equalizer */}
            <div className="bg-music-icon-wrap">
              {isPlaying && !isMuted ? (
                <div className="bg-music-eq">
                  <span className="eq-bar bar1" />
                  <span className="eq-bar bar2" />
                  <span className="eq-bar bar3" />
                </div>
              ) : (
                <span className="bg-music-symbol">🎵</span>
              )}
            </div>

            {/* Play/Pause Text Label */}
            <div className="bg-music-info">
              <span className="bg-music-title">
                {isPlaying ? "Background Music" : "Play Music"}
              </span>
              <span className="bg-music-status">
                {isPlaying ? (isMuted ? "Muted" : "Playing") : "Paused"}
              </span>
            </div>

            {/* Quick Mute Toggle Button */}
            <button
              className="bg-music-mute-btn"
              onClick={toggleMute}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? "🔇" : "🔊"}
            </button>

            {/* Tooltip on Hover */}
            {showTooltip && (
              <motion.div
                className="bg-music-tooltip"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {isPlaying ? "Click to Pause" : "Click to Play Devotional Music"}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
