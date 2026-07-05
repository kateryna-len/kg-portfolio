"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Braces,
  MonitorSmartphone,
  GitBranch,
  Palette,
  FormInput,
  Webhook,
  Wrench,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { skills, type SkillIcon } from "@/lib/data/skills";
import type { Locale } from "@/app/[lang]/dictionaries";

interface SkillsProps {
  lang: Locale;
  t: { eyebrow: string; heading: string };
}

const icons: Record<SkillIcon, LucideIcon> = {
  ai: Sparkles,
  languages: Braces,
  frontend: MonitorSmartphone,
  state: GitBranch,
  styling: Palette,
  forms: FormInput,
  api: Webhook,
  tools: Wrench,
  soft: HeartHandshake,
};

const featured = skills.find((g) => g.featured)!;
const regular = skills.filter((g) => !g.featured);

export function Skills({ lang, t }: SkillsProps) {
  const FeaturedIcon = icons[featured.icon];

  return (
    <section
      id="skills"
      className="relative pt-16 pb-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          className="absolute -top-24 left-1/4 w-[420px] h-[420px] rounded-full bg-[var(--color-primary)]/6 blur-3xl"
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-[var(--color-accent)]/8 blur-3xl"
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-12">{t.heading}</h2>
        </FadeInSection>

        {/* Featured — Working with AI */}
        <FadeInSection className="mb-6">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-2xl p-px overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative rounded-2xl bg-[var(--color-bg)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <div className="flex items-center gap-4 flex-shrink-0">
                <motion.span
                  className="flex items-center justify-center w-12 h-12 rounded-2xl text-white flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px 0px color-mix(in srgb, var(--color-primary) 45%, transparent)",
                      "0 0 0 8px color-mix(in srgb, var(--color-primary) 0%, transparent)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                >
                  <FeaturedIcon size={22} strokeWidth={2.25} />
                </motion.span>
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                    {lang === "ua" ? "Актуально сьогодні" : "Relevant today"}
                  </p>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">
                    {featured.category[lang]}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {featured.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-full text-sm font-medium whitespace-nowrap bg-[var(--color-primary)]/8 text-[var(--color-primary)] border border-[var(--color-primary)]/20 transition-colors duration-200 hover:bg-[var(--color-primary)]/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regular.map((group, i) => {
            const Icon = icons[group.icon];
            const wide = group.items.length >= 6;
            return (
              <FadeInSection
                key={group.category.en}
                delay={i * 0.06}
                className={wide ? "sm:col-span-2" : ""}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full rounded-2xl p-6 bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm overflow-hidden hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-[border-color,box-shadow] duration-300"
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                    }}
                  />

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-[var(--color-accent)]/5" />

                  <div className="relative flex items-center gap-3 mb-4">
                    <motion.span
                      whileHover={{ rotate: 8 }}
                      className="flex items-center justify-center w-9 h-9 rounded-xl text-white shadow-md shadow-[var(--color-primary)]/20 flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                      }}
                    >
                      <Icon size={17} strokeWidth={2.25} />
                    </motion.span>
                    <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)]">
                      {group.category[lang]}
                    </h3>
                  </div>

                  <div className="relative flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm whitespace-nowrap bg-[var(--color-surface)] text-[var(--color-text)] border border-[var(--color-border)] transition-colors duration-200 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
