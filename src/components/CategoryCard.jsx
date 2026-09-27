import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ConchIcon, DiyaIcon, LotusIcon, FootprintsIcon } from "./Icons";
import "./CategoryCard.css";

const ICONS = { conch: ConchIcon, diya: DiyaIcon, lotus: LotusIcon, footprints: FootprintsIcon };
const ACCENTS = {
  saffron: "var(--marigold)",
  maroon: "var(--sindoor)",
  teal: "var(--peacock)",
  gold: "var(--gold)",
};

export default function CategoryCard({ category }) {
  const { t } = useTranslation();
  const Icon = ICONS[category.icon] ?? ConchIcon;

  return (
    <Link
      to={category.path}
      className="cat-card"
      style={{ "--card-accent": ACCENTS[category.accent] }}
    >
      <div className="cat-icon">
        <Icon width={26} height={26} />
      </div>
      <h3 className="cat-title">{t(category.titleKey)}</h3>
      <p className="cat-desc">{t(category.descKey)}</p>
      <span className="cat-glow" aria-hidden="true" />
    </Link>
  );
}
