import { Outlet } from "react-router-dom";
import { PaletteProvider } from "../../context/PaletteContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import CommandPalette from "../shared/CommandPalette";

/** Layout: the shell shared by every route (skip link, nav, footer, palette). */
export default function Layout() {
  return (
    <PaletteProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </PaletteProvider>
  );
}
