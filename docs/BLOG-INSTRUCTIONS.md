# Blog Post Creation Instructions

These instructions are for creating and publishing blog posts on this portfolio site. The blog covers notes on building and shipping products with code and no-code.

## Repository

- **Branch**: `main` (or open a PR - your choice)
- **Deploy**: Vercel auto-deploys on push to `main`

> Note: Use your own Git credentials / SSH key for pushing. Do not store access tokens in this file or any committed file.

---

## Step 1: Create the Blog Post MDX File

### File location

```
content/blog/{slug}.mdx
```

The filename becomes the URL slug: `content/blog/my-post-title.mdx` → `example.com/blog/my-post-title`

### Frontmatter schema (required)

```yaml
---
title: "Your Post Title Here"
excerpt: "A 1-2 sentence summary of the post. This appears in blog cards, meta description, and RSS feed."
date: "YYYY-MM-DD"
tags: ["tag1", "tag2", "tag3"]
category: "category-slug"
coverImage: "/images/blog/{slug}.svg"
readingTime: "X min read"
author: "Alex Rivera"
featured: false
---
```

### Field rules

| Field         | Required | Notes                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `title`       | Yes      | Keep under 70 characters for SEO                                                                  |
| `excerpt`     | Yes      | 120-160 characters. Write as a factual summary, not marketing copy                                |
| `date`        | Yes      | ISO format: `YYYY-MM-DD`                                                                          |
| `tags`        | Yes      | 3-5 lowercase, hyphenated tags. Reuse existing tags when possible                                 |
| `category`    | Yes      | Lowercase, hyphenated. Examples: `guides`, `notes`                                                |
| `coverImage`  | Yes      | Path to SVG in `/public/images/blog/`. Must match the slug                                        |
| `readingTime` | Yes      | Estimate: ~200 words per minute                                                                   |
| `author`      | Yes      | Default: `"Alex Rivera"`                                                                          |
| `featured`    | No       | Set `true` only for cornerstone content                                                           |

### Content structure (LLM-optimized)

Follow these rules so the post gets cited by ChatGPT, Perplexity, Claude, and Google AI Overviews:

1. **BLUF (Bottom Line Up Front)**: The first paragraph (30-60 words) must directly answer the core question of the post. Do not start with a story or context-setting paragraph.

2. **Question-based H2 headings**: Use headings that mirror natural language queries.
   - Good: `## When should you use no-code?`
   - Bad: `## No-code Information`

3. **Answer targets**: Every question-based H2 should have a 40-60 word direct answer paragraph immediately after it, before any story or context. This is what AI Overviews and ChatGPT extract.

4. **Use H2 for main sections, H3 for subsections**. Never skip levels.

5. **Include specific data** where relevant: numbers, comparisons, concrete examples.

6. **Use structured formats**: numbered lists, bullet points, comparison tables, step-by-step instructions.

7. **Aim for clear, complete posts**: comprehensive content gets more citations than thin posts.

8. **Add an FAQ section** at the end with 3-5 Q&A pairs (`## Frequently Asked Questions`, each question as an H3).

9. **Do NOT use**: vague statements, filler paragraphs, clickbait, or exaggerated claims.

---

## Step 2: Create the Cover Image (SVG)

### File location

```
public/images/blog/{slug}.svg
```

The filename must match the `coverImage` path in frontmatter (without the `/public` prefix).

### Dimensions

**1200 x 630px** - this single size works everywhere (blog cards, OpenGraph, Twitter cards).

### SVG Template

```svg
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f5f3ff"/>
      <stop offset="100%" style="stop-color:#faf5ff"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#8b5cf6"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <circle cx="1050" cy="100" r="180" fill="#8b5cf6" opacity="0.06"/>
  <circle cx="150" cy="530" r="140" fill="#ec4899" opacity="0.06"/>
  <circle cx="900" cy="480" r="100" fill="#8b5cf6" opacity="0.04"/>

  <rect x="100" y="200" width="60" height="4" rx="2" fill="url(#accent)"/>

  <text x="100" y="185" font-family="Inter, system-ui, sans-serif" font-size="18" font-weight="600" fill="#8b5cf6" letter-spacing="3">CATEGORY HERE</text>

  <text x="100" y="270" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="#111827">Title Line One</text>
  <text x="100" y="335" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="#111827">Title Line Two</text>
  <text x="100" y="400" font-family="Inter, system-ui, sans-serif" font-size="52" font-weight="800" fill="url(#accent)">Title Line Three</text>

  <text x="100" y="460" font-family="Inter, system-ui, sans-serif" font-size="20" fill="#6b7280">A short tagline describing the post content</text>

  <text x="100" y="560" font-family="Inter, system-ui, sans-serif" font-size="22" font-weight="700" fill="#111827">ALEX RIVERA</text>
</svg>
```

### Design rules

- **Background**: light purple gradient (`#f5f3ff` → `#faf5ff`)
- **Decorative circles**: keep the same 3 circles on every image for brand consistency
- **Category**: uppercase, purple (`#8b5cf6`), letter-spacing 3
- **Title**: max 3 lines, dark gray (`#111827`), last line uses the purple-pink gradient
- **Note**: covers use the PURPLE primary brand color. The site's accent (pink `#ec4899`) is reserved for call-to-action buttons. These SVG hex values are hardcoded and don't follow the CSS theme, so update them here if you change the brand color.
- **Brand**: "ALEX RIVERA" at bottom-left, always the same
- **No photos** - keep it clean and text-based

---

## Step 3: Verify

After deploying, verify:

1. The post appears at `https://example.com/blog/{slug}`
2. The cover image loads on the blog listing page
3. `sitemap.xml`, `feed.xml`, and `llms.txt` include the new post (auto-generated - no manual action needed)

---

## Quick Reference

### Categories

- `guides`
- `notes`

### Tags

- `side-projects`, `shipping`, `product`, `engineering`, `no-code`
- `internal-tools`, `tools`, `indie`, `ops`

(Reuse existing tags when possible for better filtering.)
