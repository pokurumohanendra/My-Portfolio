// Restrained motion: short fades with a small upward drift.
// Reduced-motion is honoured globally via <MotionConfig reducedMotion="user">.

export const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const viewportOptions = { once: true, margin: "-60px" };
