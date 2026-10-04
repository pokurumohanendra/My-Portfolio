import { FaDownload } from "react-icons/fa";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../shared/Reveal";
import { siteConfig } from "../../config/site.config";

const figures = [
  { value: "13", label: "Live applications" },
  { value: "34", label: "Database tables migrated" },
  { value: "24+", label: "API modules" },
  { value: "10+", label: "Third-party integrations" },
];

const strengths = [
  {
    title: "Engineering foundation",
    desc: "B.Tech in Electronics & Communication Engineering, with a strong analytical background.",
  },
  {
    title: "End-to-end delivery",
    desc: "Production features built across React, Next.js, Express.js, and PostgreSQL.",
  },
  {
    title: "Security-minded",
    desc: "Found and fixed a production authentication bypass, tightening tenant isolation.",
  },
  {
    title: "Ships to production",
    desc: "Containerized services with Docker, deployed through CI/CD on GitHub Actions.",
  },
  {
    title: "Community leadership",
    desc: "Coordinated two blood donation camps (2024 and 2025) with the Students' Nation NGO.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="From electronics engineering to building production web software."
    >
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <Reveal className="space-y-5 prose-body text-lg">
          <p>
            I'm a full stack developer with production experience building real-estate SaaS
            applications. At NearEstate I work across two live products: RealView360, a property
            discovery platform, and CRM.NearEstate, a multi-tenant real estate CRM.
          </p>
          <p>
            My day-to-day covers REST APIs, authentication and authorization, and payment and
            messaging integrations, using React, Next.js, Node.js, Express.js, and PostgreSQL,
            shipped as containerized services with CI/CD.
          </p>
          <p>
            Recent work includes a multi-tenant CRM migration across 34 PostgreSQL tables, a fix
            for a production authentication bypass, and customer-facing features from search and
            virtual tours to billing and messaging.
          </p>

          <Button href={siteConfig.resumeUrl} download variant="line" className="mt-8">
            <FaDownload size={12} aria-hidden="true" /> Download résumé
          </Button>
        </Reveal>

        <div className="space-y-12">
          <Reveal>
            <h3 className="eyebrow mb-4">By the numbers</h3>
            <dl className="grid grid-cols-2 border-t border-l border-line">
              {figures.map((f) => (
                <div key={f.label} className="p-5 border-b border-r border-line">
                  <dd className="font-serif text-4xl text-accent">{f.value}</dd>
                  <dt className="mt-1 text-sm text-ink-3">{f.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <h3 className="eyebrow mb-4">How I work</h3>
            <ul className="divide-y divide-line border-y border-line">
              {strengths.map((s) => (
                <li key={s.title} className="py-4">
                  <p className="font-medium text-ink">{s.title}</p>
                  <p className="text-sm text-ink-2 mt-0.5">{s.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
