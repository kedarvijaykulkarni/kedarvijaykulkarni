"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="font-mono text-[11px] font-semibold tracking-wider text-ink-secondary bg-bg-elevated border border-border rounded-full px-3.5 py-2 hover:border-accent transition-colors"
    >
      {dark ? "DARK" : "LIGHT"}
    </button>
  );
}
