import type { Metadata } from "next";
import Image from "next/image";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kedarvijaykulkarni.vercel.app";

export const metadata: Metadata = {
  title: "About | Kedar Kulkarni",
  description:
    "About Kedar Kulkarni - a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Kedar Kulkarni",
    description:
      "About Kedar Kulkarni - a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems.",
    url: `${SITE_URL}/about`,
    images: [{ url: `${SITE_URL}/og-default.png`, width: 1200, height: 630, alt: "About Kedar Kulkarni" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kedman1234",
    title: "About | Kedar Kulkarni",
    description:
      "About Kedar Kulkarni - a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems.",
    images: [`${SITE_URL}/og-default.png`],
  },
};

const skillGroups = [
  {
    category: "Full Stack Development",
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "JavaScript (ES6+)", "Python", "Tailwind CSS", "Chakra UI"],
  },
  {
    category: "AI & Generative AI",
    skills: ["OpenAI API", "Claude API", "Claude Code", "Model Context Protocol (MCP)", "Prompt Engineering", "AI Agents", "Hugging Face", "Ollama", "n8n"],
  },
  {
    category: "Backend & Integration",
    skills: ["REST APIs", "Microservices", "WebSockets", "OAuth2/OIDC", "JWT", "Auth0"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Supabase"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3)", "Heroku", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel"],
  },
  {
    category: "Testing & Security",
    skills: ["Cypress", "Playwright", "Postman", "Snyk", "socket.dev", "GDPR-aligned development"],
  },
];

const certifications = {
  featured: {
    label: "AI & Generative AI - Anthropic (2026)",
    items: [
      "Claude Code in Action",
      "Building with the Claude API",
      "Introduction to Model Context Protocol (MCP)",
      "Introduction to Agent Skills",
    ],
  },
  other: [
    "Prompt Engineering Professional Certification - MFT, Portugal (2025)",
    "GenAI - LLMs & Hugging Face - Cuvette (2025)",
    "API Security Fundamentals - APIsec University (2024)",
    "Learning Docker - LinkedIn Learning (2025)",
    "MongoDB for Node.js Developers - MongoDB University (2018)",
  ],
};

export default function AboutPage() {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Kedar Kulkarni",
    url: `${SITE_URL}/about`,
    jobTitle: "Full-Stack Architect & AI Engineer",
    description:
      "Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms across SaaS, fintech, travel, and AI. Kedar leads GenAI adoption, LLM integrations, and AI-assisted development while staying hands-on across the full stack.",
    image: `${SITE_URL}/images/kedar-3.png`,
    sameAs: [
      "https://github.com/kedarvijaykulkarni",
      "https://www.linkedin.com/in/kedarvijaykulkarni",
      "https://twitter.com/kedman1234",
      "https://medium.com/@kedman1234",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Python",
      "Generative AI",
      "LLM Engineering",
      "Prompt Engineering",
      "AI Agents",
      "Model Context Protocol (MCP)",
      "Cloud Architecture",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />

      {/* Section 1: Hero */}
      <section className="bg-bg-alt pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4">
            About <span className="text-gradient-accent">Kedar Kulkarni</span>
          </h1>
          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
            Full-Stack Architect &amp; AI Engineer building enterprise platforms
            and the AI systems that run them.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink-tertiary tracking-wide">
            Thane, Maharashtra, India &middot; Open to Remote / Hybrid / Relocation
          </p>
        </div>
      </section>

      {/* Section 2: The Story */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
            Hi, I&apos;m Kedar
          </h2>
          <div className="space-y-4 text-base text-ink-secondary leading-relaxed">
            <p>
              I&apos;m a Senior Software Engineer and Full-Stack Architect with
              20+ years designing, building, and modernizing enterprise software
              across SaaS, FinTech, AI, Healthcare, Travel, and Customer
              Experience platforms. I&apos;m hands-on across Node.js, React.js,
              Next.js, TypeScript, Python, AWS, and Heroku - and comfortable
              working across architecture, product engineering, technical
              leadership, and stakeholder management.
            </p>
            <p>
              Over the last few years I&apos;ve gone deep on Generative AI:
              building production applications with OpenAI, Claude, Ollama, and
              Hugging Face, working with prompt engineering, AI agents, and the
              Model Context Protocol (MCP). As Tech Lead at Wcities, I introduced
              AI-assisted development that now drives roughly 80% AI-assisted
              code generation across the team - without cutting corners on
              quality. Earlier, at Mantium AI, I built production LLM
              applications on GPT-3, GPT-4, Cohere, and Whisper, shipping AI
              integrations for Shopify, LinkedIn, Twitter, and WhatsApp.
            </p>
            <p>
              I&apos;m based in Thane, India, and open to remote, hybrid,
              on-site, or relocation work - I hold a valid US B1/B2 visa through
              2034 and I&apos;m an immediate joiner. Most of my recent
              engagements have been consulting placements, so I&apos;m just as
              comfortable stepping into a contract or fractional role as a
              full-time one. If something here resonates, get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Skills & Stack */}
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-10 text-center">
            Skills &amp; stack
          </h2>
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="glass-panel text-sm font-medium text-ink-secondary rounded-full px-4 py-1.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Certifications */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-10 text-center">
            Certifications
          </h2>

          <div className="rounded-2xl border-2 border-accent-border bg-accent-soft p-6 sm:p-8 mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-4">
              {certifications.featured.label}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.featured.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm font-semibold text-ink"
                >
                  <span className="text-accent mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-tertiary mb-4">
              Also certified in
            </h3>
            <ul className="space-y-2">
              {certifications.other.map((item) => (
                <li key={item} className="text-sm text-ink-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Profile */}
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 max-w-sm mx-auto gap-8">
            <div className="glass-panel rounded-2xl p-6 text-center shadow-sm">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <div className="absolute -inset-3 rounded-2xl bg-[var(--glow)] blur-xl pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-accent-border bg-bg-alt">
                  <Image
                    src="/images/kedar-3.png"
                    alt="Kedar Kulkarni, Full-Stack Architect & AI Engineer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-ink">Kedar Kulkarni</h3>
              <p className="text-sm text-accent font-medium mb-3">
                Full-Stack Architect &amp; AI Engineer
              </p>
              <p className="text-sm text-ink-tertiary leading-relaxed mb-4 min-h-[80px]">
                20+ years architecting enterprise platforms - now building the
                AI systems that run them.
              </p>
              <a
                href="https://www.linkedin.com/in/kedarvijaykulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:opacity-80 transition-opacity font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What I do */}
      <section className="bg-bg py-16 sm:py-20">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
            What I do
          </h2>
          <div className="space-y-4 text-base text-ink-secondary leading-relaxed text-left">
            <p>
              I help companies modernize legacy systems into scalable
              full-stack platforms, and I help teams adopt AI - from
              AI-assisted development workflows to production LLM applications
              and agents. I work solo or embedded in a team, as an individual
              contributor or a tech lead.
            </p>
            <p>
              I balance architecture, hands-on engineering, and stakeholder
              communication, with a strong focus on engineering standards,
              security, and dependable delivery.
            </p>
            <p>
              The best way to start a conversation is to{" "}
              <a
                href="mailto:kedarvijaykulkarni@gmail.com"
                className="text-accent hover:opacity-80 transition-opacity"
              >
                send me an email
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
