import { motion, AnimatePresence } from "framer-motion";
import { LogoMark } from "../shared/Logo";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "var(--bg-dark)" }}
        >
          {/* Ambient glow */}
          <div className="bg-ambient-glow absolute inset-0 pointer-events-none" />

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Spinning ring */}
            <div className="relative w-20 h-20">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid color-mix(in srgb, var(--primary) 15%, transparent)",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border: "2px solid transparent",
                  borderTopColor: "var(--primary)",
                  borderRightColor: "var(--accent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              {/* Logo mark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoMark size={48} />
              </div>
            </div>

            <motion.p
              className="gradient-text text-xl font-bold tracking-wider font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              MOHANENDRA
            </motion.p>

            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--primary)" }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
