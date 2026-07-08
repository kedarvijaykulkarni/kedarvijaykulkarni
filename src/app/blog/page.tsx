import { Suspense } from "react";
import { getAllPostsMeta, getAllCategories, getAllTags } from "@/lib/mdx";
import { BlogSearch } from "@/components/BlogSearch";
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

type Props = {
  searchParams: Promise<{ tag?: string; category?: string; q?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const isFiltered = params.tag || params.category || params.q;

  const base: Metadata = {
    title: "Blog | Kedar Kulkarni",
    description:
      "Notes on full-stack engineering and AI systems, by Kedar Kulkarni.",
    alternates: {
      canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
      title: "Blog | Kedar Kulkarni",
      description:
        "Notes on full-stack engineering and AI systems.",
      url: `${SITE_URL}/blog`,
      siteName: "Kedar Kulkarni",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-default.png`,
          width: 1200,
          height: 630,
          alt: "Kedar Kulkarni - Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog | Kedar Kulkarni",
      description:
        "Notes on full-stack engineering and AI systems.",
      images: [`${SITE_URL}/og-default.png`],
    },
  };

  if (isFiltered) {
    base.robots = { index: false, follow: true };
  }

  return base;
}

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const categories = getAllCategories();
  const allTags = getAllTags();

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Kedar Kulkarni - Blog",
    description:
      "Notes on full-stack engineering and AI systems.",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "Kedar Kulkarni",
      jobTitle: "Full-Stack Architect & AI Engineer",
      url: "https://www.linkedin.com/in/kedarvijaykulkarni",
    },
    publisher: {
      "@type": "Person",
      name: "Kedar Kulkarni",
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/kedarvijaykulkarni",
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* Server-rendered header - visible to crawlers before JS loads */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-0 text-center">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          The <span className="text-brand-500">Blog</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
          Notes on full-stack engineering and AI systems.
        </p>
      </div>
      <Suspense>
        <BlogSearch posts={posts} categories={categories} allTags={allTags} />
      </Suspense>
    </>
  );
}
