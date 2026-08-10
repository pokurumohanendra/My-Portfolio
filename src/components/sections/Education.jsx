import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaAward } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import Badge from "../ui/Badge";
import { education } from "../../data/education";
import { fadeInUp, staggerContainer, viewportOptions } from "../../animations/variants";

export default function Education() {
  return (
    <section
      id="education"
      className="section-padding"
      style={{ background: "var(--bg-dark-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="The academic foundation behind the engineering."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="max-w-3xl mx-auto space-y-6"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="glass-card p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                >
                  <FaGraduationCap size={20} style={{ color: "var(--primary-light)" }} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                      {item.degree}
                    </h3>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-full flex-shrink-0"
                      style={{
                        background: "color-mix(in srgb, var(--primary) 12%, transparent)",
                        color: "var(--primary-light)",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <p className="font-semibold mb-1" style={{ color: "var(--text-secondary)" }}>
                    {item.institution}
                  </p>

                  <div
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mb-4"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.location && (
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={12} /> {item.location}
                      </span>
                    )}
                    {item.grade && (
                      <span className="flex items-center gap-1.5">
                        <FaAward size={12} /> {item.grade}
                      </span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>
                  )}

                  {item.achievements?.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {item.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span style={{ color: "var(--primary-light)" }}>•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.courses?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.courses.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
