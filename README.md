# 🚀 Developer Portfolio

A production-grade, fully scalable personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Features

- ⚡ Lightning-fast Vite + React setup
- 🎨 Dark-first glassmorphism design with Indigo + Cyan gradient
- 🎭 Smooth Framer Motion animations throughout
- 📱 Fully responsive — mobile, tablet, desktop, ultrawide
- 🔍 Projects with filter, search, and dedicated detail pages
- 📊 Animated skills progress bars with category tabs
- 🗓️ Authentic learning journey timeline
- 📬 Contact form with validation (React Hook Form)
- ♿ Accessible — semantic HTML, keyboard nav, ARIA labels
- 🔎 SEO optimized — meta tags, Open Graph, Twitter Card
- 🚀 Code-split with React.lazy + Suspense for performance
- 🌙 Dark/Light theme toggle with persistence

---

## 📁 Project Structure

```
src/
├── animations/       ← Framer Motion variants (reuse everywhere)
├── assets/           ← Images, profile photo
├── components/
│   ├── layout/       ← Navbar, Footer, LoadingScreen, BackToTop
│   ├── sections/     ← Hero, About, Skills, Projects, Journey, Contact
│   ├── shared/       ← SectionHeading, etc.
│   └── ui/           ← Button, Badge (reusable atoms)
├── config/           ← site.config.js (YOUR personal details go here)
├── context/          ← ThemeContext
├── data/             ← ⭐ EDIT THESE to add content
│   ├── projects.js
│   ├── skills.js
│   ├── timeline.js
│   ├── education.js
│   ├── certificates.js
│   └── socialLinks.js
├── hooks/            ← useScrollSpy, useScrollProgress
├── pages/            ← Home, ProjectDetail, NotFound
└── routes/           ← AppRouter
```

---

## ✏️ How to Customize

### Update Personal Info
Edit [`src/config/site.config.js`](src/config/site.config.js):
```js
export const siteConfig = {
  name: "Your Real Name",
  email: "your@email.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};
```

### Add a New Project
Add an object to [`src/data/projects.js`](src/data/projects.js):
```js
{
  id: "my-app",
  title: "My App",
  shortDesc: "A brief description",
  techStack: ["React", "Node.js", "MongoDB"],
  category: "fullstack",   // "frontend" | "fullstack" | "backend" | "tool"
  featured: true,
  github: "https://github.com/...",
  demo: "https://...",
  year: 2026,
  // ... other fields
}
```

### Add a New Skill
Add to [`src/data/skills.js`](src/data/skills.js):
```js
{ name: "TypeScript", icon: "SiTypescript", proficiency: 70, color: "#3178C6" }
```

### Add a Certificate
Add to [`src/data/certificates.js`](src/data/certificates.js).

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React + Vite | Framework & build tool |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Router v6 | Routing |
| React Icons | Icons |
| React Hook Form | Contact form |
| TanStack Query | API caching |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📦 Deployment

Deploy instantly to **Vercel**:

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Click Deploy — done!

---

## 📝 License

MIT — free to use and adapt.
