"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail, MapPin } from "lucide-react";
import { stats } from "@/lib/data/contact";
import { ContactModal } from "@/components/ui/ContactModal";

interface HeroProps {
  lang: string;
  t: {
    name: { first: string; last: string };
    eyebrow: string;
    bio: string;
    available: string;
    location: string;
    downloadCv: string;
    contactMe: string;
    statsYears: string;
    statsProjects: string;
    statsTech: string;
  };
  contactT: { eyebrow: string; heading: string; subtext: string };
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

const particles = [
  { left: "8%", size: 5, delay: 0, duration: 7, color: "primary" },
  { left: "18%", size: 3, delay: 1.4, duration: 9, color: "accent" },
  { left: "27%", size: 4, delay: 2.6, duration: 8, color: "primary" },
  { left: "41%", size: 3, delay: 0.6, duration: 10, color: "accent" },
  { left: "56%", size: 5, delay: 3.2, duration: 7.5, color: "primary" },
  { left: "68%", size: 3, delay: 1.8, duration: 9.5, color: "accent" },
  { left: "77%", size: 4, delay: 0.2, duration: 8.5, color: "primary" },
  { left: "88%", size: 3, delay: 2.2, duration: 10.5, color: "accent" },
  { left: "94%", size: 5, delay: 4, duration: 7, color: "primary" },
] as const;

export function Hero({ t, contactT }: HeroProps) {
  const [contactOpen, setContactOpen] = useState(false);
  const fullName = `${t.name.first} ${t.name.last}`;
  const statItems = [
    { value: stats.years, label: t.statsYears },
    { value: stats.projects, label: t.statsProjects },
    { value: stats.technologies, label: t.statsTech },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] flex items-center pt-8 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-border) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--color-primary)]/8 blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-[300px] h-[300px] rounded-full bg-[var(--color-primary)]/6 blur-3xl"
          animate={{
            x: [0, 25, -25, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-particle-rise absolute bottom-0 rounded-full"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              backgroundColor:
                p.color === "primary"
                  ? "var(--color-primary)"
                  : "var(--color-accent)",
              opacity: 0.5,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

        {/* ── Left column ── */}
        <div className="max-w-2xl">

          {/* Status badge */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              {t.available}
            </span>
          </motion.div>

          {/* Role eyebrow */}
          <motion.div {...fadeUp(0.05)} className="mb-5">
            <p className="text-base sm:text-lg font-semibold tracking-wide uppercase text-[var(--color-primary)]">
              {t.eyebrow}
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-text)] leading-[1.05] tracking-tight mb-6"
          >
            {t.name.first}
            <br />
            <span
              className="animate-gradient-sweep bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary))",
              }}
            >
              {t.name.last}
            </span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed mb-8 max-w-xl"
          >
            {t.bio}
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.28)} className="flex flex-nowrap items-center gap-2 sm:gap-3 mb-10">
            <motion.a
              href="/cv.pdf"
              download="FE_GabriielK.pdf"
              whileHover={{ scale: 1.05 }}
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
                scale: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[var(--color-primary)] text-white text-xs sm:text-sm font-semibold hover:opacity-90 whitespace-nowrap"
            >
              <Download size={15} className="hidden sm:inline" />
              {t.downloadCv}
            </motion.a>
            <motion.button
              type="button"
              onClick={() => setContactOpen(true)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 border-[var(--color-muted)]/40 text-[var(--color-text)] text-xs sm:text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors whitespace-nowrap"
            >
              <Mail size={15} className="hidden sm:inline" />
              {t.contactMe}
            </motion.button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            {...fadeUp(0.38)}
            className="flex items-start gap-6 border-t border-[var(--color-border)] pt-8"
          >
            {statItems.map((s, i) => (
              <div key={s.label} className="flex items-start">
                <div className="pr-6 max-w-[8.5rem]">
                  <p className="text-2xl font-bold text-[var(--color-text)] leading-none">{s.value}</p>
                  <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-snug">{s.label}</p>
                </div>
                {i < statItems.length - 1 && (
                  <div className="w-px h-10 bg-[var(--color-border)] flex-shrink-0" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — photo ── */}
        <motion.div
          {...fadeUp(0.18)}
          className="flex justify-center md:justify-end"
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotateX: -6, rotateY: 8, scale: 1.03 }}
          >
            {/* Rotating gradient ring */}
            <div
              className="animate-spin-slow absolute -inset-3 rounded-[2.75rem] opacity-70 blur-md"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
              }}
            />

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/20 via-[var(--color-primary)]/8 to-transparent blur-2xl" />

            {/* Photo frame */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden border border-[var(--color-border)] shadow-2xl ring-1 ring-[var(--color-primary)]/10">
              <Image
                src="/images/profile.jpg"
                alt={fullName}
                fill
                className="object-cover object-[center_20%]"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
              />
              {/* Subtle inner vignette */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_24px_rgba(0,0,0,0.08)]" />
            </div>

            {/* Location badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full px-3 py-1.5 shadow-md text-xs text-[var(--color-muted)] whitespace-nowrap">
              <MapPin size={11} className="text-[var(--color-primary)]" />
              {t.location}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
        <span className="animate-bounce-y flex h-8 w-5 items-start justify-center rounded-full border border-current p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </motion.a>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} t={contactT} />
    </section>
  );
}
