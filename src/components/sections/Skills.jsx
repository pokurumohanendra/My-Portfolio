import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython,
  FaGit, FaGithub, FaDocker,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress,
  SiSupabase, SiVite, SiSharp, SiDotnet, SiTypescript,
  SiNextdotjs, SiPostgresql, SiReactquery,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import SectionHeading from "../shared/SectionHeading";
import { skillCategories, learningNow } from "../../data/skills";
import { viewportOptions } from "../../animations/variants";

// Icon map — add new icons here as needed
const iconMap = {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython,
  FaGit, FaGithub, FaDocker,
  SiJavascript, SiTailwindcss, SiMongodb, SiExpress,
  SiSupabase, SiVite, SiSharp, SiDotnet, SiTypescript,
  SiNextdotjs, SiPostgresql, SiReactquery,
  TbApi,
};

function SkillCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const Icon = iconMap[skill.icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={() => {
        setAnimated(true);
        return { opacity: 1, y: 0 };
      }}
      viewport={viewportOptions}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="glass-card p-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200"
          style={{
            background: skill.color ? `${skill.color}15` : "color-mix(in srgb, var(--primary) 12%, transparent)",
            transform: hovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          {Icon && <Icon size={18} style={{ color: skill.color || "var(--primary-light)" }} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
            {skill.name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {skill.proficiency}%
          </p>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: animated ? `${skill.proficiency}%` : "0%" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");
  const activeCategory = skillCategories.find((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with and my current proficiency levels."
        />

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeTab === cat.id
                  ? {
                      background: "var(--gradient-primary)",
                      color: "#fff",
                      boxShadow: "0 4px 16px color-mix(in srgb, var(--primary) 30%, transparent)",
                    }
                  : {
                      background: "var(--bg-dark-card)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-dark)",
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12"
        >
          {activeCategory?.skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          className="glass-card p-6"
        >
          <h3
            className="text-sm font-semibold uppercase tracking-widest mb-5 flex items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--accent)" }}
            />
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-3">
            {learningNow.map((tech, i) => {
              const Icon = iconMap[tech.icon];
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOptions}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium"
                  style={{
                    background: tech.color ? `${tech.color}10` : "color-mix(in srgb, var(--primary) 8%, transparent)",
                    borderColor: tech.color ? `${tech.color}30` : "var(--border-dark)",
                    color: tech.color || "var(--primary-light)",
                  }}
                >
                  {Icon && <Icon size={15} />}
                  {tech.name}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
