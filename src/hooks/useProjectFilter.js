import { useContext } from "react";
import { ProjectFilterContext } from "../context/contexts";

export const useProjectFilter = () => {
  const ctx = useContext(ProjectFilterContext);
  if (!ctx) throw new Error("useProjectFilter must be used inside its provider");
  return ctx;
};
