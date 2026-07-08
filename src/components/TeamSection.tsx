"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const team = [
  {
    name: "Kedar Kulkarni",
    role: "Full-Stack Architect & AI Engineer",
    image: "/images/kedar-3.png",
    linkedin: "https://www.linkedin.com/in/kedarvijaykulkarni",
    bio: [
      "I'm Kedar - a full-stack architect and AI engineer with 20+ years building enterprise platforms across SaaS, fintech, travel, and AI. I take systems from legacy to modern, and increasingly, from manual to AI-assisted.",
      "Recently I've been leading GenAI adoption at Wcities - driving ~80% AI-assisted code generation - while staying hands-on with React, Next.js, Node.js, and Python.",
      "Based in Thane, India, open to remote, hybrid, or relocation work. If you're hiring or have a project in mind, get in touch.",
    ],
  },
];

export function TeamSection() {
  const [openBio, setOpenBio] = useState<string | null>(null);
  const activeMember = team.find((m) => m.name === openBio);

  return (
    <>
      <section className="py-24 sm:py-32 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            About me
          </motion.h2>

          <div className="grid grid-cols-1 max-w-sm mx-auto gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => setOpenBio(member.name)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-xl cursor-pointer"
              >
                {/* Photo */}
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Name + role */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl font-bold">{member.name}</p>
                  <p className="text-white/70 text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center text-lg text-gray-500 italic"
          >
            Full-stack architect building enterprise platforms - and the AI
            systems that run them.
          </motion.p>
        </div>
      </section>

      {/* Small modal card popup */}
      <AnimatePresence>
        {openBio && activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
            onClick={() => setOpenBio(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-10 sm:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenBio(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold leading-none"
              >
                &times;
              </button>
              <img
                src={activeMember.image}
                alt={`${activeMember.name}, ${activeMember.role}`}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 shadow-md"
              />
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">
                {activeMember.name}
              </h3>
              <p className="text-brand-500 font-semibold text-xs uppercase tracking-wider text-center mb-8">
                {activeMember.role}
              </p>
              <div className="space-y-4 text-gray-600 text-sm leading-loose text-left">
                {activeMember.bio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {activeMember.linkedin && (
                <div className="mt-6 text-center">
                  <a
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-500 hover:text-brand-600 font-medium"
                  >
                    LinkedIn →
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
