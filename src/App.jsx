import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import JaiJaiVaani from "./pages/JaiJaiVaani";
import KathaVenues from "./pages/KathaVenues";
import PhotoGallery from "./pages/PhotoGallery";
import ThakurjiPlaces from "./pages/ThakurjiPlaces";

// The splash chant shows once per browser session (per tab). Close the tab
// and open the site again, and it greets you with the chant once more.
// To make it show on every single visit, delete the sessionStorage lines
// below. See EDITING_GUIDE.md → "Changing when the splash screen appears".
const SPLASH_KEY = "bhaktipath-splash-seen";

export default function App() {
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem(SPLASH_KEY) === "true"
  );

  function handleEnter() {
    sessionStorage.setItem(SPLASH_KEY, "true");
    setEntered(true);
  }

  return (
    <>
      <AnimatePresence>
        {!entered && <SplashScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {entered && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jai-jai-vaani" element={<JaiJaiVaani />} />
            <Route path="/katha-venues" element={<KathaVenues />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/thakurji-places" element={<ThakurjiPlaces />} />
            {/* TODO(ADD-CATEGORY): add a matching <Route> here for any
                new category you add in src/data/categories.js */}
          </Route>
        </Routes>
      )}
    </>
  );
}
