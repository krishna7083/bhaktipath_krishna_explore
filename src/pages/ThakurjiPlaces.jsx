import { useTranslation } from "react-i18next";
import { PlaceCard, ComingSoonCard } from "../components/PlaceCard";
import { places, morePlacesComingSoon } from "../data/places";
import "../components/PlaceCard.css";

export default function ThakurjiPlaces() {
  const { t } = useTranslation();

  return (
    <div className="page container">
      <div className="page-head">
        <h1>{t("places.pageTitle")}</h1>
        <p>{t("places.pageSubtitle")}</p>
        <span className="dev-note">{t("places.addNote")}</span>
      </div>

      <div className="place-grid">
        {places.map((p) => (
          <PlaceCard key={p.id} place={p} />
        ))}
        {morePlacesComingSoon && <ComingSoonCard />}
      </div>
    </div>
  );
}
