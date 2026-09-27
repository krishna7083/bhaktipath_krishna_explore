import { useTranslation } from "react-i18next";
import { socialLinks } from "../data/social";
import { InstagramIcon } from "./Icons";
import "./Footer.css";

const ICONS = { instagram: InstagramIcon };

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-tagline">{t("footer.tagline")}</p>
          <p className="footer-sub">{t("footer.editedBy")}</p>
        </div>

        <div className="footer-social">
          {socialLinks.map((s) => {
            const Icon = ICONS[s.icon] ?? InstagramIcon;
            return (
              <a key={s.id} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}>
                <Icon width={18} height={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
