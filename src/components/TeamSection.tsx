"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function TeamSection() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-bg-alt overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-accent mb-3">
            03 &mdash; ABOUT ME
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink">
            From legacy to modern, manual to <span className="text-gradient-accent">AI-assisted</span>.
          </h2>
        </motion.div>

        {/* Manual vs AI-assisted comparison */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-l-2 border-border pl-5"
          >
            <h3 className="font-display text-base font-semibold text-ink-secondary mb-1.5">
              Manual Development
            </h3>
            <p className="text-sm leading-relaxed text-ink-tertiary">
              20+ years of traditional software engineering, designing and shipping
              enterprise platforms across SaaS, fintech, travel, and AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="border-l-2 border-accent pl-5 relative"
          >
            <div className="absolute -left-[1px] top-0 bottom-0 w-[2px] bg-accent blur-[3px] opacity-60" />
            <h3 className="font-display text-base font-semibold text-ink mb-1.5">
              AI-Assisted Systems
            </h3>
            <p className="text-sm leading-relaxed text-ink-secondary">
              Now leading AI-assisted development, LLM integrations, and workflow
              automation &mdash; ~80% AI-assisted code generation as Tech Lead at Wcities.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-none"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[28px] bg-[var(--glow)] blur-2xl pointer-events-none" />
              <div className="relative w-60 h-[300px] rounded-2xl overflow-hidden border border-accent-border">
                <img
                  src="/images/kedar-3.png"
                  alt="Kedar Kulkarni, Full-Stack Architect and AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 min-w-[280px]"
          >
            <div className="glass-panel rounded-2xl p-6 mb-6">
              <p className="text-[15px] leading-relaxed text-ink-secondary italic">
                &ldquo;I&apos;ve been building with LLMs since the GPT-3 era, back before
                &apos;AI engineer&apos; was a job title.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                Kedar Kulkarni
              </p>
            </div>

            <div className="space-y-3 text-[15px] leading-relaxed text-ink-secondary">
              <p>
                Based in Thane, India, open to remote, hybrid, or relocation work - and
                actively targeting Staff Engineer, Tech Lead, AI Engineer, or Full-Stack
                Architect roles, worldwide. If you&apos;re hiring or have a project in
                mind, get in touch.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/about"
                className="inline-block text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
              >
                Read my full story &rarr;
              </Link>
              <a
                href="https://www.linkedin.com/in/kedarvijaykulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
              >
                LinkedIn &rarr;
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
