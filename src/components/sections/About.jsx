import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaRocket, FaDownload, FaShieldAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import SectionHeading from "../shared/SectionHeading";
import { siteConfig } from "../../config/site.config";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from "../../animations/variants";

const stats = [
  { value: "2", label: "Live Applications", icon: FaRocket },
  { value: "34", label: "DB Tables Migrated", icon: FaGraduationCap },
  { value: "24+", label: "API Modules", icon: FaCode },
  { value: "10+", label: "Integrations", icon: HiLightBulb },
];

const highlights = [
  {
    icon: FaGraduationCap,
    title: "ECE Graduate",
    desc: "B.Tech in Electronics & Communication Engineering — strong analytical foundation.",
  },
  {
    icon: FaCode,
    title: "Full Stack Engineer",
    desc: "Building production features end-to-end with React, Next.js, Express.js, and PostgreSQL.",
  },
  {
    icon: FaShieldAlt,
    title: "Security-Minded",
    desc: "Identified and remediated a production authentication bypass, strengthening tenant isolation.",
  },
  {
    icon: FaRocket,
    title: "Ships to Production",
    desc: "Containerized services with Docker, deployed with CI/CD via GitHub Actions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--bg-dark-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="My journey from ECE engineering to full-stack web development."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I'm a{" "}
              <span className="gradient-text font-semibold">
                Full Stack Developer
              </span>{" "}
              with production experience building real-estate SaaS applications. As part of the
              engineering team at NearEstate, I work across two live products — RealView360, a
              property discovery platform, and CRM.NearEstate, a multi-tenant real estate CRM.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I build REST APIs, authentication and authorization flows, and third-party payment
              and messaging integrations using{" "}
              <span style={{ color: "var(--primary-light)" }}>React</span>,{" "}
              <span style={{ color: "var(--primary-light)" }}>Next.js</span>,{" "}
              <span style={{ color: "var(--primary-light)" }}>Node.js</span>,{" "}
              <span style={{ color: "var(--primary-light)" }}>Express.js</span>, and{" "}
              <span style={{ color: "var(--primary-light)" }}>PostgreSQL</span>, deployed as
              containerized services with CI/CD.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I've contributed to a multi-tenant CRM migration across 34 PostgreSQL tables,
              remediated a production authentication bypass, and shipped customer-facing features
              across both applications — from search and virtual tours to billing and messaging.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                  >
                    <h.icon size={16} style={{ color: "var(--primary-light)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--text-primary)" }}>
                      {h.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href={siteConfig.resumeUrl}
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white mt-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <FaDownload size={13} /> Download Resume
            </motion.a>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOptions}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                  className="glass-card p-6 text-center"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                    style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                  >
                    <stat.icon size={18} style={{ color: "var(--accent)" }} />
                  </div>
                  <div
                    className="text-3xl font-black mb-1 gradient-text"
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Code snippet card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              transition={{ delay: 0.3 }}
              className="glass-card p-5 font-mono text-sm"
              style={{
                background: "#0f172a",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex gap-1.5 mb-4">
                {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                  <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                <span style={{ color: "#818cf8" }}>const</span>{" "}
                <span style={{ color: "#22d3ee" }}>developer</span>{" "}
                <span style={{ color: "#f1f5f9" }}>=</span>{" "}
                <span style={{ color: "#818cf8" }}>{`{`}</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: "#94a3b8" }}>name</span>:{" "}
                <span style={{ color: "#a3e635" }}>"{siteConfig.name}"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: "#94a3b8" }}>role</span>:{" "}
                <span style={{ color: "#a3e635" }}>"Full Stack Developer"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: "#94a3b8" }}>stack</span>:{" "}
                <span style={{ color: "#818cf8" }}>[</span>
                <span style={{ color: "#a3e635" }}>"React"</span>,{" "}
                <span style={{ color: "#a3e635" }}>"Next.js"</span>,{" "}
                <span style={{ color: "#a3e635" }}>"PostgreSQL"</span>
                <span style={{ color: "#818cf8" }}>]</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: "#94a3b8" }}>available</span>:{" "}
                <span style={{ color: "#22d3ee" }}>true</span>,
                <br />
                <span style={{ color: "#818cf8" }}>{`}`}</span>;
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
