import { useEffect, useState } from "react";
import { HiMenuAlt3, HiX, HiOutlineSearch } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useSectionNav } from "../../hooks/useSectionNav";
import { useTheme } from "../../hooks/useTheme";
import { usePalette } from "../../hooks/usePalette";
import { sections } from "../../data/navigation";
import { siteConfig } from "../../config/site.config";
import Button from "../ui/Button";

const sectionIds = sections.map((s) => s.id);
const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const progress = useScrollProgress();
  const { isDark, toggleTheme } = useTheme();
  const { setOpen: openPalette } = usePalette();
  const { onHome, goToSection, goToTop } = useSectionNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const go = (id) => {
    goToSection(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper border-b transition-[border-color] duration-200 ${
        scrolled || menuOpen ? "border-line" : "border-transparent"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 h-0.5 bg-accent"
        style={{ width: `${progress}%` }}
      />

      <div className="wrap">
        <nav className="flex items-center justify-between h-16" aria-label="Primary">
          <button
            onClick={goToTop}
            className="font-serif text-base sm:text-lg font-semibold text-ink hover:text-accent transition-colors whitespace-nowrap"
            aria-label={`${siteConfig.displayName}, back to top`}
          >
            {siteConfig.displayName}
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className="nav-link"
                  aria-current={onHome && active === s.id ? "true" : undefined}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => openPalette(true)}
              className="hidden md:inline-flex items-center gap-2 h-9 px-2.5 rounded-lg border border-line text-sm text-ink-3 hover:text-ink hover:border-ink-3 transition-colors"
              aria-label="Open command palette"
            >
              <HiOutlineSearch size={15} aria-hidden="true" />
              <span className="kbd">{isMac ? "⌘" : "Ctrl"} K</span>
            </button>

            <button
              onClick={() => openPalette(true)}
              className="icon-btn md:hidden"
              aria-label="Open command palette"
            >
              <HiOutlineSearch size={18} />
            </button>

            <button
              onClick={toggleTheme}
              className="icon-btn"
              aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </button>

            <Button
              href={siteConfig.resumeUrl}
              target="_blank"
              variant="line"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Résumé
            </Button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="icon-btn lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-line bg-paper">
          <ul className="wrap py-3">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={`w-full text-left py-3 text-lg border-b border-line ${
                    onHome && active === s.id ? "text-accent" : "text-ink"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
            <li className="pt-4">
              <Button href={siteConfig.resumeUrl} target="_blank" className="w-full">
                Download résumé
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
