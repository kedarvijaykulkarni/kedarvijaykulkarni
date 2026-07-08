# Portfolio - Project Instructions for Claude Code

## Project Overview

This repo is a **standalone personal portfolio website** for a product builder / engineer (placeholder identity: "Alex Rivera"). It is a public marketing/content site with a homepage, an about page, an author page, and a file-based MDX blog. No authentication, no user accounts, no newsletter, no database. The primary call to action is a single **"Hire me"** button that opens a `mailto:` link.

- **Brand/contact**: Alex Rivera - hello@example.com (placeholders - replace with your own)
- **Deploy**: Vercel auto-deploys on push to `main`
- **Package manager**: pnpm

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (no CSS modules, no styled-components)
- Framer Motion (animations)
- @vercel/analytics
- File-based MDX blog (gray-matter + remark)

No Redis, no Beehiiv, no auth, no external data stores.

## Commands

```bash
pnpm dev          # Local dev server
pnpm build        # Production build
pnpm lint         # ESLint
```

## Project Structure

```
src/
├── app/              # Pages and routes (App Router)
│   ├── api/indexnow/ # Single serverless route - IndexNow ping (daily cron)
│   ├── blog/         # Blog index + [slug] dynamic pages
│   ├── author/       # Author page (alex-rivera)
│   ├── about/        # About page
│   ├── terms/, privacy/  # Legal pages
│   ├── sitemap.ts, robots.ts
│   ├── feed.xml/, llms.txt/, llms-full.txt/   # auto-generated SEO/LLM files
│   └── globals.css   # Tailwind import + brand color theme tokens
├── components/       # React components (Navbar, Footer, Hero, sections, blog)
└── lib/              # Utilities
    ├── mdx.ts        # Blog post loading and parsing
    ├── metadata.ts   # Reusable page metadata generator
    ├── heading-ids.ts
    ├── image-optimizer.ts
    ├── faq-extractor.ts
    └── faq-data.ts

content/
└── blog/             # Published MDX blog posts

public/
├── images/blog/      # Blog cover images (SVG, 1200x630)
└── images/kedar-3.png # Profile avatar placeholder
```

There is **no config layer** - all brand/content is hardcoded directly in the relevant components and pages.

## Blog Posts

Full instructions in `docs/BLOG-INSTRUCTIONS.md`. Key points:

- **Location**: `content/blog/{slug}.mdx` - filename = URL slug
- **Cover image**: `public/images/blog/{slug}.svg` - 1200x630px, always SVG
- **Frontmatter**: title, excerpt, date, tags, category, coverImage, readingTime, author, featured
- **Content rules**: BLUF first paragraph, question-based H2s, structured lists/tables, FAQ section
- **LLM-optimized**: Written for AI citation (structured answers, lists, tables)
- **Author default**: "Alex Rivera"

## Design Conventions

- **Primary color**: Purple `#8b5cf6` with pink accent `#ec4899`
- **Font**: Inter (Google Fonts)
- **Animations**: Framer Motion (fade-in, scale)
- **Component style**: Custom Tailwind components - no UI library (no shadcn, no MUI)
- **Buttons**: Accent pink for the primary CTA, rounded-full
- **Cards**: rounded-2xl, border-gray-100, hover shadow effects
- **Images**: Lazy loading, responsive, border-radius

## Environment Variables

Optional in `.env.local`:
- `NEXT_PUBLIC_SITE_URL` - production domain (drives canonical URLs, sitemap, OG, IndexNow). Falls back to `https://example.com`.

## SEO & LLM Optimization

Every page should include:
- JSON-LD structured data (Person, BlogPosting, FAQ, Breadcrumb)
- Open Graph + Twitter meta tags
- Canonical URLs
- Auto-generated: sitemap.xml, feed.xml, robots.txt, llms.txt

## Do NOT

- Add UI component libraries (shadcn, MUI, Chakra) - use custom Tailwind
- Add authentication libraries - this is a public site
- Add a newsletter, Redis, or any database - the site is intentionally backend-free
- Modify security headers in `next.config.ts` without review
- Commit `.env.local` or any secrets
- Use CSS modules or styled-components - Tailwind only
