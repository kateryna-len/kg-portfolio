import { GraduationCap, Award } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { education, courseGroups } from "@/lib/data/education";
import type { Locale } from "@/app/[lang]/dictionaries";

interface EducationProps {
  lang: Locale;
  t: { eyebrow: string; heading: string; coursesHeading: string };
}

export function Education({ lang, t }: EducationProps) {
  return (
    <section id="education" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-12">{t.heading}</h2>
        </FadeInSection>

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <FadeInSection key={`${edu.institution.en}-${i}`} delay={i * 0.08}>
              <div className="flex gap-5 bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <GraduationCap size={22} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold text-[var(--color-text)]">
                      {edu.institution[lang]}
                    </h3>
                    <span className="text-sm text-[var(--color-muted)] flex-shrink-0">
                      {edu.period[lang]}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-muted)] mt-1">
                    {edu.degree[lang]} · {edu.field[lang]}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.1}>
          <h3 className="text-lg font-semibold text-[var(--color-text)] mt-10 mb-5">
            {t.coursesHeading}
          </h3>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {courseGroups.map((group, i) => (
            <FadeInSection key={group.provider} delay={0.15 + i * 0.08}>
              <div className="h-full flex gap-5 bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Award size={22} className="text-[var(--color-primary)]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-semibold text-[var(--color-text)] mb-2">
                    {group.provider}
                  </h4>
                  <ul className="space-y-1.5">
                    {group.courses.map((course) => (
                      <li
                        key={course.name.en}
                        className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                      >
                        <span className="text-[var(--color-primary)] flex-shrink-0 mt-0.5">▸</span>
                        <span>
                          {course.name[lang]}
                          {course.period && (
                            <span className="text-[var(--color-muted)]/70"> ({course.period})</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
