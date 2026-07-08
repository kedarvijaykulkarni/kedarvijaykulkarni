"use client";

import { motion } from "framer-motion";

export function FinalCtaSection() {
  return (
    <section className="relative py-24 sm:py-28 bg-bg-alt overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full blur-[110px] pointer-events-none bg-[var(--glow)]" />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink mb-4"
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-ink-secondary mb-9"
        >
          Have a role or project in mind? I&apos;d love to hear about it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="mailto:kedarvijaykulkarni@gmail.com"
            className="inline-flex items-center px-8 py-4 text-sm font-bold text-cta-text bg-cta hover:bg-cta-hover transition-colors rounded-[10px]"
          >
            Hire me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
