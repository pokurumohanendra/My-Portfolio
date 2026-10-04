import { useMemo, useState } from "react";
import { PaletteContext } from "./contexts";

export function PaletteProvider({ children }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <PaletteContext.Provider value={value}>{children}</PaletteContext.Provider>;
}
