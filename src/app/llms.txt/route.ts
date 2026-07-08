import { getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const postLinks = posts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`
    )
    .join("\n");

  const content = `# Kedar Kulkarni

> Portfolio of Kedar Kulkarni - a Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems. Selected work, writing, and how to get in touch.

## About

Kedar Kulkarni is a Full-Stack Architect & AI Engineer with 20+ years building enterprise platforms across SaaS, fintech, travel, and AI. The site showcases selected work, occasional writing, and a way to get in touch.

## What Kedar does

- Full-stack engineering - React, Next.js, Node.js, TypeScript, and Python
- AI & LLM engineering - OpenAI, Claude, Ollama, and Hugging Face, prompt engineering, AI agents, and MCP
- Cloud & DevOps - AWS, Heroku, Docker, Kubernetes, and CI/CD pipelines
- Databases & APIs - PostgreSQL, MySQL, Redis, and microservices architecture
- Testing & quality - Cypress, Playwright, and API automation
- Technical leadership - tech lead on distributed teams, architecture, and mentoring

## Website

${SITE_URL}

## Blog

${postLinks}

## Key Pages

- [Home](${SITE_URL}): Kedar Kulkarni - Full-Stack Architect & AI Engineer
- [About](${SITE_URL}/about): About Kedar Kulkarni
- [Blog](${SITE_URL}/blog): Notes on full-stack engineering and AI systems
- [RSS Feed](${SITE_URL}/feed.xml): Full-text RSS feed of all blog posts
- [Privacy Policy](${SITE_URL}/privacy): Privacy policy
- [Terms of Service](${SITE_URL}/terms): Terms of service

## Full Content

For complete article text, see: ${SITE_URL}/llms-full.txt

## Contact

- Website: ${SITE_URL}
- Email: kedarvijaykulkarni@gmail.com
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
