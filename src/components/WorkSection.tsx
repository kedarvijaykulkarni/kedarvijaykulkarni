"use client";

import { motion } from "framer-motion";

const work = [
  {
    title: "CitySeeker & HotelSeeker Platform Modernization",
    tag: "Full-Stack Architecture · AI",
    company: "Wcities Content Solutions · Tech Lead / Full-Stack Architect · 2025-Present",
    description:
      "Led the end-to-end migration of legacy PHP systems to production-ready Next.js and Node.js for Wcities' global travel and event platforms. Built real-time event ingestion with Node.js WebSockets and an AI-powered POI matching system, while driving AI-assisted development workflows with OpenAI and Ollama.",
    outcome: "~80% AI-assisted code generation without sacrificing engineering quality.",
  },
  {
    title: "Production LLM Applications at Mantium AI",
    tag: "Generative AI",
    company: "Mantium AI · AI / JavaScript Developer · 2021-2022",
    description:
      "Architected an open-source JavaScript NLP client library and built production prompt pipelines on GPT-3, GPT-4, Cohere, AI21, Whisper, and Hugging Face.",
    outcome: "Shipped 4 live AI integrations - Shopify, LinkedIn, Twitter, and WhatsApp.",
  },
  {
    title: "Angular → React Platform Migration",
    tag: "Frontend Architecture",
    company: "APIsec Inc. (via Gun.io) · Frontend Architect · 2024-2025",
    description:
      "Owned the migration of APIsec's enterprise Angular application to React (Vite + Chakra UI), defined the component and state management strategy, and integrated Stripe, Auth0, and Supabase.",
    outcome: "Built a full Cypress E2E suite that cut production regressions and raised release confidence.",
  },
  {
    title: "AI Chatbot Authoring Platform",
    tag: "Enterprise Product Engineering",
    company: "GE Appliances (Fortune 500) · Full-Stack Architect · 2023-2024",
    description:
      "Architected a decision-tree authoring tool powering Salesforce-integrated chatbot workflows for a Fortune 500 appliance manufacturer, deployed on Heroku Private Spaces.",
    outcome: "Shipped a full-stack platform (React, Node.js, PostgreSQL) adopted for enterprise customer service automation.",
  },
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 sm:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6"
        >
          Selected work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-16"
        >
          Enterprise platforms and production AI systems I&apos;ve architected
          and shipped.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {work.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200"
            >
              {item.tag && (
                <span className="text-xs font-semibold tracking-wide uppercase text-brand-500">
                  {item.tag}
                </span>
              )}
              <h3 className="mt-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-400">
                {item.company}
              </p>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
              {item.outcome && (
                <p className="mt-3 text-sm font-semibold text-gray-900 border-t border-gray-100 pt-3">
                  {item.outcome}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
