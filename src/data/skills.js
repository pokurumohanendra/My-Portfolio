// ============================================================
// SKILLS DATA — Add / remove skills by editing this file only
// proficiency: 0–100
// ============================================================

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "FaReact",
    skills: [
      { name: "React", icon: "FaReact", proficiency: 80, color: "#61DAFB" },
      { name: "JavaScript", icon: "SiJavascript", proficiency: 82, color: "#F7DF1E" },
      { name: "HTML5", icon: "FaHtml5", proficiency: 92, color: "#E34F26" },
      { name: "CSS3", icon: "FaCss3Alt", proficiency: 88, color: "#1572B6" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", proficiency: 80, color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "FaNodeJs",
    skills: [
      { name: "Node.js", icon: "FaNodeJs", proficiency: 72, color: "#339933" },
      { name: "Express.js", icon: "SiExpress", proficiency: 70, color: "#71717A" },
      { name: "C#", icon: "SiSharp", proficiency: 65, color: "#239120" },
      { name: ".NET", icon: "SiDotnet", proficiency: 60, color: "#512BD4" },
      { name: "Python", icon: "FaPython", proficiency: 68, color: "#3776AB" },
    ],
  },
  {
    id: "database",
    label: "Database",
    icon: "SiMongodb",
    skills: [
      { name: "MongoDB", icon: "SiMongodb", proficiency: 72, color: "#47A248" },
      { name: "Supabase", icon: "SiSupabase", proficiency: 65, color: "#3ECF8E" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Others",
    icon: "FaTools",
    skills: [
      { name: "TanStack Query", icon: "SiReactquery", proficiency: 70, color: "#FF4154" },
      { name: "Git", icon: "FaGit", proficiency: 78, color: "#F05032" },
      { name: "GitHub", icon: "FaGithub", proficiency: 80, color: "#71717A" },
      { name: "Vite", icon: "SiVite", proficiency: 75, color: "#646CFF" },
      { name: "REST APIs", icon: "TbApi", proficiency: 75, color: "#6366f1" },
    ],
  },
];

// ─── CURRENTLY LEARNING ─────────────────────────────────────
// Add technologies you're actively learning
export const learningNow = [
  { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
  { name: "Next.js", icon: "SiNextdotjs", color: "#71717A" },
  { name: "Docker", icon: "FaDocker", color: "#2496ED" },
  { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
];
