import type { Bilingual } from "./experience";

export type SkillIcon =
  | "ai"
  | "languages"
  | "frontend"
  | "state"
  | "styling"
  | "forms"
  | "api"
  | "tools"
  | "soft";

export type SkillGroup = {
  category: Bilingual;
  icon: SkillIcon;
  items: string[];
  featured?: boolean;
};

export const skills: SkillGroup[] = [
  {
    category: { en: "Working with AI", ua: "Робота з AI" },
    icon: "ai",
    items: ["Cursor", "OpenAI Codex", "Claude"],
    featured: true,
  },
  {
    category: { en: "Languages", ua: "Мови" },
    icon: "languages",
    items: ["JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: { en: "Frontend", ua: "Frontend" },
    icon: "frontend",
    items: ["React", "Next.js", "React Native"],
  },
  {
    category: { en: "State Management", ua: "Керування станом" },
    icon: "state",
    items: ["Zustand", "Redux", "Redux Toolkit"],
  },
  {
    category: { en: "Forms & UI", ua: "Форми та UI" },
    icon: "forms",
    items: [
      "React Hook Form",
      "Responsive Design",
      "Component-Based Architecture",
      "Pixel-Perfect Implementation",
    ],
  },
  {
    category: { en: "Styling", ua: "Стилізація" },
    icon: "styling",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Material UI",
      "Styled Components",
      "Radix UI",
      "shadcn/ui",
    ],
  },
  {
    category: { en: "API & Integrations", ua: "API та інтеграції" },
    icon: "api",
    items: [
      "REST API",
      "Axios",
      "Fetch API",
      "WebSockets",
      "Stripe",
      "SendGrid",
      "Nylas",
      "Firebase",
      "Supabase",
    ],
  },
  {
    category: { en: "Tools", ua: "Інструменти" },
    icon: "tools",
    items: ["Git", "GitHub", "Figma", "Postman", "ESLint", "Prettier"],
  },
  {
    category: { en: "Soft Skills", ua: "Гнучкі навички" },
    icon: "soft",
    items: [
      "Team Collaboration",
      "Clear Communication",
      "Attention to Detail",
      "Problem-Solving",
      "Adaptability",
      "Time Management",
    ],
  },
];
