// ============================================================
// PROJECTS DATA — Add new projects here as objects
// No component changes needed — just add to this array
// ============================================================

export const projects = [
  {
    id: "task-manager",
    title: "Task Manager App",
    shortDesc: "A full-featured project & task management application with drag-and-drop Kanban boards.",
    description:
      "A complete task management tool built with vanilla JavaScript using OOP principles. Supports multiple projects, tasks with priorities, deadlines, and a clean modular architecture powered by Webpack.",
    problem: "Managing multiple project tasks manually is inefficient and error-prone.",
    solution:
      "Built a structured task manager using a class-based JavaScript architecture with local persistence, project grouping, and task status tracking.",
    techStack: ["JavaScript", "HTML", "CSS", "Webpack"],
    category: "frontend",
    featured: true,
    github: "https://github.com/yourusername/task-manager",
    demo: "",
    screenshots: [],
    challenges: "Implementing modular OOP patterns in vanilla JS without a framework.",
    learnings: "Deep understanding of JavaScript classes, modules, Webpack bundling, and separation of concerns.",
    futureImprovements: "Migrate to React with drag-and-drop and a Node.js backend.",
    year: 2026,
  },
  {
    id: "restaurant-landing",
    title: "Restaurant Landing Page",
    shortDesc: "A responsive, visually rich restaurant website with smooth animations and modern design.",
    description:
      "A professional restaurant landing page featuring a hero section, menu showcase, about section, reservations CTA, and contact information. Built with semantic HTML and modern CSS techniques.",
    problem: "Restaurants need an attractive online presence to attract customers.",
    solution:
      "Designed and built a fully responsive landing page with smooth scroll animations, CSS grid layouts, and a modern color palette.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "frontend",
    featured: true,
    github: "https://github.com/yourusername/restaurant-landing",
    demo: "",
    screenshots: [],
    challenges: "Creating fluid responsive layouts and smooth CSS animations without a framework.",
    learnings: "Advanced CSS Grid, Flexbox, CSS custom properties, and responsive design patterns.",
    futureImprovements: "Add online reservation system with Node.js backend.",
    year: 2026,
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    shortDesc: "This portfolio — built with React, Tailwind CSS, and Framer Motion animations.",
    description:
      "A production-grade, fully scalable developer portfolio designed with a data-driven architecture. New projects, skills, and certifications can be added by editing data files alone.",
    problem: "Most developer portfolios are static and hard to maintain as skills grow.",
    solution:
      "Built with a component-based React architecture where all content is driven from structured data files — no UI changes needed to add new content.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    category: "frontend",
    featured: true,
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.vercel.app",
    screenshots: [],
    challenges: "Creating a scalable architecture that doesn't require component modifications for content updates.",
    learnings: "Data-driven UI design, component composition, Framer Motion animation patterns.",
    futureImprovements: "Add blog section with MDX support and CMS integration.",
    year: 2026,
  },
  // ─── ADD MORE PROJECTS BELOW ────────────────────────────────
  // {
  //   id: "unique-id",
  //   title: "Project Name",
  //   shortDesc: "One-liner description",
  //   description: "Detailed description",
  //   problem: "What problem does it solve?",
  //   solution: "How did you solve it?",
  //   techStack: ["React", "Node.js", "MongoDB"],
  //   category: "fullstack",   // "frontend" | "fullstack" | "backend" | "tool"
  //   featured: false,
  //   github: "https://github.com/...",
  //   demo: "https://...",
  //   screenshots: [],
  //   challenges: "...",
  //   learnings: "...",
  //   futureImprovements: "...",
  //   year: 2026,
  // },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
  { id: "tool", label: "Tools & Libraries" },
];
