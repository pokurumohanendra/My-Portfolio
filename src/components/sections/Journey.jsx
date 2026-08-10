import { motion } from "framer-motion";
import {
  FaGraduationCap, FaLightbulb, FaCode, FaReact,
  FaServer, FaRocket, FaBriefcase,
} from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { timeline } from "../../data/timeline";
import { viewportOptions } from "../../animations/variants";

const iconMap = {
  FaGraduationCap,
  FaLightbulb,
  FaCode,
  FaReact,
  FaServer,
  FaRocket,
  FaBriefcase,
};

const typeColors = {
  education: { bg: "rgba(99,102,241,0.12)", color: "var(--primary-light)", dot: "#6366f1" },
  milestone: { bg: "rgba(251,191,36,0.12)", color: "#fbbf24", dot: "#fbbf24" },
  learning: { bg: "rgba(34,211,238,0.12)", color: "var(--accent)", dot: "#22d3ee" },
  current: { bg: "rgba(34,197,94,0.12)", color: "#4ade80", dot: "#22c55e" },
  work: { bg: "rgba(244,63,94,0.12)", color: "#f43f5e", dot: "#f43f5e" },
};

export default function Journey() {
  return (
    <section
      id="journey"
      className="section-padding"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="My Learning Journey"
          subtitle="An honest timeline of how I went from ECE to full-stack development."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "var(--border-dark)" }}
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] || FaCode;
              const colors = typeColors[item.type] || typeColors.learning;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOptions}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}
                  <div
                    className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border"
                    style={{
                      background: colors.bg,
                      borderColor: `${colors.dot}30`,
                      color: colors.color,
                    }}
                  >
                    <Icon size={18} />
                    {/* Dot on line */}
                    <div
                      className="absolute -left-[1.625rem] w-2.5 h-2.5 rounded-full border-2"
                      style={{
                        background: colors.dot,
                        borderColor: "var(--bg-dark)",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="glass-card p-5 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      <span
                        className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ background: colors.bg, color: colors.color }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                    {item.tags?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-full"
                            style={{
                              background: "rgba(15,23,42,0.05)",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border-dark)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
