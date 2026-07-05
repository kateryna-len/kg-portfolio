"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type NavLabels = {
  about: string;
  skills: string;
  experience: string;
  projects: string;
  education: string;
  values: string;
  contact: string;
};

interface HeaderProps {
  lang: string;
  nav: NavLabels;
}

const navIds = ["about", "skills", "experience", "education", "values"] as const;

export function Header({ lang, nav }: HeaderProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function switchLang() {
    const otherLang = lang === "en" ? "ua" : "en";
    const withoutLocale = pathname.replace(/^\/(en|ua)/, "");
    router.push(`/${otherLang}${withoutLocale || "/"}`);
  }

  function scrollTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <span className="text-base sm:text-lg font-bold text-[var(--color-primary)] tracking-tight select-none">
          KG
        </span>

        <nav className="hidden md:flex items-center gap-6">
          {navIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {nav[id]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={switchLang}
            className="text-xs font-semibold px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            {lang === "en" ? "UA" : "EN"}
          </button>

          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-1.5 sm:p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={17} />
            ) : (
              <Moon size={17} />
            )}
          </button>

          <button
            className="md:hidden p-1.5 sm:p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 z-40 bg-[var(--color-bg)]">
          <nav className="h-full flex flex-col items-center justify-center gap-2">
            {navIds.map((id, i) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.25 }}
                onClick={() => scrollTo(id)}
                className="text-2xl font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-3"
              >
                {nav[id]}
              </motion.button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
