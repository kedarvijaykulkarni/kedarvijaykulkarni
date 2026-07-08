# Deployment & Go-Live Guide

Step-by-step to take this portfolio from this folder to a live site. The site is built for [Vercel](https://vercel.com), but any Next.js-compatible host works.

---

## 1. Deploy to Vercel

1. Push this project to a GitHub/GitLab repo (or use the Vercel CLI / drag-and-drop).
2. In Vercel, **Import Project**. It auto-detects Next.js - no build config needed.
3. Under **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` → your production domain (e.g. `https://example.com`)
4. Deploy. Every push to the `main` branch auto-deploys.

> The daily IndexNow cron in `vercel.json` runs automatically on Vercel.

---

## 2. Connect the domain

1. In Vercel → **Settings → Domains**, add your domain (and its `www.` variant).
2. Point your registrar's DNS at Vercel as instructed.
3. `next.config.ts` redirects `www.<domain> → <domain>` - update the host values there to match your domain.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain - that one variable controls canonical URLs, sitemap, OG tags, and IndexNow.

---

## 3. Replace placeholder brand assets

These files contain placeholder artwork:

| File | What it is |
|---|---|
| `public/logo.png` | Logo used in JSON-LD structured data |
| `public/og-default.png` | Social-share image (1200×630) shown on every page |
| `public/images/kedar-3.png` | Your profile photo / avatar |
| `src/app/icon.png` | Favicon |
| `src/app/apple-icon.png` | iOS home-screen icon |

Replace them with your own artwork (keep the same filenames). The navigation/footer use a **text logo**, so no image is required there unless you want one.

Also update your name, email, and social links across `src/components/` and the page-level JSON-LD (currently the placeholder "Alex Rivera" / `hello@example.com` / `yourhandle`).

---

## 4. Analytics & verification (optional)

All of these are **off by default** and live in [src/app/layout.tsx](../src/app/layout.tsx), marked with `TODO` comments. Add the IDs and uncomment.

| Tool | Where | What to do |
|---|---|---|
| **Google Tag Manager** | `layout.tsx` (`<head>` script + `<noscript>`) | Replace `GTM-XXXXXXX` with your container ID, uncomment both blocks |
| **Ahrefs Web Analytics** | `layout.tsx` (`<Script>`) | Replace `REPLACE_ME_AHREFS_KEY` with your `data-key`, uncomment |
| **Bing Webmaster** | `layout.tsx` (`<meta>`) | Replace `REPLACE_ME_BING_VERIFICATION`, uncomment |

Vercel Analytics is already active (no setup needed).

---

## 5. IndexNow (optional)

IndexNow instantly notifies Bing/Yandex when content changes. It's wired up but uses a placeholder key.

1. Generate a key at [indexnow.org](https://www.indexnow.org/).
2. In [src/app/api/indexnow/route.ts](../src/app/api/indexnow/route.ts), set `INDEXNOW_KEY` to your key.
3. Rename `public/indexnow-key-2026.txt` to `<your-key>.txt` and make its contents exactly your key.

(The cron will then ping search engines daily.)

---

## 6. Post-deploy verification

After the site is live, confirm:

- [ ] The "Hire me" button opens your email address
- [ ] `https://<your-domain>/sitemap.xml` lists all pages + posts
- [ ] `https://<your-domain>/feed.xml` and `/llms.txt` load
- [ ] Social preview looks right (test a URL in [opengraph.xyz](https://www.opengraph.xyz))
- [ ] Submit the sitemap in Google Search Console & Bing Webmaster Tools
