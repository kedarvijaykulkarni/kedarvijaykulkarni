# Branding & Theme

The visual identity of this portfolio, and how to change it.

## Brand

- **Name:** Alex Rivera (placeholder - replace with your own)
- **Voice:** Alex Rivera - a product builder and engineer
- **Positioning:** A personal portfolio showcasing selected work and occasional writing
- **Tone:** Direct, clear, no hype. Useful over flashy.
- **Tagline in use:** *"Product builder shipping useful things with code and no-code."*

## Color system

Two roles, defined as CSS variables in the `@theme` block of [src/app/globals.css](../src/app/globals.css).

### Primary - Purple
Used for: links, kicker labels, headline highlight words, bullets, icons, nav hover, FAQ toggle, blog filter pills, soft background glows, and blog cover images.

| Token | Hex |
|---|---|
| `--color-brand-50` | `#f5f3ff` |
| `--color-brand-100` | `#ede9fe` |
| `--color-brand-200` | `#ddd6fe` |
| `--color-brand-400` | `#a78bfa` |
| `--color-brand-500` | `#8b5cf6` ← main |
| `--color-brand-600` | `#7c3aed` ← hover |
| `--color-brand-700` | `#6d28d9` |

### Accent - Pink
Used **only** on primary call-to-action buttons (the "Hire me" button), so the action always pops.

| Token | Hex |
|---|---|
| `--color-accent-50` | `#fdf2f8` |
| `--color-accent-100` | `#fce7f3` |
| `--color-accent-200` | `#fbcfe8` |
| `--color-accent-400` | `#f472b6` |
| `--color-accent-500` | `#ec4899` ← main |
| `--color-accent-600` | `#db2777` ← hover |
| `--color-accent-700` | `#be185d` |

Neutrals use Tailwind's default grays (`text-gray-900`, `text-gray-500`, etc.).

## Typography

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts), loaded in [src/app/layout.tsx](../src/app/layout.tsx).
- Weights 300–900 are available. Headlines use 800 (extrabold); body uses 400–600.
- To change the font, swap the Google Fonts `<link>` in `layout.tsx` and update `--font-sans` in `globals.css`.

## Logo

- The nav and footer use a **text wordmark** ("Alex Rivera"), styled in [src/components/Navbar.tsx](../src/components/Navbar.tsx) and [Footer.tsx](../src/components/Footer.tsx).
- `public/logo.png` is referenced only in structured data and should be replaced with your own logo.
- To use an image logo in the nav, replace the text `<Link>` in `Navbar.tsx` with an `<img>`.

## How to recolor the site

Everything routes through the tokens, so a rebrand is a few hex edits in [src/app/globals.css](../src/app/globals.css):

1. Open the `@theme` block.
2. Replace the `--color-brand-*` values (and/or `--color-accent-*`) with a new scale. Easiest source: pick a color at [tailwindcss.com/docs/colors](https://tailwindcss.com/docs/colors) and paste its 50–700 values.
3. Restart the dev server (Tailwind 4 reads `@theme` at startup) and hard-refresh the browser.

**Don't forget the blog cover SVGs.** Files in `public/images/blog/*.svg` hardcode the brand hex values (SVGs can't read CSS variables). Update them to match if you change the brand color - the color map is documented in [BLOG-INSTRUCTIONS.md](BLOG-INSTRUCTIONS.md).
