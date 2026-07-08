"use client";

import Link from "next/link";

const links = [
  { label: "GitHub", href: "https://github.com/kedarvijaykulkarni" },
  { label: "X", href: "https://twitter.com/kedman1234" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kedarvijaykulkarni" },
  { label: "Medium", href: "https://medium.com/@kedman1234" },
  { label: "Email", href: "mailto:kedarvijaykulkarni@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Kedar Kulkarni home"
          className="font-mono text-sm font-semibold tracking-tight text-ink"
        >
          <span className="text-accent">K</span>edar <span className="text-accent">K</span>ulkarni
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-ink-tertiary">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
