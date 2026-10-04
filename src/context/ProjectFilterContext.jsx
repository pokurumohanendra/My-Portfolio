import { useMemo, useState } from "react";
import { ProjectFilterContext } from "./contexts";

/** Shared project filter state so other sections (e.g. Skills) can drive the Projects list. */
export function ProjectFilterProvider({ children }) {
  const [type, setType] = useState("All");
  const [query, setQuery] = useState("");
  const value = useMemo(() => ({ type, setType, query, setQuery }), [type, query]);
  return <ProjectFilterContext.Provider value={value}>{children}</ProjectFilterContext.Provider>;
}
