import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { siteConfig } from "../../config/site.config";
import { LogoMark } from "../shared/Logo";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Journey", id: "journey" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="border-t"
      style={{
        background: "var(--bg-dark-surface)",
        borderColor: "var(--border-dark)",
      }}
    >
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 mb-3 hover:opacity-80 transition-opacity"
              aria-label="Scroll to top"
            >
              <LogoMark size={36} />
              <span className="font-mono text-lg font-bold gradient-text">
                MOHANENDRA
              </span>
            </button>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {siteConfig.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="link-hover-accent text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { Icon: FaGithub, href: siteConfig.social.github, label: "GitHub" },
                { Icon: FaLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { Icon: FaEnvelope, href: `mailto:${siteConfig.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="social-icon w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{
            borderTop: "1px solid var(--border-dark)",
            color: "var(--text-muted)",
          }}
        >
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart size={12} style={{ color: "#f43f5e" }} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
