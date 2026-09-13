import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import Badge from "../ui/Badge";
import { experience } from "../../data/experience";
import { fadeInUp, staggerContainer, viewportOptions } from "../../animations/variants";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="Experience"
          subtitle="Production applications I've helped build and ship."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="max-w-3xl mx-auto space-y-6"
        >
          {experience.map((item) => (
            <motion.div key={item.id} variants={fadeInUp} className="glass-card p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                >
                  <FaBriefcase size={20} style={{ color: "var(--primary-light)" }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                      {item.role}
                    </h3>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                        color: "var(--primary-light)",
                      }}
                    >
                      {item.duration}
                    </span>
                  </div>

                  <p className="font-semibold mb-1" style={{ color: "var(--text-secondary)" }}>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="link-hover-accent inline-flex items-center gap-1.5"
                        style={{ "--link-base": "var(--text-secondary)" }}
                      >
                        {item.company} <FaExternalLinkAlt size={10} />
                      </a>
                    ) : (
                      item.company
                    )}
                  </p>

                  {item.location && (
                    <div
                      className="flex items-center gap-1.5 text-sm mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <FaMapMarkerAlt size={12} /> {item.location}
                    </div>
                  )}

                  {item.summary && (
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.summary}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-5 pl-0 sm:pl-16">
                {item.projects.map((proj) => (
                  <div
                    key={proj.name}
                    className="rounded-xl p-5 border"
                    style={{
                      background: "var(--bg-dark-card)",
                      borderColor: "var(--border-dark)",
                    }}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-3">
                      <h4 className="font-semibold" style={{ color: "var(--text-primary)" }}>
                        {proj.name}
                      </h4>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {proj.tag}
                      </span>
                    </div>

                    <ul className="space-y-1.5 mb-4">
                      {proj.points.map((point) => (
                        <li
                          key={point}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          <span style={{ color: "var(--primary-light)" }}>•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {proj.stack.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
