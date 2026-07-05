import type { Bilingual } from "./experience";

export type Project = {
  title: string;
  description: Bilingual;
  stack: string[];
  url?: string;
  nda: boolean;
};

export const projects: Project[] = [
  {
    title: "DevBoard",
    description: {
      en: "A real-time developer dashboard for tracking GitHub activity, open PRs, and CI/CD pipeline statuses across multiple repositories.",
      ua: "Дашборд для розробника в реальному часі для відстеження активності GitHub, відкритих PR та статусів CI/CD-пайплайнів у кількох репозиторіях.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React Query", "GitHub API"],
    url: "https://github.com",
    nda: false,
  },
  {
    title: "E-Commerce Platform",
    description: {
      en: "Full-featured e-commerce frontend with product catalog, cart, checkout flow, and order management for a retail client.",
      ua: "Повнофункціональний frontend для e-commerce: каталог товарів, кошик, оформлення замовлення та управління замовленнями для роздрібного клієнта.",
    },
    stack: ["React", "Redux Toolkit", "SCSS", "REST API"],
    nda: true,
  },
  {
    title: "SaaS Analytics Dashboard",
    description: {
      en: "Multi-tenant analytics dashboard with real-time charts, customizable widgets, and role-based access control.",
      ua: "Мультитенантний аналітичний дашборд із графіками в реальному часі, кастомізованими віджетами та рольовим контролем доступу.",
    },
    stack: ["Vue.js", "Vuex", "D3.js", "GraphQL"],
    nda: true,
  },
  {
    title: "Booking System UI",
    description: {
      en: "Appointment booking interface for a healthcare provider, including availability calendar, patient forms, and notification flows.",
      ua: "Інтерфейс бронювання записів для медичного закладу: календар доступності, форми пацієнтів та нотифікації.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "React Hook Form"],
    nda: true,
  },
];
