import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kedarvijaykulkarni.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // OpenAI crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      // Anthropic crawlers
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      // Perplexity crawlers
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google AI
      { userAgent: "Google-Extended", allow: "/" },
      // Apple AI
      { userAgent: "Applebot-Extended", allow: "/" },
      // Amazon AI
      { userAgent: "Amazonbot", allow: "/" },
      // Common Crawl (used by many AI models)
      { userAgent: "CCBot", allow: "/" },
      // Default: allow all
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
