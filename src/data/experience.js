// EXPERIENCE DATA — professional roles, most recent first

export const experience = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "NearEstate",
    companyUrl: "https://nearestate.in",
    location: "Hyderabad, India",
    duration: "Jul 2026 – Present",
    summary:
      "Contributed to two production real-estate applications, working across frontend development, backend APIs, PostgreSQL, authentication, security, third-party integrations, and deployment.",
    projects: [
      {
        name: "RealView360",
        tag: "Property Discovery Platform",
        stack: ["Next.js 16", "React 19", "Redux Toolkit", "Express.js", "PostgreSQL"],
        points: [
          "Developed customer-facing features using Next.js 16, React 19, and Redux Toolkit, combining server-rendered pages for SEO-sensitive property listings with interactive client components for search and 360° virtual tours.",
          "Developed backend workflows using Express.js with route, controller, and service layers, integrating the frontend through Next.js server-side API rewrites.",
          "Implemented and maintained PostgreSQL workflows using parameterized raw SQL through the pg library across authentication, properties, leads, billing, and subscription domains.",
          "Integrated external services including WhatsApp Business Cloud API, Razorpay, Google Places API, Nodemailer/SMTP, and S3-compatible object storage; containerized application services with Docker Compose.",
        ],
      },
      {
        name: "CRM.NearEstate",
        tag: "Multi-Tenant Real Estate CRM",
        stack: ["Next.js", "Express.js", "PostgreSQL", "REST APIs"],
        points: [
          "Contributed to the migration from a single-tenant CRM to a multi-tenant SaaS architecture, enforcing tenant-scoped access across 34 PostgreSQL tables and 24+ API modules.",
          "Identified and remediated a production authentication bypass and unintended database exposure, strengthening tenant isolation and preventing unauthorized cross-tenant data access.",
          "Implemented tenant-specific WhatsApp Business Cloud API credential resolution and webhook signature verification, with pacing and automatic retries for failed and rate-limited broadcasts.",
          "Improved core CRM workflows including contact pagination, full-table search, CSV imports, follow-ups, password reset, and inbox-to-contact flows; contributed to production deployment using Docker and GitHub Actions.",
        ],
      },
    ],  },
];
