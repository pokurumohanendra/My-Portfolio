// CASE STUDIES — architecture diagrams and key decisions, keyed by project id.
// Only facts that appear in the project data or its repository belong here.
//
// architecture.stages: left-to-right (top-to-bottom on mobile) request path.
//   Each stage has a title and nodes: { name, note? }. Set `external: true`
//   on a stage to draw it as a third-party boundary.
// architecture.caption: one line about what the diagram leaves out.
// decisions: [{ title, detail }]

export const caseStudies = {
  realview360: {
    architecture: {
      stages: [
        {
          title: "Browser",
          nodes: [
            { name: "Server-rendered pages", note: "SEO-sensitive property listings" },
            { name: "Client components", note: "Search and 360° tours, Redux Toolkit" },
          ],
        },
        {
          title: "Next.js 16",
          nodes: [{ name: "API rewrites", note: "Server-side proxy to the Express API" }],
        },
        {
          title: "Express.js API",
          nodes: [
            { name: "Route, controller, service", note: "Auth, properties, leads, billing, subscriptions" },
          ],
        },
        {
          title: "PostgreSQL",
          nodes: [{ name: "pg library", note: "Parameterized raw SQL" }],
        },
        {
          title: "External services",
          external: true,
          nodes: [
            { name: "WhatsApp Business Cloud API" },
            { name: "Razorpay" },
            { name: "Google Places API" },
            { name: "Nodemailer / SMTP" },
            { name: "S3-compatible storage" },
          ],
        },
      ],
      caption: "Services run as containers with Docker Compose.",
    },
    decisions: [
      {
        title: "Server-render listings, hydrate only what is interactive",
        detail:
          "Listing pages are rendered on the server so they can rank in search, while search and 360° virtual tours stay as client components.",
      },
      {
        title: "A layered Express API behind Next.js rewrites",
        detail:
          "Routes, controllers and services are separate layers, and the frontend reaches them through server-side API rewrites.",
      },
      {
        title: "Explicit, parameterized SQL",
        detail:
          "PostgreSQL is accessed with parameterized queries through the pg library across authentication, properties, leads, billing and subscriptions.",
      },
    ],
  },

  "crm-nearestate": {
    architecture: {
      stages: [
        { title: "Browser", nodes: [{ name: "Next.js app", note: "Contacts, imports, follow-ups, inbox" }] },
        {
          title: "Express.js API",
          nodes: [{ name: "24+ API modules", note: "Every request is tenant-scoped" }],
        },
        {
          title: "PostgreSQL",
          nodes: [{ name: "34 tables", note: "Tenant-scoped access" }],
        },
        {
          title: "WhatsApp Business Cloud API",
          external: true,
          nodes: [
            { name: "Per-tenant credentials" },
            { name: "Signed webhooks", note: "Signature verified" },
          ],
        },
      ],
      caption:
        "Broadcasts are paced and retried on failure or rate limits. Deployed with Docker and GitHub Actions.",
    },
    decisions: [
      {
        title: "Tenant-scoped access everywhere",
        detail:
          "The migration from a single-tenant system enforces tenant scoping across 34 tables and 24+ API modules so one tenant cannot read another's data.",
      },
      {
        title: "Resolve WhatsApp credentials per tenant",
        detail:
          "Each tenant sends with its own WhatsApp Business Cloud API credentials, looked up at request time.",
      },
      {
        title: "Verify every webhook",
        detail: "Incoming webhooks are checked against their signature before they are processed.",
      },
      {
        title: "Pace and retry broadcasts",
        detail:
          "Failed and rate-limited broadcasts are retried automatically, with pacing to stay within the provider's limits.",
      },
    ],
  },

  "classroom-management": {
    architecture: {
      stages: [
        {
          title: "Browser",
          nodes: [
            { name: "Refine + React", note: "TypeScript, shadcn/ui, React Router" },
            { name: "Data tables and forms", note: "TanStack Table, React Hook Form, Zod" },
          ],
        },
        {
          title: "Express API",
          nodes: [
            { name: "10 route modules", note: "Classes, departments, enrollments, subjects, users and more" },
            { name: "better-auth", note: "Authentication" },
            { name: "Arcjet", note: "Request protection middleware" },
          ],
        },
        {
          title: "Neon PostgreSQL",
          nodes: [{ name: "Drizzle ORM", note: "Typed schema and 4 migrations" }],
        },
        {
          title: "External services",
          external: true,
          nodes: [{ name: "Cloudinary", note: "File uploads" }],
        },
      ],
      caption: "The API is configured to run as serverless functions.",
    },
    decisions: [
      {
        title: "TypeScript across the stack",
        detail:
          "Both the Refine frontend and the Express API are written in TypeScript, so shapes stay consistent from database to UI.",
      },
      {
        title: "Schema changes as migrations",
        detail:
          "Drizzle generates versioned SQL migrations, so the database structure is reproducible rather than edited by hand.",
      },
      {
        title: "Auth and request protection as middleware",
        detail:
          "Authentication and Arcjet protection sit in front of the route modules instead of being repeated inside each handler.",
      },
    ],
  },

  "the-wild-oasis": {
    architecture: {
      stages: [
        {
          title: "Browser",
          nodes: [
            { name: "React dashboard", note: "Reusable components" },
            { name: "React Query", note: "Server-state caching" },
            { name: "React Hook Form", note: "Validated forms" },
          ],
        },
        {
          title: "Supabase",
          external: true,
          nodes: [{ name: "Database and API", note: "Cabins, bookings, guests" }],
        },
      ],
    },
    decisions: [
      {
        title: "React Query for server state",
        detail:
          "Cabins, bookings and guests are cached and kept in sync across views instead of being refetched by hand.",
      },
      {
        title: "Validated forms for every create and edit flow",
        detail: "React Hook Form handles validation and error messages for forms with interdependent fields.",
      },
    ],
  },

  usepopcorn: {
    architecture: {
      stages: [
        {
          title: "Browser",
          nodes: [
            { name: "React app", note: "Search, ratings, detail view" },
            { name: "Custom hooks", note: "useLocalStorage, useKey, debounced fetch" },
          ],
        },
        {
          title: "OMDb REST API",
          external: true,
          nodes: [{ name: "Movie search and details" }],
        },
        { title: "Local storage", nodes: [{ name: "Watched list", note: "Persisted in the browser" }] },
      ],
    },
    decisions: [
      {
        title: "Debounce search against a rate-limited API",
        detail: "Typing does not fire a request per keystroke; the query is sent once the input settles.",
      },
      {
        title: "Persist the watched list in local storage",
        detail: "A reusable hook keeps component state and local storage in sync.",
      },
    ],
  },
};
