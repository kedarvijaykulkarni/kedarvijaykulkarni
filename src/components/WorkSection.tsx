"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type WorkItem = {
  title: string;
  tag: string;
  company: string;
  description: string;
  outcome: string;
  href?: string;
};

const work: WorkItem[] = [
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
    href: "https://github.com/mantiumai/mantiumclient-js",
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

type OpenSourceProject = {
  name: string;
  description: string;
  links: { label: string; href: string }[];
};

const openSourceProjects: OpenSourceProject[] = [
  {
    name: "react-light-table",
    description: "Lightweight, configurable React data table with sorting and pagination.",
    links: [
      { label: "GitHub", href: "https://github.com/kedarvijaykulkarni/react-light-table" },
      { label: "npm", href: "https://www.npmjs.com/package/@kedman1234/react-light-table" },
    ],
  },
  {
    name: "js_str_utils",
    description: "String utility toolkit for JavaScript projects.",
    links: [{ label: "npm", href: "https://www.npmjs.com/package/js_str_utils" }],
  },
  {
    name: "mantiumclient-js",
    description:
      "Official open-source JS/Node client I architected for the Mantium AI platform - OpenAI, Cohere, and AI21 integrations.",
    links: [{ label: "GitHub", href: "https://github.com/mantiumai/mantiumclient-js" }],
  },
  {
    name: "SFOX-Market-Data",
    description: "Real-time crypto market-data demo built over WebSockets.",
    links: [{ label: "GitHub", href: "https://github.com/kedarvijaykulkarni/SFOX-Market-Data" }],
  },
];

const TABS = ["Client Work", "Open Source"] as const;
type Tab = (typeof TABS)[number];

export function WorkSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Client Work");

  return (
    <section id="work" className="py-24 sm:py-28 bg-bg overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10"
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

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="glass-panel inline-flex items-center rounded-full p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeTab === tab
                    ? "bg-bg-elevated text-ink"
                    : "text-ink-tertiary hover:text-ink-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "Client Work" ? (
            <motion.div
              key="client-work"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            >
              {work.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="glass-panel rounded-2xl p-7 transition-all duration-300 hover:border-accent-border hover:shadow-lg"
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
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
                    >
                      View on GitHub &rarr;
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="open-source"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {openSourceProjects.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
                  className="glass-panel rounded-xl px-5 py-4 hover:border-accent-border transition-colors"
                >
                  <h4 className="font-mono text-sm font-semibold text-ink">{proj.name}</h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                    {proj.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4">
                    {proj.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs font-semibold text-accent hover:opacity-80 transition-opacity"
                      >
                        {link.label} &rarr;
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
