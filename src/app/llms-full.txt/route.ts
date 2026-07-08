import { getPostBySlug, getAllPostsMeta } from "@/lib/mdx";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export async function GET() {
  const posts = getAllPostsMeta();

  const sections: string[] = [];

  sections.push(`# Kedar Kulkarni - Full Content

> Portfolio of Kedar Kulkarni - a Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems.

Website: ${SITE_URL}
Author: Kedar Kulkarni (Full-Stack Architect & AI Engineer)

---
`);

  for (const meta of posts) {
    const post = await getPostBySlug(meta.slug);
    if (!post) continue;

    // Strip HTML tags to get plain text
    const plainText = post.content
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/\s+/g, " ")
      .trim();

    sections.push(`## ${post.title}

URL: ${SITE_URL}/blog/${post.slug}
Published: ${post.date}
Author: ${post.author || "Kedar Kulkarni"}
Tags: ${post.tags.join(", ")}

${plainText}

---
`);
  }

  const content = sections.join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
