import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Banner from "../components/Banner";
import CategoryCard from "../components/CategoryCard";
import GurudevShowcase from "../components/GurudevShowcase";
import { categories } from "../data/categories";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="page container">
      {/* Pujya Gurudev Ji Showcase placed at the top */}
      <GurudevShowcase />

      <section className="hero">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-eyebrow">
              <span style={{ color: "#ffd700" }}>✦</span>
              {t("home.heroEyebrow")}
              <span style={{ color: "#ffd700" }}>✦</span>
            </span>
          </motion.div>

          <div className="hero-title-wrapper">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("home.heroTitle")}
            </motion.h1>
            <div className="hero-title-glow" />
          </div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("home.heroSubtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#categories" className="hero-cta">
              <span>{t("home.heroCta")}</span>
              <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>→</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.25 }}
        >
          <Banner />
        </motion.div>
      </section>

      <section className="home-categories" id="categories">
        <h2>{t("home.categoriesTitle")}</h2>
        <div className="cat-grid">
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>
    </div>
  );
}
