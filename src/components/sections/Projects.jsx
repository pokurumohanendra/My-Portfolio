import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";
import SectionHeading from "../shared/SectionHeading";
import { projects, projectCategories } from "../../data/projects";
import { fadeInUp, staggerContainer, viewportOptions } from "../../animations/variants";

function ProjectCard({ project, index }) {
  const featured = project.featured;
  return (
    <motion.div
      variants={fadeInUp}
      className={`glass-card overflow-hidden group ${featured ? "lg:col-span-2" : ""}`}
    >
      {/* Card header stripe */}
      <div
        className="h-1"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            {featured && (
              <span
                className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(251,191,36,0.1)",
                  color: "#fbbf24",
                  border: "1px solid rgba(251,191,36,0.25)",
                }}
              >
                <FaStar size={10} /> Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-btn w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              >
                <FaGithub size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Demo"
                className="hover-surface w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ color: "var(--accent)" }}
              >
                <FaExternalLinkAlt size={13} />
              </a>
            )}
          </div>
        </div>

        <h3 className="card-title text-lg font-bold mb-2 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {project.shortDesc}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge>+{project.techStack.length - 5}</Badge>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border-dark)" }}>
          <Link
            to={`/projects/${project.id}`}
            className="link-accent text-sm font-medium flex items-center gap-1.5 transition-colors duration-200"
          >
            View Details →
          </Link>
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: "var(--bg-dark-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="Projects"
          subtitle="Applications I've built — real problems, real solutions, real code."
        />

        {/* Filter + Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          {/* Search */}
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or technology..."
            className="form-input flex-1 px-4 py-2.5 rounded-xl text-sm border outline-none"
            style={{
              background: "var(--bg-dark-card)",
              color: "var(--text-primary)",
            }}
          />
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={
                  activeFilter === cat.id
                    ? {
                        background: "var(--gradient-primary)",
                        color: "#fff",
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
          </div>
        </motion.div>

        {/* Projects grid */}
        {filtered.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
            style={{ color: "var(--text-muted)" }}
          >
            <p className="text-lg">No projects found for "{search}"</p>
            <button
              onClick={() => { setSearch(""); setActiveFilter("all"); }}
              className="mt-3 text-sm underline"
              style={{ color: "var(--primary-light)" }}
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
