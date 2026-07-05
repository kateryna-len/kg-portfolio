import type { Bilingual } from "./experience";

export type Education = {
  institution: Bilingual;
  degree: Bilingual;
  field: Bilingual;
  period: Bilingual;
};

export const education: Education[] = [
  {
    institution: {
      en: "Lviv Educational Scientific Institute of the Banking University",
      ua: "Львівський навчально-науковий інститут Банківського університету",
    },
    degree: {
      en: "Master's Degree",
      ua: "Магістр",
    },
    field: {
      en: "Finance and Credit (Consulting)",
      ua: "Фінанси та кредит (консалтинг)",
    },
    period: { en: "Sep 2014 — Dec 2019", ua: "Вер 2014 — Груд 2019" },
  },
];

export type Course = {
  name: Bilingual;
  period?: string;
};

export type CourseGroup = {
  provider: string;
  courses: Course[];
};

export const courseGroups: CourseGroup[] = [
  {
    provider: "SoftServe IT Academy",
    courses: [
      { name: { en: "Web-UI Club", ua: "Web-UI Club" }, period: "Dec 2021 — Feb 2022" },
      { name: { en: "Node.js Practical Course", ua: "Node.js Practical Course" } },
    ],
  },
  {
    provider: "Udemy",
    courses: [
      { name: { en: "React 18 Tutorial and Projects Course", ua: "React 18 Tutorial and Projects Course" }, period: "2023" },
      { name: { en: "Clean Code", ua: "Clean Code" } },
      { name: { en: "Mastering TypeScript — 2023 Edition", ua: "Mastering TypeScript — 2023 Edition" } },
      { name: { en: "React Native: Mobile App Development (CLI)", ua: "React Native: Mobile App Development (CLI)" }, period: "2025" },
      { name: { en: "Claude Code - The Practical Guide", ua: "Claude Code - The Practical Guide" }, period: "2026" },
    ],
  },
];
