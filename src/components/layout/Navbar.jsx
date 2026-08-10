import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useTheme } from "../../context/ThemeContext";
import { siteConfig } from "../../config/site.config";
import { LogoMark } from "../shared/Logo";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));
  const progress = useScrollProgress();
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${progress}%`,
          height: "3px",
          background: "var(--gradient-primary)",
          zIndex: 9998,
          transition: "width 0.1s linear",
        }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
        style={scrolled ? { borderBottom: "1px solid var(--border-dark)" } : {}}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <LogoMark size={34} />
              <span className="hidden sm:inline font-mono text-lg font-bold gradient-text">
                MOHANENDRA
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === link.id ? "active" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="icon-btn w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
              </button>

              {/* Resume */}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
              >
                Resume
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="icon-btn md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-all"
                aria-label="Open menu"
              >
                {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 md:hidden glass"
            style={{ paddingTop: "4rem" }}
          >
            <div className="container-custom py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`nav-link text-left text-xl font-semibold py-4 px-4 rounded-xl transition-all duration-200 ${
                    activeSection === link.id ? "gradient-text active" : ""
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-4 text-center text-white font-bold py-4 px-4 rounded-xl"
                style={{ background: "var(--gradient-primary)" }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
