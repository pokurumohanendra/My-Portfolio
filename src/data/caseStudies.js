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

  "guru-real-estate": {
    architecture: {
      stages: [
        {
          title: "Customer and admin UI",
          nodes: [
            { name: "Next.js 16 + React 19", note: "Listings, accounts, cases, and admin dashboard" },
            { name: "Typed i18n", note: "English, Telugu, Hindi, and RTL Urdu" },
            { name: "Progressive Web App", note: "Installable with an offline fallback" },
          ],
        },
        {
          title: "Serverless API",
          nodes: [
            { name: "Express 5 on AWS Lambda", note: "Auth, listings, enquiries, and case workflows" },
            { name: "Zod + middleware", note: "Validation, authorization, Helmet, CORS, and rate limits" },
          ],
        },
        {
          title: "Data and identity",
          external: true,
          nodes: [
            { name: "Supabase Auth", note: "Email or Indian mobile sign-in" },
            { name: "PostgreSQL", note: "RLS enabled with no public table access" },
          ],
        },
        {
          title: "Private media",
          external: true,
          nodes: [
            { name: "AWS S3", note: "Property photos and case documents" },
            { name: "Signed document URLs", note: "Issued only after case access checks" },
          ],
        },
      ],
      caption:
        "The Next.js website is deployed on Netlify; API Gateway fronts the Lambda API, and sensitive credentials remain server-side.",
    },
    decisions: [
      {
        title: "Keep the database behind the API",
        detail:
          "Database tables have row-level security enabled with no public access. The browser authenticates with Supabase, but all application data passes through the API, where identity and permissions are checked again.",
      },
      {
        title: "Treat case documents as private data",
        detail:
          "The S3 bucket is private. A customer or administrator receives a short-lived document URL only after the API verifies that the signed-in user can access the associated case.",
      },
      {
        title: "Build localization into the type system",
        detail:
          "Four translation dictionaries share typed keys, so missing content is caught during development; Urdu also switches the complete document direction to right-to-left.",
      },
      {
        title: "Design one workflow for customers and operations",
        detail:
          "A service request creates a trackable case with the correct checklist. Customers see progress, updates, and documents in their dashboard while administrators manage the same workflow from the operational side.",
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
            { name: "Arcjet", note: "Shield, bot detection, per-role rate limits" },
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
        title: "Role-based access in the UI and on the API",
        detail:
          "Users are students, teachers or admins. The interface hides actions a role cannot use, routes check the role again on the server, and rate limits differ per role.",
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
          title: "Guest experience",
          nodes: [
            { name: "Next.js 14 App Router", note: "Server-rendered cabin and account pages" },
            { name: "Auth.js + Google OAuth", note: "Protected guest account" },
            { name: "Server actions", note: "Create, edit and cancel reservations" },
          ],
        },
        {
          title: "Staff operations",
          nodes: [
            { name: "React + Vite dashboard", note: "Cabins, bookings, check-in and check-out" },
            { name: "TanStack Query", note: "Cached server state" },
            { name: "React Hook Form", note: "Validated management forms" },
          ],
        },
        {
          title: "Shared Supabase backend",
          external: true,
          nodes: [
            { name: "Database", note: "Cabins, bookings, guests and settings" },
            { name: "Authentication" },
            { name: "Storage", note: "Cabin images" },
          ],
        },
      ],
      caption:
        "The customer and staff applications are separate repositories connected to the same hospitality data.",
    },
    decisions: [
      {
        title: "Separate customer and staff applications",
        detail:
          "Guests receive a focused, server-rendered reservation experience while employees use a feature-based dashboard designed for daily operations.",
      },
      {
        title: "Check identity and ownership on every mutation",
        detail:
          "Reservation updates and deletions verify the signed-in guest and booking ownership before using the server-side Supabase client.",
      },
      {
        title: "Revalidate customer routes after mutations",
        detail:
          "Booking server actions invalidate the affected Next.js paths so availability and account pages do not serve stale reservation data.",
      },
      {
        title: "TanStack Query for staff server state",
        detail:
          "The admin dashboard caches cabins, bookings and operational data and keeps views in sync across CRUD and check-in workflows.",
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
