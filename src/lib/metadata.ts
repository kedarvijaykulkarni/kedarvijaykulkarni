import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const SITE_NAME = "Kedar Kulkarni";
const DEFAULT_DESCRIPTION =
  "Portfolio of Kedar Kulkarni - Full-Stack Architect & AI Engineer building enterprise platforms and production GenAI systems. Selected work, writing, and how to get in touch.";
const TWITTER = "";

interface GenerateMetadataOptions {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

export function generatePageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
  ogImage,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage || `${SITE_URL}/og-default.png`;

  const metadata: Metadata = {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: type === "article" ? "article" : "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      ...(TWITTER ? { site: `@${TWITTER}` } : {}),
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };

  if (type === "article" && metadata.openGraph) {
    const og = metadata.openGraph as Record<string, unknown>;
    if (publishedTime) og.publishedTime = publishedTime;
    if (modifiedTime) og.modifiedTime = modifiedTime;
    if (authors) og.authors = authors;
    if (tags) og.tags = tags;
  }

  return metadata;
}

export { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION };
