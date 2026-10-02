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
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="hero-eyebrow">{t("home.heroEyebrow")}</span>
          <h1 className="hero-title">{t("home.heroTitle")}</h1>
          <p className="hero-subtitle">{t("home.heroSubtitle")}</p>
          <a href="#categories" className="btn btn-primary hero-cta">
            {t("home.heroCta")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
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
