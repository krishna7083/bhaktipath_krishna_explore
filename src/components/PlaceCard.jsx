import { useTranslation } from "react-i18next";
import { MapPinIcon } from "./Icons";
import { googleMapsUrl } from "../utils/maps";

export function PlaceCard({ place }) {
  const { t } = useTranslation();

  return (
    <div className="place-card">
      <div className="place-photo">
        {place.image ? (
          <img src={place.image} alt={place.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <span>{place.name}</span>
        )}
      </div>
      <div className="place-body">
        <h3 className="place-name">{place.name}</h3>
        <p className="place-address">{place.address}</p>
        <a
          className="map-link"
          href={googleMapsUrl(place.mapQuery)}
          target="_blank"
          rel="noreferrer"
        >
          <MapPinIcon width={16} height={16} />
          {t("places.viewOnMap")}
        </a>
      </div>
    </div>
  );
}

export function ComingSoonCard() {
  const { t } = useTranslation();
  return (
    <div className="place-card coming-soon">
      <div>
        <h3>{t("places.comingSoonTitle")}</h3>
        <p>{t("places.comingSoonDesc")}</p>
      </div>
    </div>
  );
}
