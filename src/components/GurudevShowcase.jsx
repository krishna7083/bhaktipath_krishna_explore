import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./GurudevShowcase.css";

// ─────────────────────────────────────────────────────────────────────────
// GURUDEV SLIDING IMAGE SHOWCASE
// Automated sliding carousel featuring photos gurudev_1 through gurudev_9.
// Auto-slides left to right every few seconds with pause-on-hover, prev/next
// controls, dot indicators, and full 3D interactive card tilt effects.
// ─────────────────────────────────────────────────────────────────────────

const images = [
  {
    src: "/images/gurudev_1.jpeg",
    alt: "Pujya Gurudev Ji 1",
    captionKey: "home.gurudevCaption1",
  },
  {
    src: "/images/gurudev_2.jpeg",
    alt: "Pujya Gurudev Ji 2",
    captionKey: "home.gurudevCaption2",
  },
  {
    src: "/images/gurudev_3.jpg",
    alt: "Pujya Gurudev Ji 3",
    captionKey: "home.gurudevCaption3",
  },
  {
    src: "/images/gurudev_4.jpg",
    alt: "Pujya Gurudev Ji 4",
    captionKey: "home.gurudevCaption4",
  },
  {
    src: "/images/gurudev_5.jpg",
    alt: "Pujya Gurudev Ji 5",
    captionKey: "home.gurudevCaption5",
  },
  {
    src: "/images/gurudev_9.jpg",
    alt: "Pujya Gurudev Ji 9",
    captionKey: "home.gurudevCaption9",
  },
  {
    src: "/images/girdharlal_1.jpg",
    alt: "Param Pujya Shri Girdharlal Ji",
    captionKey: "home.girdharlalCaption1",
  },
];

function TiltCard({ image, isCurrent }) {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;
    setTilt({ rotateX, rotateY });
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`gurudev-card ${isHovered ? "hovered" : ""} ${isCurrent ? "active-slide" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      <div className="gurudev-card-border" />
      <div className="gurudev-card-inner">
        <img src={image.src} alt={image.alt} loading="lazy" />
        <div
          className="gurudev-card-glare"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,215,0,0.3) 0%, transparent 60%)`,
          }}
        />
        <div className="gurudev-card-overlay">
          <span className="gurudev-caption">{t(image.captionKey)}</span>
        </div>
      </div>
      <div className="gurudev-card-shine" />
    </div>
  );
}

export default function GurudevShowcase() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Update visible slide count based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-sliding interval (2 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Generate visible images array for seamless sliding loop
  const getVisibleImages = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (currentIndex + i) % total;
      items.push({ ...images[idx], originalIndex: idx });
    }
    return items;
  };

  return (
    <section className="gurudev-section">
      <motion.div
        className="gurudev-header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="gurudev-section-badge">✦ {t("home.gurudevBadge")} ✦</span>
        <h2 className="gurudev-section-title">{t("home.gurudevTitle")}</h2>
        <p className="gurudev-section-subtitle">{t("home.gurudevSubtitle")}</p>
      </motion.div>

      {/* Slider Container with Pause-on-Hover */}
      <div
        className="gurudev-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrow Previous */}
        <button
          className="slider-nav-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          ‹
        </button>

        {/* Carousel Track */}
        <div className="gurudev-slider-track">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              className="gurudev-grid-slider"
              style={{
                gridTemplateColumns: `repeat(${visibleCount}, 1fr)`,
              }}
              initial={{ opacity: 0.8, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.8, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {getVisibleImages().map((img, i) => (
                <TiltCard
                  key={`${img.originalIndex}-${i}`}
                  image={img}
                  isCurrent={i === 0}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow Next */}
        <button
          className="slider-nav-btn next-btn"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Slider Controls: Dots & Auto-play Indicator */}
      <div className="slider-controls">
        <div className="slider-dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="slider-pause-toggle"
          onClick={() => setIsPaused((p) => !p)}
        >
          {isPaused ? "▶ Auto-Slide" : "⏸ Pause"}
        </button>
      </div>
    </section>
  );
}
