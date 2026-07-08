import { getPostBySlug, getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const postsMeta = getAllPostsMeta();

  // Fetch full content for each post
  const items: string[] = [];
  for (const meta of postsMeta) {
    const post = await getPostBySlug(meta.slug);
    if (!post) continue;

    items.push(`    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(post.author || "Kedar Kulkarni")}</author>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`);
  }

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kedar Kulkarni - Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Notes on full-stack engineering and AI systems.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
