// NAVIGATION — section order for the home page.
// Used by the navbar, command palette and footer so they never drift.

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "journey", label: "Journey" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
];

/** "03" style number for a section, derived from its position. */
export const sectionNumber = (id) =>
  String(sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");
