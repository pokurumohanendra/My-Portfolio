import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection, scrollToTop } from "../lib/scroll";

/**
 * Navigation helpers that work from any page: on the home page they scroll,
 * elsewhere they route back to "/#section" (Home scrolls to the hash).
 */
export function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onHome = pathname === "/";

  const goToSection = useCallback(
    (id) => (onHome ? scrollToSection(id) : navigate(`/#${id}`)),
    [onHome, navigate],
  );

  const goToTop = useCallback(
    () => (onHome ? scrollToTop() : navigate("/")),
    [onHome, navigate],
  );

  return { onHome, goToSection, goToTop };
}
