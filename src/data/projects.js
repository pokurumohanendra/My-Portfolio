// ============================================================
// PROJECTS DATA — Add new projects here as objects
// No component changes needed — just add to this array
// ============================================================

export const projects = [
  {
    id: "time-for-soul",
    title: "Time For Soul",
    shortDesc:
      "A React-based travel packing list app with dynamic list rendering, sorting, and reusable components.",
    description:
      "A React travel packing list application where users can add items, mark them as packed, sort by status, and track progress. Built to practice component composition and client-side state management without a backend.",
    problem:
      "Packing for a trip usually means a messy paper list or notes app — no structure, no way to see what's still left to pack.",
    solution:
      "Built a single-page React app with a controlled form for adding items, derived stats for packed/total counts, and sorting by input order, description, or packed status — all driven by component state.",
    techStack: ["React", "JavaScript", "CSS3", "HTML5"],
    category: "frontend",
    featured: true,
    github: "https://github.com/pokurumohanendra/Time-For-Soul",
    demo: "https://enjoy-your-trip.netlify.app/",
    screenshots: [],
    challenges:
      "Keeping the list state and derived statistics (packed count, sort order) in sync without introducing unnecessary re-renders or prop drilling.",
    learnings:
      "Component architecture, controlled forms, array state updates (add/toggle/delete/sort) in React, and deploying a CRA build to Netlify.",
    futureImprovements:
      "Persist the list with localStorage, add packing categories, and support multiple trips.",
    year: 2026,
  },
  {
    id: "classy-weather",
    title: "ClassyWeather",
    shortDesc:
      "A React weather app with city search and geolocation, backed by a live weather API.",
    description:
      "A weather forecast app built with React that lets users search any city or use geolocation to fetch real-time conditions and a multi-day forecast from a public weather API.",
    problem:
      "Most quick weather lookups require a full app install or a cluttered site full of ads just to see today's forecast.",
    solution:
      "Built a focused React app that debounces city search, calls a geocoding + weather API to resolve coordinates, and renders current conditions with day-by-day forecast cards.",
    techStack: ["React", "JavaScript", "Weather API", "CSS3"],
    category: "frontend",
    featured: true,
    github: "https://github.com/pokurumohanendra/ClassyWeather",
    demo: "https://classy-weather6.netlify.app/",
    screenshots: [],
    challenges:
      "Handling async API calls cleanly — loading states, race conditions when the user types a new city before the previous request resolves, and graceful error handling for invalid locations.",
    learnings:
      "Working with external REST APIs from React, effect cleanup for async requests, and rendering conditional UI states (loading / error / data).",
    futureImprovements:
      "Add hourly forecast, unit toggle (°C/°F), and cache recent searches.",
    year: 2026,
  },
  {
    id: "omnifood",
    title: "OmniFood",
    shortDesc:
      "A responsive restaurant landing page showcasing modern CSS layout and design patterns.",
    description:
      "A fully responsive restaurant/food-delivery landing page built with semantic HTML5 and modern CSS3 — hero section, feature highlights, testimonials, pricing, and a call-to-action, all without a CSS framework.",
    problem:
      "A restaurant or food brand needs a polished, fast-loading marketing page that looks good on every screen size.",
    solution:
      "Hand-built the layout with CSS Grid and Flexbox, using media queries for a mobile-first responsive breakpoint system and CSS custom properties for consistent spacing and color.",
    techStack: ["HTML5", "CSS3", "CSS Grid", "Flexbox"],
    category: "frontend",
    featured: false,
    github: "https://github.com/pokurumohanendra/OmniFood",
    demo: "https://omnifood-eat-wisely.netlify.app/",
    screenshots: [],
    challenges:
      "Getting complex multi-column sections (pricing, testimonials) to gracefully collapse to a single column on mobile without hardcoding breakpoints per section.",
    learnings:
      "Advanced CSS Grid and Flexbox composition, responsive design without a framework, and structuring a large HTML/CSS project into readable, maintainable sections.",
    futureImprovements:
      "Add a working reservation form and connect it to a backend or form service.",
    year: 2026,
  },
  {
    id: "lisbon-chair-shop",
    title: "Lisbon Chair Shop",
    shortDesc:
      "A modern, responsive landing page UI for a custom chair shop, built with HTML & CSS.",
    description:
      "A product-focused e-commerce landing page for a chair shop, featuring a hero banner, product showcase grid, and responsive layout built entirely with HTML and CSS.",
    problem:
      "Small product-based businesses need an attractive single-page site to showcase what they sell without the overhead of a full e-commerce platform.",
    solution:
      "Designed a clean, image-driven landing page using CSS Grid for the product showcase and Flexbox for navigation and content alignment, tuned for both desktop and mobile.",
    techStack: ["HTML5", "CSS3", "CSS Grid", "Flexbox"],
    category: "frontend",
    featured: false,
    github: "https://github.com/pokurumohanendra/Lisbon-Chair-Shop",
    demo: "https://chairs-for-sale.netlify.app/",
    screenshots: [],
    challenges:
      "Balancing large product imagery with fast perceived load time and a layout that stays visually consistent across breakpoints.",
    learnings:
      "Practical CSS Grid/Flexbox layout patterns for product showcases and building a full page from a design reference.",
    futureImprovements:
      "Add a cart/checkout flow and product filtering.",
    year: 2026,
  },
  {
    id: "movie-rating",
    title: "Movie Rating",
    shortDesc:
      "A minimalist app for organizing, adding, and managing a personal database of favorite movies.",
    description:
      "A vanilla JavaScript app for tracking movies you've watched — add a title, rate it, and manage a running list, all persisted client-side.",
    problem:
      "Remembering which movies you've already watched and how you'd rate them gets messy without a simple, dedicated tool.",
    solution:
      "Built a DOM-driven JavaScript app with functions to add, render, and remove movie entries, using array methods to keep the in-memory list and the rendered UI in sync.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    featured: false,
    github: "https://github.com/pokurumohanendra/Movie-Rating",
    demo: "https://favorite-movie-rating-7.netlify.app/",
    screenshots: [],
    challenges:
      "Keeping the DOM in sync with the underlying data array using plain JavaScript, without a framework's reactivity to fall back on.",
    learnings:
      "DOM manipulation fundamentals, event delegation, and array-driven UI rendering in vanilla JS.",
    futureImprovements:
      "Persist ratings with localStorage and pull posters/metadata from a movie API.",
    year: 2026,
  },
  {
    id: "mini-game",
    title: "Mini Game In Browser",
    shortDesc:
      "A JavaScript browser mini-game featuring player-vs-monster combat, health bars, and an action log.",
    description:
      "A small browser combat game where the player fights a monster with attack and heal actions, tracked through animated health bars and a live action log, with bonus-life mechanics for a bit of extra challenge.",
    problem:
      "Wanted a hands-on way to practice game-style state logic — health, turns, win/lose conditions — using nothing but core JavaScript.",
    solution:
      "Implemented turn-based combat logic in vanilla JS: attack/heal handlers that mutate health state, update health-bar widths dynamically, and log every action for the player to follow.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    category: "frontend",
    featured: false,
    github: "https://github.com/pokurumohanendra/Mini-Game-In-Browser",
    demo: "https://browser-based-mini-game.netlify.app/",
    screenshots: [],
    challenges:
      "Designing game state (health, turns, bonus lives) so win/lose conditions trigger correctly across every edge case, like simultaneous low health.",
    learnings:
      "Event-driven game logic, dynamic style updates for health bars, and structuring game state without a framework.",
    futureImprovements:
      "Add difficulty levels, sound effects, and a two-player mode.",
    year: 2026,
  },
  {
    id: "the-blog",
    title: "The Blog",
    shortDesc:
      "A mini blog site exploring semantic HTML and modern CSS layout, featured on The Code Magazine.",
    description:
      "\"The Basic Language of the Web\" — a small blog-style site built to practice semantic HTML5 structure paired with CSS Flexbox and Grid for layout.",
    problem:
      "Wanted a focused project to practice writing clean, semantic HTML and pairing it with modern CSS layout techniques instead of relying on old float-based layouts.",
    solution:
      "Built the page with semantic tags (article, section, header, nav) and used CSS Grid for the overall page structure with Flexbox for component-level alignment.",
    techStack: ["HTML5", "CSS3", "CSS Grid", "Flexbox"],
    category: "frontend",
    featured: false,
    github: "https://github.com/pokurumohanendra/The-Blog",
    demo: "https://the-mini-blog.netlify.app/",
    screenshots: [],
    challenges:
      "Keeping markup semantic and accessible while still achieving a modern, visually structured layout.",
    learnings:
      "Semantic HTML best practices and combining CSS Grid and Flexbox for real page layouts.",
    futureImprovements:
      "Convert to a data-driven blog with Markdown posts.",
    year: 2026,
  },
  {
    id: "basic-calculator",
    title: "Basic Calculator",
    shortDesc:
      "A minimalistic web-based calculator for fundamental arithmetic, hosted on GitHub Pages.",
    description:
      "The Unconventional Calculator — a clean, focused calculator web app built with HTML, CSS, and JavaScript, handling the four basic arithmetic operations through a simple, user-friendly interface.",
    problem:
      "Wanted a self-contained project to practice core JavaScript logic — parsing input, handling operator precedence, and updating a live display.",
    solution:
      "Built the calculator's logic in vanilla JavaScript, wiring button clicks to update an expression string and evaluate results, styled with plain CSS for a clean interface.",
    techStack: ["JavaScript", "HTML5", "CSS3"],
    category: "tool",
    featured: false,
    github: "https://github.com/pokurumohanendra/basic-calculator",
    demo: "https://pokurumohanendra.github.io/basic-calculator/",
    screenshots: [],
    challenges:
      "Handling edge cases in input parsing — chained operators, decimal points, and clearing/backspacing state correctly.",
    learnings:
      "Core JavaScript event handling and state management for a small interactive UI, plus deploying a static site via GitHub Pages.",
    futureImprovements:
      "Add keyboard input support and a calculation history.",
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
