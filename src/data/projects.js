// PROJECTS DATA — add new projects here as objects.
//
// type:       "Production" (shipped at work), "Freelance" (client work), or "Personal" (own projects)
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
    featured: true,
    role: "Full Stack Developer",
    scope: "Frontend, API integration, PostgreSQL-backed workflows, and deployment support",
    team: "NearEstate product team",
    sourceAccess: "Private production codebase",
    type: "Production",
    title: "RealView360",
    shortDesc:
      "A property discovery platform with SEO-optimized listings, 360° virtual tours, and integrated payments and messaging.",
    description:
      "A production real-estate property discovery platform built at NearEstate to help buyers and renters explore homes and neighborhoods before visiting them in person. The experience combines SEO-optimized, server-rendered property listings with fast locality search, detailed property information, and immersive 360° virtual tours. Behind the customer-facing interface, an Express.js API and PostgreSQL power authentication, property and lead management, billing, and subscriptions, while integrations with WhatsApp, Razorpay, Google Places, and S3-compatible storage support messaging, payments, location discovery, and media delivery.",
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
    image: "/projects/realview360.jpg",
    demo: "https://nearestate.in/",
    demoNote: "Explore the live NearEstate property-discovery experience.",
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
    featured: true,
    role: "Full Stack Developer",
    scope: "Multi-tenant migration, security hardening, messaging workflows, and deployment",
    team: "NearEstate product team",
    sourceAccess: "Private production codebase",
    type: "Production",
    title: "CRM.NearEstate",
    shortDesc:
      "A multi-tenant real estate CRM migrated from a single-tenant architecture, with tenant-scoped access across 34 PostgreSQL tables.",
    description:
      "A production multi-tenant SaaS CRM built for real estate teams to manage leads, contacts, conversations, property enquiries, and follow-up workflows from one secure workspace. Migrated from a legacy single-tenant system, it now enforces tenant-scoped access across 34 PostgreSQL tables and 24+ API modules so every business operates with isolated data and credentials. The platform also integrates the WhatsApp Business Cloud API for inbox messaging and broadcast campaigns, with webhook verification, tenant-specific credential resolution, pacing, automatic retries, CSV imports, and day-to-day CRM automation.",
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
    image: "/projects/crm-nearestate.png",
    demo: "https://crm.nearestate.in/",
    demoNote: "The production CRM opens at a secure sign-in screen and requires an authorized account.",
    challenges:
      "Retrofitting tenant isolation onto an existing single-tenant schema without breaking live workflows, and closing a production authentication bypass that risked cross-tenant data exposure.",
    learnings:
      "Multi-tenant SaaS architecture patterns, webhook signature verification, rate-limit-aware retry logic for messaging APIs, and production deployment with Docker and GitHub Actions.",
    futureImprovements:
      "Extend tenant-level analytics, add role-based permission granularity, and automate more of the CSV import validation pipeline.",
    year: 2026,
  },
  {
    id: "guru-real-estate",
    featured: true,
    role: "Freelance Full Stack Developer",
    scope: "Product design, frontend, API, database, cloud storage, deployment, and maintenance",
    team: "Independently delivered for a client",
    sourceAccess: "Private client repository",
    type: "Freelance",
    title: "Guru Real Estate",
    shortDesc:
      "A multilingual property and documentation service with searchable listings, secure case tracking, and an admin publishing workflow.",
    description:
      "A production freelance platform built for a real-estate and property-documentation service in SPSR Nellore, Andhra Pradesh. Visitors can explore property listings, search by town, village, property type, and offering, save favourites, and request services such as sale-deed drafting, registration support, title verification, land-record work, loans, and valuation. Signed-in customers receive a dashboard for tracking each service case through checklists, updates, and private documents, while administrators manage listings, enquiries, announcements, welcome content, and case progress from a responsive operational workspace. The complete experience supports English, Telugu, Hindi, and right-to-left Urdu and is installable as a Progressive Web App.",
    problem:
      "The client needed more than a marketing site: local customers needed an accessible way to discover properties and request document or registration services, while the business needed one secure system for publishing listings and managing every customer case from enquiry to completion.",
    solution:
      "Designed and delivered a full-stack TypeScript system with a Next.js 16 and React 19 frontend, an Express 5 API packaged for AWS Lambda, Supabase authentication and PostgreSQL, and private AWS S3 storage. Built paginated property search and facets, email-or-mobile authentication, verified-admin authorization, a three-step listing wizard with image compression and previews, service-case checklists and messaging, private document uploads through signed URLs, multilingual and RTL interfaces, rate limiting, schema validation, SEO routes, and offline PWA support.",
    techStack: [
      "TypeScript",
      "Next.js 16",
      "React 19",
      "Express 5",
      "Supabase",
      "PostgreSQL",
      "AWS Lambda",
      "AWS S3",
      "Zod",
      "Tailwind CSS",
      "PWA",
      "Netlify",
    ],
    category: "fullstack",
    highlights: [
      "4 languages with RTL Urdu support",
      "839 villages across 35 mandals",
      "Secure serverless case and document workflows",
    ],
    github: "",
    image: "/projects/guru-real-estate.jpg",
    demo: "https://gururealestateservice.netlify.app/",
    demoNote: "Choose a language and accept the private-service notice to explore the live application.",
    challenges:
      "Turning several workflows—property discovery, multilingual content, authentication, service requests, case communication, and sensitive document handling—into one coherent mobile-first product. The security boundary also had to remain clear: public Supabase credentials handle login, but only the authenticated API can use the service role, access the database, or issue signed links for private S3 documents.",
    learnings:
      "Owning a client product end to end: translating business requirements into UX and data models, designing secure authorization and storage boundaries, building multilingual and RTL interfaces, packaging an Express API for Lambda, and deploying and maintaining a production Next.js application across Netlify, AWS, and Supabase.",
    futureImprovements:
      "Add automated end-to-end coverage for the customer and admin journeys, move hard global throttling fully to API Gateway, and extend operational reporting for enquiry sources, case turnaround times, and listing performance.",
    year: 2026,
  },
  {
    id: "classroom-management",
    type: "Personal",
    title: "Classroom Management",
    shortDesc:
      "A TypeScript PERN app for managing departments, subjects, classes, users and enrollments, with authentication and a dashboard.",
    description:
      "An end-to-end classroom management application on the PERN stack, written in TypeScript. A Refine and shadcn/ui admin interface provides create, edit, list and detail screens with filtering, sorting and pagination, backed by an Express API with Drizzle ORM migrations on PostgreSQL, better-auth authentication, Arcjet request protection and Cloudinary uploads. Three roles (admin, teacher and student) control what each user can do. The frontend is deployed on Vercel.",
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
      "3 roles with per-role rate limits",
    ],
    repos: [
      { label: "Frontend code", url: "https://github.com/pokurumohanendra/Classroom-Frontend" },
      { label: "Backend code", url: "https://github.com/pokurumohanendra/Classroom-Backend" },
    ],
    image: "/projects/classroom-management.jpg",
    demo: "https://classroom-frontend-blue.vercel.app/",
    demoNote: "The live app opens at a sign-in screen. Use Sign up to create an account and explore.",
    futureImprovements:
      "Add automated tests for the API routes and generate API documentation.",
    year: 2026,
  },
  {
    id: "the-wild-oasis",
    featured: true,
    role: "Full Stack Developer",
    scope: "Customer booking experience and staff operations dashboard",
    team: "Personal two-application project",
    sourceAccess: "Public source repositories",
    type: "Personal",
    title: "The Wild Oasis",
    shortDesc:
      "A two-app cabin reservation platform with a customer booking site and a staff operations dashboard sharing Supabase.",
    description:
      "A full-stack cabin reservation platform made of two connected applications. Guests use a server-rendered Next.js site to browse availability, authenticate with Google, create reservations, and manage bookings. Staff use a React dashboard to manage cabins and bookings, check guests in and out, review daily activity, and monitor sales and stay-duration analytics. Both applications share Supabase data and storage.",
    problem:
      "A hospitality business needs a smooth guest booking experience and a separate operational workspace for staff, while keeping cabin availability, reservations, guest records, and settings consistent across both sides.",
    solution:
      "Built a Next.js 14 App Router customer site using React Server Components, Auth.js with Google OAuth, protected account routes, ownership-checked server actions, route revalidation, and availability-aware reservations. Paired it with a React and Vite staff dashboard using TanStack Query, React Hook Form, and Supabase for cabin CRUD, booking operations, check-in and check-out, settings, and analytics.",
    techStack: [
      "Next.js 14",
      "React 18",
      "Auth.js",
      "Google OAuth",
      "Supabase",
      "TanStack Query",
      "React Hook Form",
      "Tailwind CSS",
      "styled-components",
    ],
    category: "fullstack",
    highlights: [
      "2 connected customer and staff applications",
      "Google OAuth with protected guest accounts",
      "Ownership-checked reservation mutations",
    ],
    repos: [
      {
        label: "Customer code",
        url: "https://github.com/pokurumohanendra/The-World_Oasis-Custmer-Website",
      },
      {
        label: "Admin code",
        url: "https://github.com/pokurumohanendra/The-World-Oasis-Admin-Website",
      },
    ],
    image: "/projects/the-wild-oasis.jpg",
    demos: [
      {
        label: "Customer live",
        url: "https://checkin-easisly-book-your-space-now.netlify.app/",
      },
      {
        label: "Admin live",
        url: "https://the-world-oasis-make-your-stay-here.netlify.app/",
      },
    ],
    demoNote:
      "Use the customer website to browse and reserve cabins, or open the admin app to see the staff operations experience.",
    challenges:
      "Keeping availability and booking data consistent across two separate applications while protecting guest mutations. The customer site checks both authentication and booking ownership before updates or deletion, then revalidates affected routes so the guest and staff views receive fresh data.",
    learnings:
      "Designing complementary customer and operational applications around a shared backend, applying server rendering and cache revalidation in Next.js, securing OAuth-backed server actions, and managing dashboard server state with TanStack Query.",
    futureImprovements:
      "Separate anonymous and privileged Supabase clients, move all configuration into environment variables, add automated tests and CI, and deploy both applications with production OAuth callbacks.",
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
    github: "https://github.com/pokurumohanendra/The-Automic-Blogs",
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
