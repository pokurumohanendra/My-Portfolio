import { motion } from "framer-motion";
import { fadeInUp, viewportOptions } from "../../animations/variants";

/** Reveal — fades its children in once as they scroll into view. */
export default function Reveal({ children, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className={className}
    >
      {children}
    </Tag>
  );
}
