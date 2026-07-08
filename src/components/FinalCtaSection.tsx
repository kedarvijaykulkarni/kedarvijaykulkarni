"use client";

import { motion } from "framer-motion";

export function FinalCtaSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Let&apos;s build something
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-gray-500 mb-10"
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
            className="inline-flex items-center px-8 py-4 text-sm font-bold text-white bg-accent-500 hover:bg-accent-600 transition-colors rounded-full"
          >
            Hire me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
