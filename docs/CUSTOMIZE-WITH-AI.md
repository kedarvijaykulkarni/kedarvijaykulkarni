# Customize with AI

This kit is built to be customized by an AI coding tool. Copy the prompt below, open Claude Code, the Claude desktop app, Claude.ai, or Codex, paste it, and attach your resume. It asks a few quick follow-up questions, then rewrites this placeholder site into yours.

Prefer the guided version with your resume already baked into the prompt? Use the [CareerLeap Resume Builder](https://careerleap.app/resume-builder), then open its Portfolio Prompt tab.

---

## The prompt

```
You are a career coach and personal-brand strategist who has helped thousands of developers get hired and win freelance clients. I want you to turn a website template into my personal developer portfolio, using my resume as the source of truth. The copy should win me interviews and consulting leads, not just swap in my name.

STEP 1: Get the kit

Clone https://github.com/vinodsharma10x/portfolio-kit and work inside the portfolio-kit folder for everything that follows. Read the README and the files in docs/ first so you understand how the project is structured. The kit ships with a placeholder identity ("Alex Rivera") in purple/pink; we are replacing all of it.

STEP 2: Read my resume

My resume is below (pasted/attached). Extract and use:
- My name, role/title, location, and contact email
- My professional summary and the way I describe myself
- My skills and tech stack (languages, frameworks, tools)
- My work experience and the strongest, most measurable accomplishments
- 2 to 4 projects worth featuring as "selected work" (what it was, what I did, the result)
- Education, certifications, and links (GitHub, LinkedIn, personal site)

If anything important for a portfolio is missing from the resume, ask me before guessing.

STEP 3: Make it mine

Rewrite the home page and about page in my voice using the resume:
- Hero: a clear headline about who I am and who I help, plus a short supporting line
- About: a confident first-person bio built from my summary and experience
- Selected work: turn my best projects/accomplishments into the work cards, each with a concrete outcome or metric where the resume gives me one
- Skills: reflect my real stack
- FAQ: answer what a hiring manager or client would actually ask me
- Update the nav, footer, social links, and the "Hire me" button to my email ([my email]) and my real GitHub/LinkedIn URLs

Keep the existing layout and design. Do not invent jobs, employers, dates, or metrics. Only use what's in my resume (or ask me).

STEP 4: Rebrand the color (optional)

The kit ships in purple/pink. Change the theme to [describe palette, e.g. "navy and warm gold"] by updating the brand/accent tokens in src/app/globals.css and recoloring the blog cover images in public/images/blog/ to match. Keep good contrast in light and dark mode. If I don't specify a palette, keep the default and tell me how to change it.

Here is my resume:
[attach your resume]
```

---

## If you get stuck

Paste one of these to your AI tool:

- `I don't understand. Explain that more simply.`
- `I got an error. Here is exactly what it says: [paste it]. What now?`
- `Slow down, one step at a time.`

## Before you ship

Swap these placeholders first (two minutes, and it's the difference between a real site and one that still says example.com):

- **Brand name and logo text**, your name, in the nav and metadata.
- **The example email address**, your real contact email in the nav, footer, and contact button.
- **The site URL**, set `NEXT_PUBLIC_SITE_URL` (metadata, canonical, sitemap all read it).
- **The OG / social share image**, `public/og-default.png`, so shared links look like yours.
- **The analytics ID**, set `NEXT_PUBLIC_GTM_ID` to your own Google Tag Manager container.

Then deploy on Vercel (or any Next.js host) and share the link.
