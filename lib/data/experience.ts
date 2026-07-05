export type Bilingual = { en: string; ua: string };

export type ExperienceLevel = "junior" | "junior-strong" | "middle";

export type Experience = {
  company: string;
  client?: string;
  link?: string;
  level: ExperienceLevel;
  previousLevel?: ExperienceLevel;
  role: Bilingual;
  period: Bilingual;
  location: Bilingual;
  achievements: Bilingual[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "ONE PLATFORM",
    link: "https://oneplatform.club/uk",
    level: "middle",
    role: { en: "Middle Frontend Developer", ua: "Middle Frontend розробник" },
    period: { en: "Jun 2025 — Present", ua: "Черв 2025 — Сьогодні" },
    location: { en: "Remote", ua: "Дистанційно" },
    achievements: [
      {
        en: "Develop and maintain product features in a React, Next.js, and TypeScript application.",
        ua: "Розробляю та підтримую функціонал продукту в застосунку на React, Next.js та TypeScript.",
      },
      {
        en: "Implement new modules and improve existing functionality based on product requirements.",
        ua: "Впроваджую нові модулі та вдосконалюю наявний функціонал відповідно до вимог продукту.",
      },
      {
        en: "Translate Figma designs into responsive interfaces and independently design visuals for new features.",
        ua: "Перетворюю макети з Figma на адаптивні інтерфейси й самостійно розробляю візуал для нових фіч.",
      },
      {
        en: "Participate in product discussions, feature planning, and UI improvements.",
        ua: "Беру участь в обговоренні продукту, плануванні фіч та покращенні UI.",
      },
    ],
    stack: ["React", "Next.js", "TypeScript", "WebSockets", "Zustand", "shadcn/ui"],
  },
  {
    company: "VRB Tech",
    client: "AusLaw Concierge",
    link: "https://www.auslawconcierge.com.au/",
    level: "middle",
    role: { en: "Middle Frontend Developer", ua: "Middle Frontend розробник" },
    period: { en: "Apr 2024 — May 2025", ua: "Квіт 2024 — Трав 2025" },
    location: { en: "Hybrid", ua: "Гібридний формат" },
    achievements: [
      {
        en: "Implemented calendar integration for availability management and external calendar connections.",
        ua: "Реалізувала інтеграцію календаря для керування доступністю та підключення зовнішніх календарів.",
      },
      {
        en: "Built real-time chat and community features using WebSockets, including posts, reactions, comments, statuses, and admin tools.",
        ua: "Розробила чат у реальному часі та функціонал спільноти на WebSockets: пости, реакції, коментарі, статуси та інструменти адміністрування.",
      },
      {
        en: "Developed features for both web and mobile applications, contributing to a seamless cross-platform experience.",
        ua: "Розробляла функціонал для веб- та мобільного застосунків, забезпечуючи безшовний крос-платформний досвід.",
      },
      {
        en: "Rewrote the product from the legacy codebase to a new, updated version with improved functionality.",
        ua: "Переписала продукт зі старої версії на нову, оновлену, з покращеним функціоналом.",
      },
    ],
    stack: [
      "React",
      "React Native",
      "Redux",
      "TypeScript",
      "Firebase",
      "WebSockets",
      "Stripe",
      "SendGrid",
      "Nylas",
      "Material UI",
    ],
  },
  {
    company: "Crown Softs",
    level: "junior-strong",
    role: { en: "Junior Frontend Developer", ua: "Junior Frontend розробник" },
    period: { en: "Sep 2023 — Apr 2024", ua: "Вер 2023 — Квіт 2024" },
    location: { en: "Outsourcing", ua: "Аутсорс" },
    achievements: [
      {
        en: "Built the frontend architecture from scratch using Next.js and TypeScript.",
        ua: "Побудувала фронтенд-архітектуру з нуля на Next.js та TypeScript.",
      },
      {
        en: "Developed responsive interfaces and integrated frontend functionality with backend services.",
        ua: "Розробляла адаптивні інтерфейси та інтегрувала фронтенд із бекенд-сервісами.",
      },
      {
        en: "Improved user experience through UI enhancements, animations, and multilingual support.",
        ua: "Покращувала UX за допомогою вдосконалень інтерфейсу, анімацій та мультимовної підтримки.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "react-hook-form",
      "react-slick",
      "react-scroll",
      "next-themes",
    ],
  },
  {
    company: "WiseVision",
    client: "ENGINUTY",
    level: "junior",
    role: { en: "Junior Frontend Developer", ua: "Junior Frontend розробник" },
    period: { en: "Dec 2022 — Jun 2023", ua: "Груд 2022 — Черв 2023" },
    location: { en: "Office", ua: "Офіс" },
    achievements: [
      {
        en: "Developed reusable UI components to improve consistency and development speed.",
        ua: "Розробляла перевикористовувані UI-компоненти для узгодженості та швидшої розробки.",
      },
      {
        en: "Implemented feature flags and permissions for flexible access management.",
        ua: "Впроваджувала feature flags та систему прав доступу для гнучкого керування.",
      },
      {
        en: "Improved responsiveness, maintainability, and overall frontend performance.",
        ua: "Покращувала адаптивність, підтримуваність та загальну продуктивність фронтенду.",
      },
    ],
    stack: ["React", "TypeScript", "JavaScript", "Material UI", "Styled Components", "REST API", "react-hook-form"],
  },
];
