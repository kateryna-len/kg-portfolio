import { Send, Globe, Mail, Phone } from "lucide-react";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { contact } from "@/lib/data/contact";

interface ContactProps {
  t: { eyebrow: string; heading: string; subtext: string };
}

const icons = {
  telegram: Send,
  linkedin: Globe,
  email: Mail,
  phone: Phone,
} as const;

export function Contact({ t }: ContactProps) {
  const items = Object.entries(contact) as [keyof typeof contact, (typeof contact)[keyof typeof contact]][];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-[var(--color-surface)]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
            {t.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--color-text)] mb-3">{t.heading}</h2>
          <p className="text-[var(--color-muted)] mb-12 max-w-lg">{t.subtext}</p>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {items.map(([key, item], i) => {
            const Icon = icons[key];
            return (
              <FadeInSection key={key} delay={i * 0.07}>
                <a
                  href={item.href}
                  target={key !== "phone" && key !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                    <Icon size={18} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-muted)]">{item.label}</p>
                    <p className="text-sm font-medium text-[var(--color-text)]">{item.value}</p>
                  </div>
                </a>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
