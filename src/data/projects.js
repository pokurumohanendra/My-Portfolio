// PROJECTS DATA — add new projects here as objects.
//
// type:       "Production" (shipped at work) or "Personal" (own projects)
// category:   "fullstack" | "frontend" | "backend"
// image:      optional screenshot in /public/projects (used as the thumbnail)
// demoNote:   optional one-line hint shown under the live-site button
// github / repos: one repo URL, or a list of { label, url } for multi-repo projects
// highlights: optional short facts shown on the detail page
// problem, solution, challenges, learnings, futureImprovements:
//             optional; a section is hidden when its field is empty
// No component changes needed.

export const projects = [
  {
    id: "realview360",
    type: "Production",
    title: "RealView360",
    shortDesc:
      "A property discovery platform with SEO-optimized listings, 360° virtual tours, and integrated payments and messaging.",
    description:
      "A production real-estate property discovery platform built at NearEstate. It combines server-rendered pages for SEO-sensitive property listings with interactive client components for search and 360° virtual tours, backed by an Express.js API and PostgreSQL.",
    problem:
      "Property listings need to rank well in search while still offering rich, interactive browsing (virtual tours, live search, filters) that traditional server-rendered sites struggle to deliver without hurting SEO or performance.",
    solution:
      "Built customer-facing features with Next.js 16, React 19, and Redux Toolkit, pairing server-rendered listing pages with client components for search and 360° tours. Backend workflows use Express.js with route, controller, and service layers, integrated through Next.js server-side API rewrites, with PostgreSQL accessed via parameterized raw SQL through the pg library across authentication, properties, leads, billing, and subscriptions.",
    techStack: [
      "Next.js 16",
      "React 19",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "WhatsApp Business Cloud API",
      "Razorpay",
      "Google Places API",
      "Docker Compose",
    ],
    category: "fullstack",
    highlights: [
      "SSR listings plus interactive 360° tours",
      "5+ third-party integrations",
      "Raw parameterized SQL across 5 domains",
    ],
    github: "",
    demo: "",
    challenges:
      "Balancing SEO-sensitive server rendering with interactive client-side features like virtual tours and live search, while keeping PostgreSQL access safe and consistent across authentication, billing, and subscription domains using raw parameterized SQL.",
    learnings:
      "Layered Express.js architecture (route, controller, service), integrating third-party services (WhatsApp Business Cloud API, Razorpay, Google Places, S3-compatible storage) into a production workflow, and containerizing multi-service apps with Docker Compose.",
    futureImprovements:
      "Expand virtual tour interactivity, add saved-search notifications, and extend billing and subscription automation.",
    year: 2026,
  },
  {
    id: "crm-nearestate",
    type: "Production",
    title: "CRM.NearEstate",
    shortDesc:
      "A multi-tenant real estate CRM migrated from a single-tenant architecture, with tenant-scoped access across 34 PostgreSQL tables.",
    description:
      "A multi-tenant SaaS CRM for real estate teams, migrated from a legacy single-tenant system. It enforces tenant-scoped access across 34 PostgreSQL tables and 24+ API modules, with WhatsApp Business Cloud API messaging and CRM workflows like contact management, CSV imports, and follow-ups.",
    problem:
      "A single-tenant CRM couldn't serve multiple real estate businesses in isolation. It needed tenant-scoped data access, secure credential resolution per tenant, and hardened authentication before it could operate as a SaaS product.",
    solution:
      "Contributed to migrating the CRM to a multi-tenant architecture, enforcing tenant-scoped access across 34 PostgreSQL tables and 24+ API modules. Identified and remediated a production authentication bypass and unintended database exposure, and implemented tenant-specific WhatsApp Business Cloud API credential resolution with webhook signature verification, pacing, and automatic retries for failed and rate-limited broadcasts.",
    techStack: ["Next.js", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Docker", "GitHub Actions"],
    category: "fullstack",
    highlights: [
      "34 tables with tenant-scoped access",
      "24+ API modules migrated",
      "Production auth bypass found and fixed",
    ],
    github: "",
    demo: "",
    challenges:
      "Retrofitting tenant isolation onto an existing single-tenant schema without breaking live workflows, and closing a production authentication bypass that risked cross-tenant data exposure.",
    learnings:
      "Multi-tenant SaaS architecture patterns, webhook signature verification, rate-limit-aware retry logic for messaging APIs, and production deployment with Docker and GitHub Actions.",
    futureImprovements:
      "Extend tenant-level analytics, add role-based permission granularity, and automate more of the CSV import validation pipeline.",
    year: 2026,
  },
  {
    id: "classroom-management",
    type: "Personal",
    title: "Classroom Management",
    shortDesc:
      "A TypeScript PERN app for managing departments, subjects, classes, users and enrollments, with authentication and a dashboard.",
    description:
      "An end-to-end classroom management application on the PERN stack, written in TypeScript. A Refine and shadcn/ui admin interface provides create, edit, list and detail screens with filtering, sorting and pagination, backed by an Express API with Drizzle ORM migrations on PostgreSQL, better-auth authentication (email, Google and GitHub sign-in), Arcjet request protection and Cloudinary uploads. The frontend is deployed on Vercel.",
    problem:
      "Schools need one place to manage departments, subjects, classes and who is enrolled where, without spreadsheets or separate tools for each.",
    solution:
      "Built a typed React admin interface on Refine and shadcn/ui against a REST API with ten route modules (classes, dashboard, departments, enrollments, search, students, subjects, teachers, uploads and users). The schema is managed with Drizzle migrations on Neon PostgreSQL, and the API is set up to run as serverless functions.",
    techStack: [
      "TypeScript",
      "React",
      "Refine",
      "shadcn/ui",
      "Express.js",
      "PostgreSQL",
      "Drizzle ORM",
      "better-auth",
      "Arcjet",
      "Cloudinary",
    ],
    category: "fullstack",
    highlights: [
      "TypeScript on both client and API",
      "10 REST route modules",
      "4 versioned database migrations",
    ],
    repos: [
      { label: "Frontend code", url: "https://github.com/pokurumohanendra/Classroom-Frontend" },
      { label: "Backend code", url: "https://github.com/pokurumohanendra/Classroom-Backend" },
    ],
    image: "/projects/classroom-management.jpg",
    demo: "https://classroom-frontend-blue.vercel.app/",
    demoNote: "The live app opens at a sign-in screen. Use Sign up to create an account and explore.",
    futureImprovements:
      "Add automated tests for the API routes, role-based permissions per screen, and a README with setup steps and screenshots.",
    year: 2026,
  },
  {
    id: "the-wild-oasis",
    type: "Personal",
    title: "The Wild Oasis",
    shortDesc:
      "A responsive hotel-management dashboard with CRUD workflows for cabins, bookings, and guests, backed by Supabase.",
    description:
      "A hotel-management dashboard built with React, featuring reusable components and full CRUD workflows for cabins, bookings, and guests, with server-state caching via React Query and validated forms via React Hook Form.",
    problem:
      "Hotel staff need a fast, reliable internal tool to manage cabins, bookings, and guest records without juggling spreadsheets or a clunky admin panel.",
    solution:
      "Built a component-driven React dashboard with Supabase as the backend, using React Query for server-state caching and optimistic updates, and React Hook Form for validated create and edit forms across cabins, bookings, and guests.",
    techStack: ["React", "React Query", "Supabase", "React Hook Form"],
    category: "fullstack",
    github: "https://github.com/pokurumohanendra/The-World-Oasis",
    demo: "",
    challenges:
      "Keeping server state in sync across CRUD operations and multiple views without over-fetching, while validating and handling errors gracefully in forms with interdependent fields.",
    learnings:
      "Server-state management patterns with React Query, building reusable CRUD-oriented component architecture, and structuring a Supabase backend for a dashboard application.",
    futureImprovements:
      "Add role-based staff accounts, a booking calendar view, and revenue analytics.",
    year: 2026,
  },
  {
    id: "usepopcorn",
    type: "Personal",
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
    image: "/projects/usepopcorn.jpg",
    github: "https://github.com/pokurumohanendra/Use-Popcorn",
    demo: "https://use-popcorn-a-custom-rating-app.netlify.app/",
    challenges:
      "Debouncing search input against a rate-limited external API and keeping the watched-list in sync between component state and local storage.",
    learnings:
      "Custom React hooks (useLocalStorage, useKey, debounced fetch), working with a third-party REST API, and persisting client-side state reliably.",
    futureImprovements:
      "Add streaming-availability lookups and shareable watched-list exports.",
    year: 2026,
  },
  {
    id: "classy-weather",
    type: "Personal",
    title: "Classy Weather",
    shortDesc: "A React weather app that looks up any location and shows its forecast.",
    description:
      "A React weather application where users search for a location and view its forecast, built to practice component state, effects, and data fetching from a public API.",
    techStack: ["React", "JavaScript", "REST API"],
    category: "frontend",
    image: "/projects/classy-weather.jpg",
    github: "https://github.com/pokurumohanendra/ClassyWeather",
    demo: "https://classy-weather6.netlify.app/",
    year: 2025,
  },
  {
    id: "the-atomic-blog",
    type: "Personal",
    title: "The Atomic Blog",
    shortDesc:
      "A React blog app to write, search, and clear posts, with an archive view and a theme toggle.",
    description:
      "A React blog application with live post search, a form to add posts, a clear-all action, an archive of extra posts, and a light/dark toggle. Built to practice component composition and sharing state across the component tree with the Context API.",
    techStack: ["React", "JavaScript", "Context API"],
    category: "frontend",
    image: "/projects/the-atomic-blog.jpg",
    github: "",
    demo: "https://creat-your-custom-blogs-web-app.netlify.app/",
    year: 2025,
  },
  {
    id: "enjoy-your-trip",
    type: "Personal",
    title: "Enjoy Your Trip",
    shortDesc: "A React packing-list app: add items by quantity, tick them off, and sort the list.",
    description:
      "A packing-list app for trips. Choose a quantity, add items, mark them as packed, delete or clear them, and sort by input order, description, or packed status. Built to practice lifting state, controlled forms, and derived data.",
    techStack: ["React", "JavaScript"],
    category: "frontend",
    image: "/projects/enjoy-your-trip.jpg",
    github: "https://github.com/pokurumohanendra/Time-For-Soul",
    demo: "https://enjoy-your-trip.netlify.app/",
    year: 2025,
  },
  {
    id: "favorite-movies",
    type: "Personal",
    title: "Favorite Movies",
    shortDesc:
      "A personal movie list where you add titles with an image and rating, and delete with confirmation.",
    description:
      "A browser app for curating a favorite-movies collection. Users add a movie with a title, image URL, and personal rating, and removal asks for confirmation to prevent accidental deletes.",
    techStack: ["JavaScript", "HTML", "CSS", "DOM"],
    category: "frontend",
    image: "/projects/favorite-movies.jpg",
    github: "https://github.com/pokurumohanendra/Movie-Rating",
    demo: "https://favorite-movie-rating-7.netlify.app/",
    year: 2024,
  },
  {
    id: "monster-killer",
    type: "Personal",
    title: "Monster Killer",
    shortDesc:
      "A browser-based battle game with attack, strong attack, and heal actions plus a battle log.",
    description:
      "An interactive browser game where the player fights a monster turn by turn. Both sides have health bars, the player can attack, use a strong attack, or heal, and a log shows the history of the battle.",
    techStack: ["JavaScript", "HTML", "CSS", "DOM"],
    category: "frontend",
    image: "/projects/monster-killer.jpg",
    github: "https://github.com/pokurumohanendra/Mini-Game-In-Browser",
    demo: "https://browser-based-mini-game.netlify.app/",
    year: 2024,
  },
  {
    id: "omnifood",
    type: "Personal",
    title: "Omnifood",
    shortDesc: "A responsive landing page for an AI-powered meal subscription service.",
    description:
      "A fully responsive marketing website for a fictional meal-subscription service, with a hero section, how-it-works steps, pricing plans, testimonials, and a call to action, built to practice modern layout techniques.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "frontend",
    image: "/projects/omnifood.jpg",
    github: "https://github.com/pokurumohanendra/OmniFood",
    demo: "https://omnifood-eat-wisely.netlify.app/",
    year: 2024,
  },
  {
    id: "lisbon-chair-shop",
    type: "Personal",
    title: "Lisbon Chair Shop",
    shortDesc: "A responsive product landing page for an ergonomic-chair retailer.",
    description:
      "A responsive landing page for a furniture shop, featuring a hero section, product cards, customer testimonials, and purchase calls to action, built to practice layout and styling.",
    techStack: ["HTML", "CSS", "Responsive Design"],
    category: "frontend",
    image: "/projects/lisbon-chair-shop.jpg",
    github: "https://github.com/pokurumohanendra/Lisbon-Chair-Shop",
    demo: "https://chairs-for-sale.netlify.app/",
    year: 2024,
  },
  {
    id: "the-code-magazine",
    type: "Personal",
    title: "The Code Magazine",
    shortDesc: "A blog-style article page that explains HTML fundamentals, with related posts.",
    description:
      "A magazine-style article page about HTML basics, with author attribution, related-post recommendations, and navigation to topics like CSS, Flexbox, and Grid, built to practice semantic HTML and CSS layout.",
    techStack: ["HTML", "CSS", "Semantic HTML"],
    category: "frontend",
    image: "/projects/the-code-magazine.jpg",
    github: "https://github.com/pokurumohanendra/The-Blog",
    demo: "https://the-mini-blog.netlify.app/",
    year: 2024,
  },
];
