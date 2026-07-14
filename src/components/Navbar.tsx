"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const BRAND_NAME = "Kedar Kulkarni";
const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
const CTA = { label: "Hire me", href: "mailto:kedarvijaykulkarni@gmail.com" };

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            className="hidden sm:inline-block text-sm font-bold text-cta-text bg-cta hover:bg-cta-hover transition-colors rounded-full px-4 py-2"
          >
            {CTA.label}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="sm:hidden flex items-center justify-center w-11 h-11 -mr-2 text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="sm:hidden overflow-hidden border-t border-border bg-bg"
          >
            <div className="px-4 py-2 flex flex-col">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center min-h-11 text-sm font-semibold text-ink-secondary hover:text-ink transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={CTA.href}
                onClick={() => setMenuOpen(false)}
                className="my-3 text-center text-sm font-bold text-cta-text bg-cta hover:bg-cta-hover transition-colors rounded-full px-4 py-3"
              >
                {CTA.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { BRAND_NAME };
