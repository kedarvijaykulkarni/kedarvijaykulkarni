"use client";

import { motion } from "framer-motion";

const work = [
  {
    title: "CitySeeker & HotelSeeker Platform Modernization",
    tag: "FULL-STACK ARCHITECTURE &middot; AI",
    company: "Wcities Content Solutions &middot; Tech Lead / Full-Stack Architect &middot; 2025-Present",
    description:
      "Led the end-to-end migration of legacy PHP systems to production-ready Next.js and Node.js for Wcities' global travel and event platforms. Built real-time event ingestion with Node.js WebSockets and an AI-powered POI matching system, while driving AI-assisted development workflows with OpenAI and Ollama.",
    outcome: "~80% AI-assisted code generation without sacrificing engineering quality.",
  },
  {
    title: "Production LLM Applications at Mantium AI",
    tag: "GENERATIVE AI",
    company: "Mantium AI &middot; AI / JavaScript Developer &middot; 2021-2022",
    description:
      "Architected an open-source JavaScript NLP client library and built production prompt pipelines on GPT-3, GPT-4, Cohere, AI21, Whisper, and Hugging Face.",
    outcome: "Shipped 4 live AI integrations - Shopify, LinkedIn, Twitter, and WhatsApp.",
  },
  {
    title: "Angular → React Platform Migration",
    tag: "FRONTEND ARCHITECTURE",
    company: "APIsec Inc. (via Gun.io) &middot; Frontend Architect &middot; 2024-2025",
    description:
      "Owned the migration of APIsec's enterprise Angular application to React (Vite + Chakra UI), defined the component and state management strategy, and integrated Stripe, Auth0, and Supabase.",
    outcome: "Built a full Cypress E2E suite that cut production regressions and raised release confidence.",
  },
  {
    title: "AI Chatbot Authoring Platform",
    tag: "ENTERPRISE PRODUCT ENGINEERING",
    company: "GE Appliances (Fortune 500) &middot; Full-Stack Architect &middot; 2023-2024",
    description:
      "Architected a decision-tree authoring tool powering Salesforce-integrated chatbot workflows for a Fortune 500 appliance manufacturer, deployed on Heroku Private Spaces.",
    outcome: "Shipped a full-stack platform (React, Node.js, PostgreSQL) adopted for enterprise customer service automation.",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-28 bg-bg overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-accent mb-3">
            02 &mdash; SELECTED WORK
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Projects &amp; platforms
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-ink-secondary">
            Enterprise platforms and production AI systems I&apos;ve architected and shipped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {work.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-bg-elevated border border-border p-7 transition-shadow duration-300 hover:shadow-lg"
            >
              <span
                className="font-mono text-[11px] font-semibold tracking-wide text-accent"
                dangerouslySetInnerHTML={{ __html: item.tag }}
              />
              <h3 className="font-display mt-2.5 text-lg font-semibold text-ink">
                {item.title}
              </h3>
              <p
                className="mt-1 text-xs font-medium text-ink-tertiary"
                dangerouslySetInnerHTML={{ __html: item.company }}
              />
              <p className="mt-3.5 text-sm leading-relaxed text-ink-secondary">
                {item.description}
              </p>
              <p className="mt-4 pt-4 border-t border-border text-sm font-semibold text-ink">
                {item.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
