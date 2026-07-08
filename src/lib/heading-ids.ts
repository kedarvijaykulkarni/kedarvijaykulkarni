/**
 * Add IDs to h2/h3 tags in HTML string so they're present in server-rendered HTML.
 * This makes heading anchors available to crawlers without client-side JS.
 */
export function addHeadingIds(html: string): string {
  return html.replace(
    /<(h[23])>(.*?)<\/h[23]>/gi,
    (_match, tag: string, text: string) => {
      const id = text
        .replace(/<[^>]*>/g, "") // strip nested HTML
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `<${tag} id="${id}">${text}</${tag}>`;
    }
  );
}
