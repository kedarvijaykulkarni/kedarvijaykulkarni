import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection";
import { WorkSection } from "@/components/WorkSection";
import { TeamSection } from "@/components/TeamSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { getFeaturedPosts } from "@/lib/mdx";
import { faqs } from "@/lib/faq-data";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const recentPosts = getFeaturedPosts();

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Kedar Kulkarni",
    url: SITE_URL,
    jobTitle: "Full-Stack Architect & AI Engineer",
    description:
      "Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms across SaaS, fintech, travel, and AI - now leading GenAI adoption, LLM integrations, and AI-assisted development.",
    image: `${SITE_URL}/images/kedar-3.png`,
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

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Kedar Kulkarni",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#person` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HeroSection />
      <WhatWeDoSection />
      <WorkSection />
      <TeamSection />
      <FaqSection />

      {/* Blog links section for internal linking + SEO juice */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                From the Blog
              </h2>
              <p className="mt-2 text-gray-500">
                Notes on full-stack engineering, AI systems, and shipping
                production software.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {post.coverImage ? (
                    <div className="aspect-video bg-gray-100 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-brand-50 to-brand-50 flex items-center justify-center">
                      <span className="text-4xl font-extrabold text-brand-200">K</span>
                    </div>
                  )}
                  <div className="p-5">
                    {post.tags[0] && (
                      <span className="text-xs font-semibold tracking-wide uppercase text-brand-500">
                        {post.tags[0]}
                      </span>
                    )}
                    <h3 className="mt-1 text-base font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
              >
                View all articles &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </>
  );
}
