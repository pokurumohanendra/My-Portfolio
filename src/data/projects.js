// ============================================================
// PROJECTS DATA — Add new projects here as objects
// No component changes needed — just add to this array
// ============================================================

export const projects = [
  {
    id: "realview360",
    title: "RealView360",
    shortDesc:
      "A property discovery platform with SEO-optimized listings, 360° virtual tours, and integrated payments and messaging.",
    description:
      "A production real-estate property discovery platform built at NearEstate. Combines server-rendered pages for SEO-sensitive property listings with interactive client components for search and 360° virtual tours, backed by an Express.js API and PostgreSQL.",
    problem:
      "Property listings need to rank well in search while still offering rich, interactive browsing — virtual tours, live search, filters — that traditional server-rendered sites struggle to deliver without hurting SEO or performance.",
    solution:
      "Built customer-facing features with Next.js 16, React 19, and Redux Toolkit, pairing server-rendered listing pages with client components for search and 360° tours. Backend workflows use Express.js with route/controller/service layers, integrated through Next.js server-side API rewrites, with PostgreSQL accessed via parameterized raw SQL through the pg library across authentication, properties, leads, billing, and subscriptions.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Redux Toolkit",
      "Express.js",
      "PostgreSQL",
      "WhatsApp Business Cloud API",
      "Razorpay",
      "Google Places API",
      "Docker Compose",
    ],
    category: "fullstack",
    featured: false,
    github: "",
    demo: "",
    screenshots: [],
    challenges:
      "Balancing SEO-sensitive server rendering with interactive client-side features like virtual tours and live search, while keeping PostgreSQL access safe and consistent across authentication, billing, and subscription domains using raw parameterized SQL.",
    learnings:
      "Layered Express.js architecture (route/controller/service), integrating third-party services (WhatsApp Business Cloud API, Razorpay, Google Places, S3-compatible storage) into a production workflow, and containerizing multi-service apps with Docker Compose.",
    futureImprovements:
      "Expand virtual tour interactivity, add saved-search notifications, and extend billing/subscription automation.",
    year: 2026,
  },
  {
    id: "crm-nearestate",
    title: "CRM.NearEstate",
    shortDesc:
      "A multi-tenant real estate CRM migrated from a single-tenant architecture, with tenant-scoped access across 34 PostgreSQL tables.",
    description:
      "A multi-tenant SaaS CRM for real estate teams, migrated from a legacy single-tenant system. Enforces tenant-scoped access across 34 PostgreSQL tables and 24+ API modules, with WhatsApp Business Cloud API messaging and CRM workflows like contact management, CSV imports, and follow-ups.",
    problem:
      "A single-tenant CRM couldn't scale to serve multiple real estate businesses in isolation — it needed tenant-scoped data access, secure credential resolution per tenant, and hardened authentication before it could operate as a SaaS product.",
    solution:
      "Contributed to migrating the CRM to a multi-tenant architecture, enforcing tenant-scoped access across 34 PostgreSQL tables and 24+ API modules. Identified and remediated a production authentication bypass and unintended database exposure, and implemented tenant-specific WhatsApp Business Cloud API credential resolution with webhook signature verification, pacing, and automatic retries for failed and rate-limited broadcasts.",
    techStack: ["Next.js", "Express.js", "PostgreSQL", "REST APIs", "Docker", "GitHub Actions"],
    category: "fullstack",
    featured: false,
    github: "",
    demo: "",
    screenshots: [],
    challenges:
      "Retrofitting tenant isolation onto an existing single-tenant schema without breaking live workflows, and closing a production authentication bypass that risked cross-tenant data exposure.",
    learnings:
      "Multi-tenant SaaS architecture patterns, webhook signature verification, rate-limit-aware retry logic for messaging APIs, and production deployment with Docker and GitHub Actions.",
    futureImprovements:
      "Extend tenant-level analytics, add role-based permission granularity, and automate more of the CSV import validation pipeline.",
    year: 2026,
  },
  {
    id: "the-wild-oasis",
    title: "The Wild Oasis",
    shortDesc:
      "A responsive hotel-management dashboard with CRUD workflows for cabins, bookings, and guests, backed by Supabase.",
    description:
      "A hotel-management dashboard built with React, featuring reusable components and full CRUD workflows for cabins, bookings, and guests, with server-state caching via React Query and validated forms via React Hook Form.",
    problem:
      "Hotel staff need a fast, reliable internal tool to manage cabins, bookings, and guest records without juggling spreadsheets or a clunky admin panel.",
    solution:
      "Built a component-driven React dashboard with Supabase as the backend, using React Query for server-state caching and optimistic updates, and React Hook Form for validated create/edit forms across cabins, bookings, and guests.",
    techStack: ["React", "React Query", "Supabase", "React Hook Form"],
    category: "fullstack",
    featured: false,
    github: "",
    demo: "",
    screenshots: [],
    challenges:
      "Keeping server state in sync across CRUD operations and multiple views without over-fetching, while validating and handling errors gracefully in forms with interdependent fields.",
    learnings:
      "Server-state management patterns with React Query, building reusable CRUD-oriented component architecture, and structuring a Supabase backend for a dashboard application.",
    futureImprovements:
      "Add role-based staff accounts, booking calendar view, and revenue analytics.",
    year: 2026,
  },
  {
    id: "usepopcorn",
    title: "usePopcorn",
    shortDesc:
      "A movie search application using the OMDb REST API, with ratings, detailed views, and persistent watched-movie data.",
    description:
      "A movie search application built with React and the OMDb REST API, featuring search, ratings, detailed movie views, reusable custom hooks, and persistent watched-movie data via local storage.",
    problem:
      "Finding and tracking movies you want to watch (or have watched) usually means bouncing between a search site and a separate notes app.",
    solution:
      "Built a React app that queries the OMDb REST API for search results, renders detailed movie views on selection, and persists a user's rated watched-list to local storage using reusable custom hooks.",
    techStack: ["React", "JavaScript", "REST API", "Local Storage"],
    category: "frontend",
    featured: false,
    github: "",
    demo: "",
    screenshots: [],
    challenges:
      "Debouncing search input against a rate-limited external API and keeping the watched-list in sync between component state and local storage.",
    learnings:
      "Custom React hooks (useLocalStorage, useKey, debounced fetch), working with a third-party REST API, and persisting client-side state reliably.",
    futureImprovements:
      "Add streaming-availability lookups and shareable watched-list exports.",
    year: 2026,
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "tool", label: "Tools & Libraries" },
];
