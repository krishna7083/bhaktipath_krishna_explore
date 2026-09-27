import { useTranslation } from "react-i18next";
import "./Banner.css";

// ─────────────────────────────────────────────────────────────────────────
// TO REPLACE WITH A REAL PHOTO of Jagannath Prabhu:
//   1. Put the image file at public/images/banner/jagannath.jpg
//   2. Uncomment the <img> line below and delete the placeholder <div>.
// Until then this shows a tasteful placeholder so the layout looks right.
// See EDITING_GUIDE.md → "Replacing the home page banner".
// ─────────────────────────────────────────────────────────────────────────
export default function Banner() {
  const { t } = useTranslation();

  return (
    <div className="banner">
      {<img src="/images/banner/jagannath.jpg" alt="Jagannath Prabhu" style={{position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover"}} />}
      <span className="banner-caption">{t("home.bannerCaption")}</span>
    </div>
  );
}
