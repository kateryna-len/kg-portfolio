# Technical Specification – Personal Portfolio / Resume Website

## 1. Overview

A single-page, bilingual (UA/EN) portfolio website for Kateryna Gabriiel, a Frontend Developer, built to support job applications. The site presents her profile, technical skills, work experience, and portfolio in a scrollable one-pager with light/dark theme support.

### Core Features

- One-page layout with smooth scroll navigation between sections
- Light/dark theme toggle
- Language toggle (UA/EN)
- CV download (PDF/Word)
- Static content — no backend, no database, no contact form submission handling
- Contact via external links only (Telegram, LinkedIn, Email)

### Tech

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Deployment: Vercel
- No database, no auth, no server-side API routes (fully static/SSG)

## 2. Architecture

### 2.1 High-Level Architecture

- **Frontend only:** Next.js App Router, statically generated (SSG) for fast load and easy Vercel deployment
- **No backend layer:** all content is local (hardcoded or sourced from local JSON/TS data files), no DB, no auth
- **i18n:** client-side language switching (UA/EN) via a lightweight i18n approach (e.g. `next-intl` or local JSON dictionaries — implementation detail decided during development)
- **Theming:** light/dark via `next-themes` (CSS variables + Tailwind `dark:` classes)

### 2.2 Application Layers

**Presentation layer**

- Single route (`/`) composed of stacked sections, each with its own component
- TailwindCSS for styling, mobile-first responsive design

**Content layer**

- Local structured data (TS/JSON) for skills, experience, and projects — no API calls, no CMS
- Static asset for CV file (PDF/Word) in `public/`

## 3. Functional Requirements

### 3.1 Navigation

- Sticky header with section links: About, Skills, Experience, Portfolio, Contact
- Smooth scroll to section on click
- Active section highlight on scroll (optional enhancement)
- Theme toggle (light/dark) and language toggle (UA/EN) in header

### 3.2 Hero / About Me Section

- Name, role title: "Frontend Developer (React / Next.js / TypeScript)"
- Short bio (from CV "About Me")
- Profile photo
- CTA buttons: "Download CV", "Contact me" (scrolls to contact section)

### 3.3 Skills Section

Grouped by category, matching CV structure:

- Languages: JavaScript (ES6+), TypeScript
- Frontend: React, Next.js, React Native
- State Management: Zustand, Redux, Redux Toolkit
- Styling: HTML, CSS, SCSS, Tailwind CSS, Material UI, Styled Components, Radix UI
- Forms & UI: React Hook Form, responsive design, component-based architecture, pixel-perfect implementation
- API & Integrations: REST API, Axios, Fetch API, WebSockets, Stripe, SendGrid, Nylas, Firebase
- Tools: Git, GitHub, Figma, Postman, ESLint, Prettier, Cursor, OpenAI Codex, Claude
- Soft Skills: team collaboration, clear communication, attention to detail, problem-solving, adaptability, time management

Rendered as grouped badge/chip lists or cards per category.

### 3.4 Experience Section

Reverse-chronological list of roles, each with: company name, role/period, optional company link, achievements (bullet list), technologies used (tag list).

| Company                     | Period            | Public link                                                |
| --------------------------- | ----------------- | ---------------------------------------------------------- |
| One Platform                | 06.2025 – Present | https://oneplatform.club/uk                                |
| VRB Tech (AusLaw Concierge) | 04.2024 – 05.2025 | https://www.auslawconcierge.com.au/ (NDA — no screenshots) |
| Crown Softs                 | 09.2023 – 04.2024 | NDA — no public link                                       |
| WiseVision (ENGINUTY)       | 12.2022 – 06.2023 | NDA — no public link                                       |

Each entry includes the achievements and technology stack as listed in the CV (see Section 8 below for full content).

### 3.5 Portfolio / Projects Section

- Only **One Platform** has public visibility (live link, can be embedded as a card/preview link — no screenshots required unless later provided)
- Other projects (AusLaw Concierge, Crown Softs, WiseVision) shown as **text-only project cards**: project name, role/period, short description, tech stack — explicitly marked "Details under NDA" — no screenshots, no live links (except AusLaw Concierge's public marketing site link, which may be shown without implying it's a demo of her specific work)
- Structure should support adding screenshots/case studies later without a redesign (each project card data shape includes an optional `images` field for future use)

### 3.6 Education Section

- Lviv educational scientific institute of the Banking University — Finance and Credit (consulting), master's degree (09.2014 – 12.2019)
- SoftServe IT Academy — Web-UI Club, Node.js Practical Course
- Udemy courses: React 18 Tutorial and Projects Course, Clean Code, Mastering TypeScript, React Native: Mobile App Development (CLI)

### 3.7 Languages Section

- English – Intermediate (B1)
- Ukrainian – Native

### 3.8 Contact Section

- No contact form / no submission handling
- Static links: Telegram (@Kateryna_Gabriiel), LinkedIn, Email (katerynagabriiel@gmail.com), Phone (+38 097 90-69-606), Location (Lviv, Ukraine)
- Each link opens the respective app/client (`mailto:`, `tel:`, `https://t.me/...`, LinkedIn URL)

### 3.9 CV Download

- "Download CV" button available in Hero section and/or header
- Links directly to a static file in `public/cv/` (PDF and/or Word, per language if both versions exist)

## 4. Non-Functional Requirements

**Performance**

- Fully static (SSG) — should load and become interactive in under ~1s on typical connections
- Lighthouse performance score target: 90+

**Accessibility**

- Semantic HTML, sufficient color contrast in both themes
- Keyboard-navigable nav and theme/language toggles

**SEO**

- Meta tags (title, description, OG tags) reflecting name + role
- `lang` attribute updates with language toggle (or locale-based routing if `next-intl` routing is used)

**Maintainability**

- All content (skills, experience, projects, education) stored as typed local data (not hardcoded inline in JSX) so updates don't require touching component logic
- Translation strings centralized (not scattered inline) to keep UA/EN in sync

**UX**

- Mobile-first responsive layout
- Theme and language preference persisted (e.g. via `localStorage`) across visits

## 5. Data Model (Local, No DB)

Since there is no backend or database, content lives in typed local data files, e.g. `lib/data/`.

### 5.1 Types

```typescript
export type SkillCategory = {
  category: string; // e.g. "Frontend"
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  projectName?: string; // e.g. "AusLaw Concierge"
  link?: string; // public link if available
  isNda: boolean;
  periodStart: string; // "2025-06"
  periodEnd: string | "present";
  achievements: string[];
  technologies: string[];
};

export type ProjectEntry = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link?: string;
  isNda: boolean;
  images?: string[]; // optional, for future screenshots
};

export type EducationEntry = {
  institution: string;
  program: string;
  period: string;
  type: "degree" | "course";
};
```

### 5.2 Translation Strings

Stored per-locale (`en.json`, `uk.json`) covering: nav labels, section headings, hero bio text, CTA button labels, contact labels. Structured content (experience achievements, skill names) may stay in English-only or be duplicated per locale depending on whether full bio/achievement translation is desired (to be decided — default assumption: UI chrome is translated, CV-sourced content can initially stay in English with translation added incrementally).

## 6. Frontend – Pages & Components

### 6.1 Routes

- `/` — the entire one-page site (all sections), or `/[locale]` if using `next-intl` locale-prefixed routing

### 6.2 Layout & Navigation

- `app/layout.tsx` — root layout, theme provider, font setup
- `components/Header.tsx` — sticky nav, theme toggle, language toggle, scroll links

### 6.3 Section Components

- `components/sections/Hero.tsx`
- `components/sections/Skills.tsx`
- `components/sections/Experience.tsx`
- `components/sections/Portfolio.tsx`
- `components/sections/Education.tsx`
- `components/sections/Contact.tsx`

### 6.4 Shared Components

- `components/ThemeToggle.tsx` — light/dark switch (uses `next-themes`)
- `components/LanguageToggle.tsx` — UA/EN switch
- `components/SkillBadge.tsx`
- `components/ExperienceCard.tsx`
- `components/ProjectCard.tsx` — handles NDA state (shows "Details under NDA" badge, hides link/images when absent)
- `components/SocialLinks.tsx` — Telegram/LinkedIn/Email/Phone icons+links
- `components/DownloadCvButton.tsx`

## 7. Theming (TailwindCSS + next-themes)

- `tailwind.config.ts` with `darkMode: "class"`
- CSS variables for background/text/accent colors, swapped via `dark:` variant
- Default theme: respect system preference on first visit, then persist user override

## 8. Content Source (from CV)

This section is the canonical content reference for populating components — pulled directly from the provided CV (`FE_GabriielK.pdf`).

**Name / Title:** Kateryna Gabriiel — Frontend Developer (React / Next.js / TypeScript)

**About Me:** Frontend Developer with 3 years of commercial experience building web applications with React, Next.js, and TypeScript. Skilled in developing responsive interfaces, implementing features based on provided designs and existing product patterns, integrating third-party services, and improving user experience based on feedback and business needs.

**Contact:** +38 (097) 90-69-606 · katerynagabriiel@gmail.com · Lviv, Ukraine · Telegram: @Kateryna_Gabriiel · LinkedIn (link to be provided)

**Experience:**

1. **One Platform** (06.2025 – Present) — https://oneplatform.club/uk
   - Develop and maintain product features in a React, Next.js, and TypeScript application
   - Implement new modules and improve existing functionality based on product requirements
   - Translate Figma designs into responsive and consistent user interfaces
   - Collaborate with backend developers and designers to ensure smooth integration and high-quality delivery
   - Participate in product discussions, feature planning, and UI improvements
   - Tech: React, Next.js, TypeScript, WebSockets, Zustand

2. **VRB Tech — AusLaw Concierge** (04.2024 – 05.2025) — https://www.auslawconcierge.com.au/ (NDA on implementation details)
   - Implemented calendar integration for availability management and external calendar connections
   - Built real-time chat and community features using WebSockets, including posts, reactions, comments, statuses, and admin tools
   - Developed features for both web and mobile applications, contributing to a seamless cross-platform experience
   - Tech: React, React Native, Redux, TypeScript, Firebase, WebSockets, Stripe, SendGrid, Nylas, Material UI

3. **Crown Softs** (09.2023 – 04.2024) — NDA, no public link
   - Built the frontend architecture from scratch using Next.js and TypeScript
   - Developed responsive interfaces and integrated frontend functionality with backend services
   - Improved user experience through UI enhancements, animations, and multilingual support
   - Tech: Next.js, TypeScript, JavaScript, Material UI, react-hook-form, react-slick, react-scroll, next-themes

4. **WiseVision — ENGINUTY** (12.2022 – 06.2023) — NDA, no public link
   - Developed reusable UI components to improve consistency and development speed
   - Implemented feature flags and permissions for flexible access management
   - Improved responsiveness, maintainability, and overall frontend performance
   - Tech: React, TypeScript, JavaScript, Material UI, Styled Components, REST API, react-hook-form

**Education:**

- Lviv educational scientific institute of the Banking University — Finance and Credit (consulting), master's degree (09.2014 – 12.2019)
- SoftServe IT Academy — Web-UI Club (24/12/21–14/02/22), Node.js Practical Course
- Udemy — React 18 Tutorial and Projects Course (2023), Clean Code, Mastering TypeScript (2023 Edition), React Native: Mobile App Development (CLI) (2025)

**Languages:** English – Intermediate (B1) · Ukrainian – Native

## 9. Design System

Visual direction based on reference site (mspcompanies.us) — a clean, corporate blue-and-white B2B aesthetic, adapted for a personal portfolio context.

### 9.1 Color Palette

| Token                  | Light mode                  | Dark mode | Usage                                               |
| ---------------------- | --------------------------- | --------- | --------------------------------------------------- |
| `--color-primary`      | `#2B5FCC` (medium blue)     | `#5B8AE6` | Primary buttons, links, active nav, accent headings |
| `--color-primary-dark` | `#1E3A8A` (deep navy)       | `#2B5FCC` | Hover states, gradient end, dark sections           |
| `--color-bg`           | `#FFFFFF`                   | `#0B1220` | Page background                                     |
| `--color-bg-muted`     | `#F5F7FA`                   | `#111A2E` | Alternating section backgrounds (e.g. stats bar)    |
| `--color-text`         | `#0F172A` (near-black navy) | `#E5E9F2` | Body text, headings                                 |
| `--color-text-muted`   | `#64748B`                   | `#94A3B8` | Secondary text, descriptions                        |
| `--color-border`       | `#E2E8F0`                   | `#243049` | Card borders, dividers                              |
| `--color-card-bg`      | `#FFFFFF`                   | `#16213A` | Cards (experience, skills, projects)                |

Gradient accent (used for highlight bands, e.g. "Why Choose Us" section equivalent): linear gradient from `--color-primary` to `--color-primary-dark`, applied to a contrasting full-width band rather than the whole page.

### 9.2 Typography

- **Font family:** A clean, modern sans-serif (e.g. Inter, or system UI stack) for both headings and body — matches the reference site's geometric sans
- **Headings:** Bold/extrabold weight, tight letter-spacing, large scale jump from body text (hero H1 significantly larger than section H2s)
- **Eyebrow labels:** Small, uppercase, letter-spaced, colored in `--color-primary` (e.g. "USA MSP DIRECTORY" style label above hero heading) — used above each major section heading (e.g. "FRONTEND DEVELOPER" eyebrow above name, "EXPERIENCE" eyebrow above section title)
- **Body text:** Regular weight, comfortable line-height (1.6–1.7), `--color-text-muted` for descriptions

### 9.3 Component Style

- **Buttons:**
  - Primary: solid `--color-primary` background, white text, rounded corners (8–10px radius), subtle shadow on hover
  - Secondary/outline: transparent background, `--color-primary` border and text, fills on hover
  - Pill-shaped outline buttons (small, uppercase, letter-spaced text) for secondary CTA rows, matching the reference's "DOWNLOAD FREE SAMPLE" style buttons
- **Cards:** White/dark card background, soft border (`--color-border`), generous padding, subtle shadow, rounded corners (12px), numbered or icon-led headers for process/step-style content (mirrors the "01 / 02 / 03 — How It Works" pattern) — useful for a "How I Work" or process mini-section if added later
- **Stats/numbers:** Large bold numbers with small muted label underneath, arranged in a horizontal row — directly reusable pattern for a "Years of experience / Projects delivered / Technologies" stat strip in the Hero or About section
- **Section eyebrow + heading pattern:** every major section follows `EYEBROW LABEL` (small, colored, uppercase) → large bold heading → muted supporting line, consistent across Hero, Skills, Experience, Portfolio
- **Hero section:** dark/photo-backed hero with overlay (optional — can be simplified to a solid `--color-bg-muted` or gradient for the portfolio version instead of a photo), large bold heading, supporting paragraph, button row, and a stat-card cluster anchored to one side (translatable to a "tech stack at a glance" cluster)
- **Icons:** simple line/duo-tone icons in `--color-primary`, contained in soft rounded square/circle backgrounds (`--color-bg-muted`) — used for skill categories, contact methods, stat icons

### 9.4 Layout Patterns

- Sticky header, logo left, nav center/left, primary CTA button right (maps directly to: name/logo left, section nav center, "Download CV" button right)
- Generous section padding (large vertical spacing between sections, ~96–128px desktop)
- Two-column splits for content + supporting visual/stat block (Hero, "Why Choose Us" equivalent → could map to an "About + Stats" layout)
- FAQ-style accordions (numbered, expandable) — not core to the portfolio spec, but the pattern is available if an "FAQ" or "How I work" section is added later

### 9.5 Theme Toggle Behavior

Reference site is light-only; this project still requires the dark mode variant per Section 3.1/7. Dark mode should preserve the same blue accent identity (`--color-primary`) against a deep navy background rather than pure black, keeping the same corporate-but-personal feel in both themes.

## 10. Open Items / Decisions Needed During Development

- LinkedIn profile URL — needed for Contact/SocialLinks
- Whether CV file is provided as PDF only, Word only, or both (and per-language versions)
- Final choice of i18n library (`next-intl` vs. simple JSON dictionary + context) — does not change content, only implementation
- Profile photo asset (from CV) needs to be re-exported as a clean image file for the Hero section
- Whether One Platform project card should embed a live preview/iframe or just a styled link card (default assumption: styled link card, since iframing third-party sites is unreliable)

## 11. Development Workflow

1. Initialize Next.js app with TypeScript & TailwindCSS
2. Set up `next-themes` for light/dark mode
3. Set up i18n approach (decide library) and create `en.json` / `uk.json` dictionaries
4. Create local data files (`lib/data/experience.ts`, `skills.ts`, `projects.ts`, `education.ts`)
5. Build layout + sticky header with nav, theme toggle, language toggle
6. Build Hero section with photo, bio, CTA buttons
7. Build Skills section (grouped badges)
8. Build Experience section (cards, reverse-chronological)
9. Build Portfolio section (One Platform highlighted, NDA projects as text-only cards)
10. Build Education + Languages sections
11. Build Contact section with external links
12. Add CV file to `public/` and wire up download button
13. Polish: responsive QA, accessibility pass, SEO meta tags, Lighthouse check
14. Deploy to Vercel
