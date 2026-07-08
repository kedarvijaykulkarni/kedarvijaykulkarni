"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-bg scroll-mt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="font-mono text-xs font-semibold tracking-widest text-accent mb-3">
            04 &mdash; FAQ
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink">
            Quick answers
          </h2>
        </motion.div>

        <div className="space-y-2.5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-bg-elevated border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4.5 sm:py-5"
              >
                <span className="text-[15px] sm:text-base font-semibold text-ink pr-4">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 font-mono text-base text-accent">
                  {openIndex === index ? "\u2013" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 text-[14.5px] leading-relaxed text-ink-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
