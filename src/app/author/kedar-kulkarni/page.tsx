import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Kedar Kulkarni | Full-Stack Architect & AI Engineer",
  description: "Kedar Kulkarni is a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems. Read articles on full-stack engineering and AI.",
  alternates: { canonical: "/author/kedar-kulkarni" },
  openGraph: {
    title: "Kedar Kulkarni | Full-Stack Architect & AI Engineer",
    description: "Kedar Kulkarni is a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems. Read articles on full-stack engineering and AI.",
    url: `${SITE_URL}/author/kedar-kulkarni`,
    images: [{ url: `${SITE_URL}/images/kedar-3.png`, width: 400, height: 400, alt: "Kedar Kulkarni, Full-Stack Architect & AI Engineer" }],
  },
};

export default function KedarKulkarniPage() {
  // Get all posts by Kedar
  const allPosts = getAllPostsMeta();
  const authorPosts = allPosts.filter(
    (p) => p.author === "Kedar Kulkarni"
  );

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Kedar Kulkarni",
    url: `${SITE_URL}/author/kedar-kulkarni`,
    image: `${SITE_URL}/images/kedar-3.png`,
    jobTitle: "Full-Stack Architect & AI Engineer",
    description: "Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms and production GenAI systems.",
    sameAs: [
      "https://github.com/kedarvijaykulkarni",
      "https://www.linkedin.com/in/kedarvijaykulkarni",
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

      <section className="bg-gray-100 pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="/images/kedar-3.png"
              alt="Kedar Kulkarni, Full-Stack Architect & AI Engineer"
              width={120}
              height={120}
              className="w-28 h-28 rounded-full object-cover object-top shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                Kedar Kulkarni
              </h1>
              <p className="text-brand-500 font-semibold mt-1">Full-Stack Architect &amp; AI Engineer</p>
              <a
                href="https://www.linkedin.com/in/kedarvijaykulkarni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-brand-500 hover:text-brand-600 font-medium"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-[640px] mx-auto px-4 sm:px-6">
          <div className="space-y-4 text-base text-gray-700 leading-relaxed">
            <p>
              I&apos;m a Full-Stack Architect and AI Engineer with 20+ years building enterprise platforms across SaaS, fintech, travel, and AI. I take systems from legacy to modern, and increasingly, from manual to AI-assisted.
            </p>
            <p>
              I care about clean architecture, secure engineering practices, and shipping software that holds up in production. I&apos;ve led AI-assisted development workflows, built production LLM applications, and modernized enterprise systems for Fortune 500 companies.
            </p>
            <p>
              This is where I write about what I learn building full-stack systems and AI applications. If something resonates, get in touch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-[720px] mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Articles by Kedar ({authorPosts.length})
          </h2>
          <div className="space-y-4">
            {authorPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-base font-bold text-gray-900 hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-gray-400 mt-2">{post.date} · {post.readingTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
