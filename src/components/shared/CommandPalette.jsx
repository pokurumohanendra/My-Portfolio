import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { usePalette } from "../../hooks/usePalette";
import { useTheme } from "../../hooks/useTheme";
import { useSectionNav } from "../../hooks/useSectionNav";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { sections } from "../../data/navigation";
import { projects } from "../../data/projects";
import { posts } from "../../data/posts";
import { socialLinks } from "../../data/socialLinks";
import { siteConfig } from "../../config/site.config";

/**
 * CommandPalette — Ctrl/⌘ + K quick navigation.
 * Keyboard: ↑ ↓ to move, Enter to run, Esc to close.
 */
export default function CommandPalette() {
  const { open, setOpen } = usePalette();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const { goToSection } = useSectionNav();
  const { isDark, toggleTheme } = useTheme();
  const { copied, copy } = useCopyToClipboard(siteConfig.email, 1200);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, [setOpen]);

  // Global shortcut: Ctrl/⌘ + K toggles the palette.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const items = useMemo(() => {
    const run = (fn) => () => {
      close();
      fn();
    };
    const all = [
      ...sections.map((s) => ({
        group: "Go to section",
        label: s.label,
        hint: "Section",
        run: run(() => goToSection(s.id)),
      })),
      ...projects.map((p) => ({
        group: "Projects",
        label: p.title,
        hint: p.type,
        keywords: p.techStack.join(" "),
        run: run(() => navigate(`/projects/${p.id}`)),
      })),
      ...posts.map((p) => ({
        group: "Writing",
        label: p.title,
        hint: "Post",
        keywords: p.tags.join(" "),
        run: run(() => navigate(`/writing/${p.slug}`)),
      })),
      {
        group: "Actions",
        label: isDark ? "Switch to light theme" : "Switch to dark theme",
        hint: "Theme",
        run: run(toggleTheme),
      },
      {
        group: "Actions",
        label: "Open résumé (PDF)",
        hint: "Résumé",
        run: run(() => window.open(siteConfig.resumeUrl, "_blank", "noopener")),
      },
      {
        group: "Actions",
        label: copied ? "Email copied" : "Copy email address",
        hint: siteConfig.email,
        // keep the palette open briefly so the "copied" state is visible
        run: async () => {
          await copy();
          setTimeout(close, 700);
        },
      },
      ...socialLinks.map((l) => ({
        group: "Actions",
        label: `Open ${l.label}`,
        hint: "External",
        run: run(() => window.open(l.url, "_blank", "noopener")),
      })),
    ];
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((i) => `${i.label} ${i.keywords || ""}`.toLowerCase().includes(q));
  }, [query, isDark, copied, copy, close, goToSection, navigate, toggleTheme]);

  // Keep the highlighted row in range and in view.
  const index = Math.min(active, Math.max(items.length - 1, 0));
  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
  }, [index, items]);

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((index + 1) % Math.max(items.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((index - 1 + items.length) % Math.max(items.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      items[index]?.run();
    }
  };

  if (!open) return null;

  let lastGroup = "";

  return (
    <div className="palette-backdrop" onMouseDown={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
        className="card mx-auto mt-[12vh] w-[min(36rem,calc(100vw-2rem))] overflow-hidden"
      >
        <div className="flex items-center gap-3 px-4 border-b border-line">
          <HiOutlineSearch size={18} className="text-ink-3 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={items[index] ? `palette-opt-${index}` : undefined}
            aria-label="Search sections, projects and actions"
            placeholder="Search sections, projects, actions…"
            className="w-full bg-transparent py-4 text-ink placeholder:text-ink-3 outline-none"
          />
          <span className="kbd shrink-0">Esc</span>
        </div>

        <ul
          id="palette-list"
          ref={listRef}
          role="listbox"
          className="max-h-[50vh] overflow-y-auto py-2"
        >
          {items.length === 0 && (
            <li className="px-4 py-8 text-center text-ink-3 text-sm">No results for "{query}"</li>
          )}
          {items.map((item, i) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            return (
              <li key={`${item.group}-${item.label}`} role="presentation">
                {showGroup && <p className="eyebrow px-4 pt-3 pb-1">{item.group}</p>}
                <div
                  id={`palette-opt-${i}`}
                  role="option"
                  aria-selected={i === index}
                  onMouseMove={() => setActive(i)}
                  onClick={item.run}
                  className="palette-item flex items-center justify-between gap-4 px-4 py-2.5 cursor-pointer text-ink"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-ink-3 truncate">{item.hint}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-line text-xs text-ink-3">
          <span><span className="kbd">↑</span> <span className="kbd">↓</span> navigate</span>
          <span><span className="kbd">Enter</span> select</span>
        </div>
      </div>
    </div>
  );
}
