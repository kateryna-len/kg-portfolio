interface FooterProps {
  name: string;
}

export function Footer({ name }: FooterProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <footer className="border-t border-[var(--color-border)] mt-24 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-center text-sm text-[var(--color-muted)]">
        <span>© {new Date().getFullYear()} {initials}</span>
      </div>
    </footer>
  );
}
