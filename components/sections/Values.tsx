"use client";

import { useState } from "react";
import { Quote, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { ContactModal } from "@/components/ui/ContactModal";
import { manifesto } from "@/lib/data/values";
import type { Locale } from "@/app/[lang]/dictionaries";

interface ValuesProps {
  lang: Locale;
  t: { eyebrow: string; heading: string; cta: string };
  contactT: { eyebrow: string; heading: string; subtext: string };
}

export function Values({ lang, t, contactT }: ValuesProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="values" className="relative py-20 px-4 sm:px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/3 -translate-x-1/2 w-[560px] h-[560px] rounded-full bg-[var(--color-primary)]/6 blur-3xl"
          animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-[var(--color-accent)]/6 blur-3xl"
          animate={{ x: [0, -25, 25, 0], y: [0, 20, -15, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <FadeInSection className="text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-12">
          {t.heading}
        </h2>
      </FadeInSection>

      <FadeInSection delay={0.1} className="max-w-3xl mx-auto">
        {/* Glowing gradient frame */}
        <div className="relative rounded-[2rem] p-px overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative rounded-[2rem] bg-[var(--color-bg)] px-6 py-14 sm:px-16 sm:py-16 text-center overflow-hidden">
            {/* Watermark quote */}
            <Quote
              size={160}
              strokeWidth={1}
              className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-[var(--color-primary)]/[0.06] sm:left-8 sm:translate-x-0"
            />

            <div className="relative space-y-6">
              {manifesto.paragraphs.map((p, i) => (
                <FadeInSection key={i} delay={0.15 + i * 0.08}>
                  <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed">
                    {p.lead && (
                      <span className="font-semibold text-[var(--color-text)]">
                        {p.lead[lang]}
                      </span>
                    )}
                    {p.text[lang]}
                  </p>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.3}>
              <div className="relative mt-10 pt-8 border-t border-[var(--color-border)]">
                <p
                  className="text-lg sm:text-xl font-semibold leading-snug bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, var(--color-primary), var(--color-accent))",
                  }}
                >
                  {manifesto.closing[lang]}
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.38}>
              <motion.button
                type="button"
                onClick={() => setContactOpen(true)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                animate={{
                  boxShadow: [
                    "0 10px 25px -5px color-mix(in srgb, var(--color-primary) 35%, transparent)",
                    "0 10px 30px 2px color-mix(in srgb, var(--color-primary) 55%, transparent)",
                    "0 10px 25px -5px color-mix(in srgb, var(--color-primary) 35%, transparent)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full text-white text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                }}
              >
                {t.cta}
                <ArrowRight size={16} />
              </motion.button>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} t={contactT} />
    </section>
  );
}
