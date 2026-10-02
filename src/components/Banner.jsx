import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Banner.css";

// ─────────────────────────────────────────────────────────────────────────
// JAGANNATH PRABHU BANNER
// High-end animated showcase with divine glowing light beam sweeps, 
// glassmorphism caption badge, parallax image zoom, and glowing aura.
// ─────────────────────────────────────────────────────────────────────────

export default function Banner() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="banner-card"
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated Glowing Border Overlay */}
      <div className="banner-glowing-border" />

      {/* Image Container with Parallax Zoom */}
      <div className="banner-img-wrap">
        <img
          src="/images/banner/jagannath.jpg"
          alt="Jagannath Prabhu"
          loading="lazy"
        />
        {/* Divine Golden Light Beam Sweep */}
        <div className="banner-light-sweep" />
        
        {/* Vignette & Soft Gradient Overlay */}
        <div className="banner-vignette" />
      </div>

      {/* Animated Banner Caption Badge */}
      <motion.div
        className="banner-caption-container"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="banner-caption-glass">
          <span className="banner-caption-icon">✦</span>
          <span className="banner-caption-text">{t("home.bannerCaption")}</span>
          <span className="banner-caption-icon">✦</span>
        </div>
      </motion.div>

      {/* Ambient Pulsing Aura Glow */}
      <div className="banner-aura-glow" />
    </motion.div>
  );
}
