import { createContext } from "react";

// Context objects live here; providers are in the sibling files and the
// consuming hooks are in src/hooks (keeps every file fast-refresh friendly).
export const ThemeContext = createContext(null);
export const PaletteContext = createContext(null);
export const ProjectFilterContext = createContext(null);
