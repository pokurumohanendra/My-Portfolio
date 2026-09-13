// ============================================================
// SKILLS DATA — Add / remove skills by editing this file only
// ============================================================

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "FaReact",
    skills: [
      { name: "React", icon: "FaReact", color: "#61DAFB" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
      { name: "JavaScript", icon: "SiJavascript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
      { name: "Redux Toolkit", icon: "SiRedux", color: "#764ABC" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "FaNodeJs",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", color: "#339933" },
      { name: "Express.js", icon: "SiExpress", color: "#71717A" },
      { name: "REST APIs", icon: "TbApi", color: "#6366f1" },
      { name: "JWT / Auth", icon: "SiJsonwebtokens", color: "#000000" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "SiPostgresql",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
      { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
      { name: "SQL", icon: "SiPostgresql", color: "#336791" },
    ],
  },
  {
    id: "security",
    label: "Security",
    icon: "FaShieldAlt",
    skills: [
      { name: "Authentication & Authorization", icon: "FaShieldAlt", color: "#f43f5e" },
      { name: "Multi-Tenant Isolation", icon: "FaShieldAlt", color: "#f43f5e" },
      { name: "Webhook Signature Verification", icon: "FaLock", color: "#71717A" },
      { name: "bcrypt", icon: "FaLock", color: "#71717A" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    icon: "FaTools",
    skills: [
      { name: "Docker", icon: "FaDocker", color: "#2496ED" },
      { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088FF" },
      { name: "Git", icon: "FaGit", color: "#F05032" },
      { name: "GitHub", icon: "FaGithub", color: "#71717A" },
      { name: "Postman", icon: "SiPostman", color: "#FF6C37" },
      { name: "Razorpay", icon: "SiRazorpay", color: "#0C2451" },
      { name: "WhatsApp Business API", icon: "SiWhatsapp", color: "#25D366" },
    ],
  },
];

// ─── CURRENTLY LEARNING ─────────────────────────────────────
// Add technologies you're actively learning
export const learningNow = [
  { name: "AWS", icon: "FaAws", color: "#FF9900" },
  { name: "Redis", icon: "SiRedis", color: "#DC382D" },
  { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
  { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
];
