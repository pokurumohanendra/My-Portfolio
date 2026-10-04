import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";
import Button from "../ui/Button";
import { useCopyToClipboard } from "../../hooks/useCopyToClipboard";
import { useSectionNav } from "../../hooks/useSectionNav";
import { siteConfig } from "../../config/site.config";
import { fadeInUp, staggerContainer } from "../../animations/variants";

const timeFormat = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

/** Visitor-friendly local time, so recruiters in other zones see availability at a glance. */
function LocalTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="tabular-nums">{timeFormat.format(now).toUpperCase()} IST</span>
  );
}

function CopyEmail() {
  const { copied, copy } = useCopyToClipboard(siteConfig.email);

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 text-left link group"
      aria-label={`Copy email address ${siteConfig.email}`}
    >
      <span className="break-all">{siteConfig.email}</span>
      {copied ? (
        <HiCheck size={16} className="text-ok shrink-0" aria-hidden="true" />
      ) : (
        <HiOutlineClipboardCopy
          size={16}
          className="text-ink-3 group-hover:text-accent shrink-0"
          aria-hidden="true"
        />
      )}
      <span role="status" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </button>
  );
}

const facts = [
  { label: "Currently", value: "Full Stack Developer Intern, NearEstate" },
  { label: "Based in", value: siteConfig.location },
  { label: "Works with", value: "Next.js, React, Node.js, PostgreSQL" },
];

export default function Hero() {
  const { goToSection } = useSectionNav();

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-44 md:pb-24">
      <div className="wrap">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16 items-start"
        >
          <div>
            {siteConfig.availableForWork && (
              <motion.p variants={fadeInUp} className="eyebrow mb-6 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-ok" aria-hidden="true" />
                {siteConfig.availabilityMessage}
              </motion.p>
            )}

            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl text-ink">
              {siteConfig.displayName}
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-xl sm:text-2xl font-serif text-accent"
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-ink-2 max-w-xl leading-relaxed"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-3">
              <Button onClick={() => goToSection("projects")}>View selected work</Button>
              <Button href={siteConfig.resumeUrl} download variant="line">
                <FaDownload size={12} aria-hidden="true" /> Download résumé
              </Button>
              <button onClick={() => goToSection("contact")} className="link text-sm px-2">
                Get in touch
              </button>
            </motion.div>
          </div>

          <motion.aside
            variants={fadeInUp}
            aria-label="At a glance"
            className="card p-6"
          >
            <dl className="space-y-5">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow mb-1">{f.label}</dt>
                  <dd className="text-ink">{f.value}</dd>
                </div>
              ))}
              <div>
                <dt className="eyebrow mb-1">Local time</dt>
                <dd className="text-ink">
                  <LocalTime />
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Email</dt>
                <dd className="text-ink">
                  <CopyEmail />
                </dd>
              </div>
            </dl>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
