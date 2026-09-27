import { Outlet } from "react-router-dom";
import Watermark from "./Watermark";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Watermark />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
