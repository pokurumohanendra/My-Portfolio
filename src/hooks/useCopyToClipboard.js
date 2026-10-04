import { useCallback, useEffect, useRef, useState } from "react";

/** Copies `text` and exposes a short-lived `copied` flag for UI feedback. */
export function useCopyToClipboard(text, resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), resetMs);
      return true;
    } catch {
      return false;
    }
  }, [text, resetMs]);

  return { copied, copy };
}
