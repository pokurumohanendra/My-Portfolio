import { motion } from "framer-motion";

/**
 * Button — Reusable button with primary / outline / ghost variants.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon,
  download,
  target,
  rel,
  type = "button",
  disabled = false,
}) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm transition-all duration-200 focus-visible:outline-primary cursor-pointer select-none";

  const variants = {
    primary:
      "text-white border border-transparent",
    outline:
      "border text-indigo-600 hover:bg-indigo-500/10",
    ghost:
      "text-indigo-600 hover:text-slate-900 hover:bg-slate-900/5",
  };

  const styles = {
    primary: {
      background: "linear-gradient(135deg, #6366f1, #22d3ee)",
      boxShadow: "0 4px 20px rgba(99,102,241,0.3)",
    },
    outline: {
      borderColor: "rgba(99,102,241,0.5)",
    },
    ghost: {},
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Tag
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
        type={Tag === "button" ? type : undefined}
        disabled={disabled}
        className={`${base} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        style={styles[variant]}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </Tag>
    </motion.div>
  );
}
