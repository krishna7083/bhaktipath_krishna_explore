import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { MenuIcon, CloseIcon } from "./Icons";
import "./Navbar.css";

// Nav links are generated from categories.js, so a new home page category
// automatically gets a nav link too. Nothing to edit here for that.
import { categories } from "../data/categories";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          {t("app.title")}
        </NavLink>

        <nav className={`navbar-links${open ? " open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            {t("nav.home")}
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c.id} to={c.path} onClick={() => setOpen(false)}>
              {t(c.titleKey)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          <LanguageSwitcher />
          <button
            className="navbar-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <CloseIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
