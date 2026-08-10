import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function BackToTop() {
  const progress = useScrollProgress();
  const visible = progress > 20;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "0 4px 20px color-mix(in srgb, var(--primary) 40%, transparent)",
          }}
          aria-label="Back to top"
        >
          <HiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
