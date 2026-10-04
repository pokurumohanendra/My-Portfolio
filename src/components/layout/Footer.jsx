import { siteConfig } from "../../config/site.config";
import { contactLinks } from "../../data/socialLinks";
import EngagementStats from "../shared/EngagementStats";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="font-serif text-lg font-semibold text-ink">{siteConfig.displayName}</p>
          <p className="text-sm text-ink-3">
            © {new Date().getFullYear()} · {siteConfig.location}
          </p>
          <EngagementStats />
        </div>

        <ul className="flex items-center gap-1">
          {contactLinks.map(({ id, label, url, Icon }) => {
            const external = id !== "email";
            return (
              <li key={id}>
                <a
                  href={url}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  aria-label={label}
                  className="icon-btn"
                >
                  <Icon size={18} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
