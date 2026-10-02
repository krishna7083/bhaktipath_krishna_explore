import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./components/SplashScreen";
import BackgroundMusic from "./components/BackgroundMusic";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import JaiJaiVaani from "./pages/JaiJaiVaani";
import KathaVenues from "./pages/KathaVenues";
import PhotoGallery from "./pages/PhotoGallery";
import ThakurjiPlaces from "./pages/ThakurjiPlaces";

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

      <BackgroundMusic isEntered={entered} />

      {entered && (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jai-jai-vaani" element={<JaiJaiVaani />} />
            <Route path="/katha-venues" element={<KathaVenues />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/thakurji-places" element={<ThakurjiPlaces />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
