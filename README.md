# Portfolio

Personal portfolio built with React 19, Vite, Tailwind CSS v4 and Framer Motion.

## Features

- Light and dark themes (follows the system until the visitor chooses)
- Command palette (`Ctrl/⌘ + K`) to jump to sections, projects and actions
- Projects list with type filters, search (press `/`), screenshot previews and case-study pages (architecture diagram and key decisions)
- Writing section with short technical posts
- Live "recently active on GitHub" block from the public GitHub API
- Skills linked to projects: select a skill to see the projects that use it
- Accessible by default: skip link, labelled forms, keyboard navigation, reduced-motion support
- Per-page titles and descriptions, Open Graph image, and JSON-LD structured data
- Optional live view / like / share counter backed by Supabase

## Project structure

```
src/
├── animations/    shared Framer Motion variants
├── components/
│   ├── layout/    Layout, Navbar, Footer, BackToTop
│   ├── sections/  Hero, About, Experience, Projects, Skills, Education, Journey, Writing, Contact
│   ├── shared/    ArchitectureDiagram, CommandPalette, GitHubActivity, ProjectThumb, Reveal, SectionHeading, Seo, EngagementStats
│   └── ui/        Button, Badge, BulletList, ExternalLink, InstitutionMark, RowItem, Section
├── config/        site.config.js (name, email, links, SEO)
├── context/       Theme, Palette and ProjectFilter providers (+ contexts.js)
├── data/          navigation, projects, caseStudies, posts, skills, experience, education, timeline, socialLinks
├── hooks/         context hooks, useSectionNav, useCopyToClipboard, scroll hooks
├── lib/           projects, github, scroll helpers, supabase client
├── pages/         Home, ProjectDetail, PostDetail, NotFound
└── routes/        AppRouter
public/
├── projects/      project screenshots (1280×800 JPEG)
├── og-image.png   social preview (1200×630)
└── Pokuru_Mohanendra_Resume.pdf
```

## Updating content

Everything visible comes from a data file, so no component changes are needed.

| To change | Edit |
|-----------|------|
| Name, email, location, social links, SEO | `src/config/site.config.js` |
| Add a project | `src/data/projects.js` (see the field notes at the top of the file) |
| Add an architecture diagram and key decisions to a project | `src/data/caseStudies.js`, keyed by project id |
| Publish a post | add an object to `src/data/posts.js` |
| Skills | `src/data/skills.js` |
| Jobs, education, timeline | `src/data/experience.js`, `education.js`, `timeline.js` |
| Section order or nav labels | `src/data/navigation.js` |
| Colours | CSS variables at the top of `src/index.css` |

To keep a repository out of the live GitHub block, add its name to `hiddenRepos` in the same file.

Adding `leetcode` or `twitter` to `siteConfig.social` shows the link in the footer, contact section and command palette automatically.

### Project screenshots

Put a 1280×800 image in `public/projects/` and set `image: "/projects/<id>.jpg"` on the project. Projects without an image show a typographic placeholder.

## Scripts

```bash
npm install
npm run dev       # development server
npm run build     # production build
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Environment

Copy `.env.example` to `.env` and add your Supabase URL and anon key to enable the live counter. Without them the counter is hidden. The table and functions are in `supabase/schema.sql`.

## Deployment

Deploy to Vercel or Netlify. Before going live, replace `https://yourportfolio.vercel.app` in `index.html`, `src/config/site.config.js` and `public/robots.txt` with the real domain so canonical links and the social preview resolve.
