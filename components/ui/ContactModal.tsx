"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Globe, Mail, X } from "lucide-react";
import { contact } from "@/lib/data/contact";

const icons = {
  telegram: Send,
  linkedin: Globe,
  email: Mail,
} as const;

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  t: { eyebrow: string; heading: string; subtext: string };
}

export function ContactModal({ open, onClose, t }: ContactModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  const items = Object.entries(icons).map(([key]) => {
    const k = key as keyof typeof icons;
    return [k, contact[k]] as const;
  });

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-heading"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-8 shadow-2xl"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 rounded-full text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            >
              <X size={18} />
            </button>

            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-2">
              {t.eyebrow}
            </p>
            <h2 id="contact-modal-heading" className="text-2xl font-bold text-[var(--color-text)] mb-2">
              {t.heading}
            </h2>
            <p className="text-sm text-[var(--color-muted)] mb-6">{t.subtext}</p>

            <div className="grid gap-3">
              {items.map(([key, item]) => {
                const Icon = icons[key];
                return (
                  <a
                    key={key}
                    href={item.href}
                    target={key !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-sm transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                      <Icon size={18} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-muted)]">{item.label}</p>
                      <p className="text-sm font-medium text-[var(--color-text)]">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
