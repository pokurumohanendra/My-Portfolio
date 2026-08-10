import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { HiLightBulb, HiCode, HiChip, HiPuzzle } from "react-icons/hi";
import Badge from "../components/ui/Badge";
import { projects } from "../data/projects";
import { siteConfig } from "../config/site.config";
import { fadeInUp, staggerContainer, viewportOptions } from "../animations/variants";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ background: "var(--bg-dark)" }}
      >
        <h1 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
          Project Not Found
        </h1>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--primary-light)" }}
        >
          <FaArrowLeft size={12} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-20"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Header */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "var(--bg-dark-surface)" }}
      >
        <div className="bg-ambient-glow absolute inset-0 pointer-events-none" />
        <div className="container-custom relative z-10">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-200 hover-surface"
              style={{
                color: "var(--text-secondary)",
                borderColor: "var(--border-dark)",
              }}
            >
              <FaArrowLeft size={12} /> Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Category badge */}
            <motion.div variants={fadeInUp} className="mb-4">
              <Badge>{project.category}</Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl font-black mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg max-w-2xl mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.shortDesc}
            </motion.p>

            {/* Links */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover-surface"
                  style={{
                    color: "var(--text-primary)",
                    borderColor: "var(--border-dark)",
                  }}
                >
                  <FaGithub size={15} /> View Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <FaExternalLinkAlt size={13} /> Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: HiLightBulb, title: "Problem", content: project.problem },
                { icon: HiCode, title: "Solution", content: project.solution },
                { icon: HiCode, title: "Description", content: project.description },
                { icon: HiPuzzle, title: "Challenges & Learnings", content: project.challenges },
                { icon: HiChip, title: "Future Improvements", content: project.futureImprovements },
              ].map((section) => (
                <motion.div
                  key={section.title}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                  className="glass-card p-6"
                >
                  <h2 className="font-bold text-lg mb-3 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                    <section.icon style={{ color: "var(--primary-light)" }} />
                    {section.title}
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </motion.div>

              {/* Year */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="glass-card p-6"
              >
                <h3 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  Year
                </h3>
                <p className="font-mono gradient-text text-2xl font-bold">{project.year}</p>
              </motion.div>
            </div>
          </div>

          {/* Back button at bottom */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover-surface"
              style={{ color: "var(--text-secondary)", borderColor: "var(--border-dark)" }}
            >
              <FaArrowLeft size={12} /> Back to All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
