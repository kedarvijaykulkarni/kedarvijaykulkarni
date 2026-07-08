/**
 * Post-processes rendered blog HTML to add loading="lazy",
 * width/height attributes, and decoding="async" to all
 * in-article images (not the cover image).
 */
export function optimizeImages(html: string): string {
  return html.replace(
    /<img\s([^>]*?)>/gi,
    (match, attrs: string) => {
      // Skip if already has loading attribute
      if (/loading\s*=/i.test(attrs)) return match;

      let newAttrs = attrs;

      // Add lazy loading
      newAttrs += ' loading="lazy"';

      // Add decoding async
      if (!/decoding\s*=/i.test(newAttrs)) {
        newAttrs += ' decoding="async"';
      }

      // Add width and height if missing (use standard blog image dimensions)
      if (!/width\s*=/i.test(newAttrs)) {
        newAttrs += ' width="800"';
      }
      if (!/height\s*=/i.test(newAttrs)) {
        newAttrs += ' height="450"';
      }

      return `<img ${newAttrs}>`;
    }
  );
}
