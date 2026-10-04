import { useContext } from "react";
import { PaletteContext } from "../context/contexts";

export const usePalette = () => {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used inside its provider");
  return ctx;
};
