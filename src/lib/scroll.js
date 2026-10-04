export const scrollToSection = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
