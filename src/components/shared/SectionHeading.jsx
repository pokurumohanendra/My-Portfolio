import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "../../animations/variants";

/**
 * SectionHeading — Consistent section title with gradient accent line.
 * Props: title (string), subtitle (string, optional), centered (bool)
 */
export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      <div
        className={`section-underline mt-3 ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className="mt-4 text-lg max-w-2xl leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            margin: centered ? "1rem auto 0" : "1rem 0 0",
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
