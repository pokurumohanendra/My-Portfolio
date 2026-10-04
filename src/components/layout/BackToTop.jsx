import { HiArrowUp } from "react-icons/hi2";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function BackToTop() {
  const visible = useScrollProgress() > 20;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-md flex items-center justify-center border border-line bg-surface text-ink-2 hover:text-ink hover:border-ink-3 transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <HiArrowUp size={18} />
    </button>
  );
}
