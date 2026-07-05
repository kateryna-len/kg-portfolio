"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { experience } from "@/lib/data/experience";
import type { Locale } from "@/app/[lang]/dictionaries";

interface ExperienceProps {
  lang: Locale;
  t: { eyebrow: string; heading: string };
}

const levelLabel = {
  junior: { en: "Junior", ua: "Junior" },
  "junior-strong": { en: "Junior Strong", ua: "Junior Strong" },
  middle: { en: "Middle", ua: "Middle" },
};

export function Experience({ lang, t }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.3] dark:opacity-[0.1]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-[380px] h-[380px] rounded-full bg-[var(--color-primary)]/6 blur-3xl"
          animate={{ x: [0, -25, 20, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">{t.heading}</h2>

          <div className="flex items-center gap-2 mb-12">
            <span className="px-3 py-1 rounded-full text-xs font-semibold border border-[var(--color-border)] text-[var(--color-muted)]">
              Junior
            </span>
            <TrendingUp size={15} className="text-[var(--color-primary)]" />
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
              }}
            >
              Middle
            </span>
          </div>
        </FadeInSection>

        <div className="relative">
          {/* Connecting path — vivid at the top (now), muted at the bottom (start) */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-primary), var(--color-accent) 20%, var(--color-border) 85%)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((job, i) => {
              const isCurrent = i === 0;
              const isMiddle = job.level === "middle";
              return (
                <FadeInSection key={`${job.company}-${i}`} delay={i * 0.08}>
                  <div className="relative sm:pl-12">
                    {/* Marker dot */}
                    <span className="absolute left-4 top-7 -translate-x-1/2 hidden sm:flex items-center justify-center">
                      {isCurrent && (
                        <motion.span
                          className="absolute inline-flex w-5 h-5 rounded-full"
                          style={{
                            background:
                              "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                          }}
                          animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <span
                        className="relative w-3 h-3 rounded-full ring-4 ring-[var(--color-bg)]"
                        style={{
                          background: isMiddle
                            ? "linear-gradient(135deg, var(--color-primary), var(--color-accent))"
                            : "var(--color-muted)",
                        }}
                      />
                    </span>

                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative rounded-2xl p-6 bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm overflow-hidden hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 transition-[border-color,box-shadow] duration-300"
                    >
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[3px] opacity-70"
                        style={{
                          background: isMiddle
                            ? "linear-gradient(90deg, var(--color-primary), var(--color-accent))"
                            : "var(--color-muted)",
                        }}
                      />

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                        <div className="flex items-start gap-3">
                          <span
                            className="flex items-center justify-center w-10 h-10 rounded-xl text-white font-bold text-sm flex-shrink-0 shadow-md shadow-[var(--color-primary)]/20"
                            style={{
                              background: isMiddle
                                ? "linear-gradient(135deg, var(--color-primary), var(--color-accent))"
                                : "linear-gradient(135deg, var(--color-muted), var(--color-border))",
                            }}
                          >
                            {job.company.charAt(0)}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                                {job.role[lang]}
                              </h3>
                              {job.previousLevel && (
                                <>
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-[var(--color-border)] text-[var(--color-muted)]">
                                    {levelLabel[job.previousLevel][lang]}
                                  </span>
                                  <TrendingUp size={11} className="text-[var(--color-primary)]" />
                                </>
                              )}
                              <span
                                className={
                                  isMiddle
                                    ? "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide text-white"
                                    : "px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border border-[var(--color-border)] text-[var(--color-muted)]"
                                }
                                style={
                                  isMiddle
                                    ? {
                                        background:
                                          "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                                      }
                                    : undefined
                                }
                              >
                                {levelLabel[job.level][lang]}
                              </span>
                            </div>
                            <p className="text-[var(--color-primary)] font-medium flex items-center gap-1.5 flex-wrap">
                              {job.company}
                              {job.client && (
                                <span className="text-[var(--color-muted)] font-normal">
                                  · {job.client}
                                </span>
                              )}
                              {job.link && (
                                <a
                                  href={job.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${job.company} website`}
                                  className="text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                  <ExternalLink size={13} />
                                </a>
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right flex-shrink-0 pl-[52px] sm:pl-0">
                          <p className="text-sm text-[var(--color-muted)]">{job.period[lang]}</p>
                          <p className="text-sm text-[var(--color-muted)]">{job.location[lang]}</p>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-2 sm:pl-[52px]">
                        {job.achievements.map((a, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-muted)] leading-relaxed">
                            <span className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">▸</span>
                            <span>{a[lang]}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4 sm:pl-[52px]">
                        {job.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
