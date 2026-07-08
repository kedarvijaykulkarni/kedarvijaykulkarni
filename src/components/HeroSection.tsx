"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg [background-image:linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] [background-size:56px_56px]">
      {/* Radial glow */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full blur-[100px] pointer-events-none bg-[var(--glow)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-28 flex flex-wrap gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 min-w-[300px] max-w-xl"
        >
          <span className="inline-flex items-center gap-2 font-mono text-[11.5px] font-semibold tracking-wide text-accent bg-accent-soft border border-accent-border rounded-full pl-2.5 pr-3.5 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            FULL-STACK ARCHITECT &middot; AI ENGINEER &middot; 20+ YEARS
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-ink">
            I architect platforms
            <br />
            and build the <span className="text-accent">AI</span> that runs them.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-secondary max-w-xl leading-relaxed">
            20+ years building enterprise-grade full-stack systems for Fortune 500s,
            fintech, and travel platforms &mdash; now leading AI-assisted development, LLM
            integrations, and workflow automation. Currently driving ~80% AI-assisted
            code generation as Tech Lead at Wcities.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="mailto:kedarvijaykulkarni@gmail.com"
              className="inline-flex items-center px-6 py-3.5 text-sm font-bold text-cta-text bg-cta hover:bg-cta-hover transition-colors rounded-[10px]"
            >
              Hire me
            </a>
            <a
              href="/#work"
              className="inline-flex items-center px-6 py-3.5 text-sm font-bold text-ink bg-bg-elevated border border-border hover:border-accent transition-colors rounded-[10px]"
            >
              View work
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-ink-tertiary tracking-wide leading-loose">
            Anthropic Certified (2026) &mdash; Claude Code in Action &middot; Claude API &middot;
            Model Context Protocol &middot; Agent Skills
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex-1 min-w-[300px] max-w-[460px]"
        >
          <div className="rounded-2xl overflow-hidden bg-bg-elevated border border-border shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-[11px] text-ink-tertiary">session.log</span>
            </div>
            <div className="px-5 py-5 font-mono text-[13px] leading-loose text-ink-secondary">
              <div>
                <span className="text-accent">$</span> whoami
              </div>
              <div>kedar_kulkarni &mdash; full-stack architect</div>
              <div className="mt-2.5">
                <span className="text-accent">$</span> ai --status
              </div>
              <div>
                assisted_code: <span className="text-cta font-semibold">80%</span> @ Wcities
              </div>
              <div className="mt-2.5">
                <span className="text-accent">$</span> stack --list
              </div>
              <div>Next.js &middot; Node.js &middot; Python &middot; Claude</div>
              <div className="mt-2.5">
                <span className="text-accent">$</span> <span className="opacity-50">_</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
