"use client";

import { motion } from "framer-motion";

const features = [
  { code: "FS", title: "Full-Stack Engineering", body: "React, Next.js, Node.js, TypeScript, and Python - architecting and shipping production systems end to end." },
  { code: "AI", title: "AI & LLM Engineering", body: "OpenAI, Claude, Ollama, and Hugging Face - prompt engineering, AI agents, MCP, and workflow automation." },
  { code: "CD", title: "Cloud & DevOps", body: "AWS, Heroku, Docker, Kubernetes, and GitHub Actions - CI/CD pipelines and cloud-native deployments." },
  { code: "DB", title: "Databases & APIs", body: "PostgreSQL, MySQL, Redis, and REST/microservices architecture for high-volume, real-time systems." },
  { code: "QA", title: "Testing & Quality", body: "Cypress, Playwright, and API automation - built QA practices from scratch and mentored engineers." },
  { code: "TL", title: "Technical Leadership", body: "Tech lead on distributed teams - architecture reviews, stakeholder management, and Agile delivery." },
];

export function WhatWeDoSection() {
  return (
    <section className="pt-14 sm:pt-16 pb-24 sm:pb-28 bg-bg-alt overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-accent mb-3">
            01 &mdash; CAPABILITIES
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Skills &amp; stack
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-ink-secondary">
            Full-stack engineering and production AI, backed by 20+ years shipping
            enterprise software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-bg-elevated border border-border p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-[9px] bg-accent-soft font-mono text-xs font-bold text-accent">
                {feature.code}
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
