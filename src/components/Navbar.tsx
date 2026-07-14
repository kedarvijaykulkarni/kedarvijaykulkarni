"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const BRAND_NAME = "Kedar Kulkarni";
const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
const CTA = { label: "Hire me", href: "mailto:kedarvijaykulkarni@gmail.com" };

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-bg/60 backdrop-blur-xl border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="Kedar Kulkarni home"
          className="font-mono text-base font-semibold tracking-tight text-ink"
        >
          <span className="text-gradient-accent">K</span>edar <span className="text-gradient-accent">K</span>ulkarni
        </Link>

        {/* Nav links + toggle + primary CTA */}
        <div className="flex items-center gap-6 sm:gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden sm:inline-flex sm:items-center py-3 text-[11px] font-semibold uppercase tracking-widest text-ink-secondary hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={CTA.href}
            className="text-sm font-bold text-cta-text bg-cta hover:bg-cta-hover transition-colors rounded-full px-4 py-2"
          >
            {CTA.label}
          </a>
        </div>
      </nav>
    </header>
  );
}

export { BRAND_NAME };
