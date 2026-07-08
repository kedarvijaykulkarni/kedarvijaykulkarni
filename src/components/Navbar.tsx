"use client";

import Link from "next/link";

const BRAND_NAME = "Kedar Kulkarni";
const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
const CTA = { label: "Hire me", href: "mailto:kedarvijaykulkarni@gmail.com" };

export function Navbar() {
  return (
    <header className="bg-white">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label={`${BRAND_NAME} home`}
          className="text-xl font-extrabold tracking-tight text-gray-900"
        >
          {BRAND_NAME}
        </Link>

        {/* Nav links + primary CTA */}
        <div className="flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden sm:inline text-sm font-semibold text-gray-500 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={CTA.href}
            className="text-sm font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors rounded-full px-4 py-2"
          >
            {CTA.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
