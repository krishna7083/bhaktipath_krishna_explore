import { useTranslation } from "react-i18next";
import { MapPinIcon } from "./Icons";
import { googleMapsUrl } from "../utils/maps";

export default function KathaCard({ katha }) {
  const { t } = useTranslation();

  return (
    <div className="katha-item">
      <div className="katha-date">{katha.date}</div>
      <div className="katha-card">
        <div>
          <h3 className="katha-title">{katha.title}</h3>
          <p className="katha-venue">{katha.venue}</p>
          <p className="katha-venue">{katha.address}</p>
        </div>
        <a
          className="map-link"
          href={googleMapsUrl(katha.mapQuery)}
          target="_blank"
          rel="noreferrer"
        >
          <MapPinIcon width={16} height={16} />
          {t("kathas.viewOnMap")}
        </a>
      </div>
    </div>
  );
}
