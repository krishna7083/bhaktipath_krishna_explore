import { useTranslation } from "react-i18next";
import KathaCard from "../components/KathaCard";
import { kathas } from "../data/kathas";
import "../components/KathaCard.css";

export default function KathaVenues() {
  const { t } = useTranslation();

  return (
    <div className="page container">
      <div className="page-head">
        <h1>{t("kathas.pageTitle")}</h1>
        <p>{t("kathas.pageSubtitle")}</p>
        <span className="dev-note">{t("kathas.addNote")}</span>
      </div>

      <div className="katha-timeline">
        {kathas.map((k) => (
          <KathaCard key={k.id} katha={k} />
        ))}
      </div>
    </div>
  );
}
