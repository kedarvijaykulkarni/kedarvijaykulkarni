import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPostsMeta, type BlogPostMeta } from "@/lib/mdx";
import { generatePageMetadata, SITE_URL } from "@/lib/metadata";
import { addHeadingIds } from "@/lib/heading-ids";
import { optimizeImages } from "@/lib/image-optimizer";
import { BlogPostContent } from "@/components/BlogPostContent";
import { extractFaqFromHtml } from "@/lib/faq-extractor";

interface Props {
  params: Promise<{ slug: string }>;
}

function getRelatedPosts(
  currentSlug: string,
  currentTags: string[],
  currentCategory?: string
): BlogPostMeta[] {
  const allPosts = getAllPostsMeta().filter((p) => p.slug !== currentSlug);

  const scored = allPosts.map((post) => {
    let score = 0;
    // Shared tags
    score += post.tags.filter((t) => currentTags.includes(t)).length * 2;
    // Same category
    if (currentCategory && post.category === currentCategory) score += 3;
    return { post, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((s) => s.post);
}

export async function generateStaticParams() {
  const posts = getAllPostsMeta();
  return posts.map((post) => ({ slug: post.slug }));
}

// All valid slugs are known at build time from content/blog/*.mdx. Without
// this, Next.js renders unlisted slugs on demand and notFound() doesn't
// propagate a real 404 status code when self-hosted via `next start` —
// visitors and crawlers see "Post Not Found" copy on an HTTP 200 (soft 404).
export const dynamicParams = false;

function resolveAuthorName(author?: string): string {
  if (author) return author;
  return "Kedar Kulkarni";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Kedar Kulkarni" };
  }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage
      ? `${SITE_URL}${post.coverImage}`
      : undefined,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.lastModified || post.date,
    authors: [resolveAuthorName(post.author)],
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Add IDs to headings server-side so crawlers can see them
  const contentWithIds = addHeadingIds(post.content);

  // Add lazy loading, width/height, and decoding to in-article images
  const contentOptimized = optimizeImages(contentWithIds);

  // Extract FAQ Q&A pairs from rendered HTML for FAQPage schema
  const faqPairs = extractFaqFromHtml(contentOptimized);

  const authorProfiles: Record<string, { url: string; sameAs: string[]; page: string }> = {
    "Kedar Kulkarni": {
      url: `${SITE_URL}/author/kedar-kulkarni`,
      sameAs: ["https://www.linkedin.com/in/kedarvijaykulkarni"],
      page: "/author/kedar-kulkarni",
    },
  };
  const authorName = resolveAuthorName(post.author);
  const authorProfile = authorProfiles[authorName] || authorProfiles["Kedar Kulkarni"];

  // BlogPosting JSON-LD structured data (enhanced for LLM + E-E-A-T)
  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: authorName,
      url: authorProfile.url,
      jobTitle: "Full-Stack Architect & AI Engineer",
      sameAs: authorProfile.sameAs,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
      url: SITE_URL,
    },
    image: post.coverImage
      ? `${SITE_URL}${post.coverImage}`
      : `${SITE_URL}/og-default.png`,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    articleSection: post.category || "Blog",
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".blog-content h2", ".blog-content p:first-of-type"],
    },
  };

  // FAQPage schema (only if article has FAQ section)
  const faqLd = faqPairs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPairs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  // BreadcrumbList for navigation clarity
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <BlogPostContent
        title={post.title}
        date={post.date}
        author={post.author}
        readingTime={post.readingTime}
        tags={post.tags}
        coverImage={post.coverImage}
        content={contentOptimized}
        slug={post.slug}
        relatedPosts={getRelatedPosts(post.slug, post.tags, post.category)}
      />
    </>
  );
}
