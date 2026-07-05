import { ExternalLink, Lock } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { projects } from "@/lib/data/projects";
import type { Locale } from "@/app/[lang]/dictionaries";

const gradients = [
  "from-blue-500/20 to-indigo-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-cyan-500/20 to-blue-500/20",
  "from-emerald-500/20 to-teal-500/20",
];

interface PortfolioProps {
  lang: Locale;
  t: { eyebrow: string; heading: string; viewProject: string; nda: string };
}

export function Portfolio({ lang, t }: PortfolioProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-12">{t.heading}</h2>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeInSection key={project.title} delay={i * 0.07}>
              <div className="bg-[var(--color-bg)] rounded-2xl border border-[var(--color-border)] overflow-hidden flex flex-col h-full">
                <div className={`h-36 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
                  <span className="text-3xl font-bold text-[var(--color-text)]/20">
                    {project.title[0]}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-[var(--color-text)]">
                      {project.title}
                    </h3>
                    {project.nda ? (
                      <span className="flex items-center gap-1 text-xs text-[var(--color-muted)] bg-[var(--color-surface)] px-2.5 py-1 rounded-full border border-[var(--color-border)] flex-shrink-0">
                        <Lock size={11} />
                        {t.nda}
                      </span>
                    ) : (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-[var(--color-primary)] border border-[var(--color-primary)] px-3 py-1 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors flex-shrink-0"
                      >
                        <ExternalLink size={11} />
                        {t.viewProject}
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1 mb-4">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
