"use client";

import { motion } from "framer-motion";

export function TeamSection() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-bg-alt overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-none"
        >
          <div className="w-60 h-[300px] rounded-2xl overflow-hidden border border-border">
            <img
              src="/images/kedar-3.png"
              alt="Kedar Kulkarni, Full-Stack Architect and AI Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 min-w-[280px]"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-accent mb-3">
            03 &mdash; ABOUT ME
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-ink mb-5">
            Kedar Kulkarni
          </h2>
          <div className="space-y-4 text-[15.5px] leading-loose text-ink-secondary">
            <p>
              I&apos;m Kedar - a full-stack architect and AI engineer with 20+ years building
              enterprise platforms across SaaS, fintech, travel, and AI. I take systems from
              legacy to modern, and increasingly, from manual to AI-assisted.
            </p>
            <p>
              Recently I&apos;ve been leading GenAI adoption at Wcities - driving ~80%
              AI-assisted code generation - while staying hands-on with React, Next.js,
              Node.js, and Python. I&apos;ve been building with LLMs since the GPT-3 era,
              back before &quot;AI engineer&quot; was a job title.
            </p>
            <p>
              Based in Thane, India, open to remote, hybrid, or relocation work - and
              actively targeting Staff Engineer, Tech Lead, AI Engineer, or Full-Stack
              Architect roles, worldwide. If you&apos;re hiring or have a project in
              mind, get in touch.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/kedarvijaykulkarni"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            LinkedIn &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
