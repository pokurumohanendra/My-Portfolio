// SKILLS DATA — add / remove skills by editing this file only.
// `match` (optional) is the text looked for in each project's title, summary,
// description and tech stack to count the projects that use
// the skill. It defaults to the name; set `match: null` to skip counting.

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Zod" },
      { name: "REST APIs", match: "rest api" },
      { name: "Supabase Auth", match: "supabase" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "SQL", match: "sql" },
    ],
  },
  {
    id: "security",
    label: "Security",
    skills: [
      { name: "Authentication & Authorization", match: "authentication" },
      { name: "Multi-Tenant Isolation", match: "multi-tenant" },
      { name: "Webhook Signature Verification", match: "webhook" },
      { name: "Private S3 Storage", match: "s3" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "AWS Lambda", match: "lambda" },
      { name: "AWS S3", match: "s3" },
      { name: "Netlify" },
      { name: "PWA" },
      { name: "Git", match: null },
      { name: "GitHub", match: null },
      { name: "Razorpay" },
      { name: "WhatsApp Business API", match: "whatsapp" },
    ],
  },
];

// CURRENTLY LEARNING
export const learningNow = [
  { name: "AI application engineering" },
  { name: "LLM integrations" },
  { name: "Forward Deployed Engineering" },
  { name: "Redis" },
];
