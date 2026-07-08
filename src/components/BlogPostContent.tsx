import Link from "next/link";
import Image from "next/image";
import { TableOfContents } from "./TableOfContents";
import type { BlogPostMeta } from "@/lib/mdx";

function splitContentAtMidpoint(html: string): [string, string] {
  // Find all top-level block boundaries (</p>, </ul>, </ol>, </h2>, </h3>, </blockquote>)
  const blockEndRegex = /<\/(p|ul|ol|h2|h3|h4|blockquote|pre|table)>/gi;
  const matches = [...html.matchAll(blockEndRegex)];
  if (matches.length < 4) return [html, ""];
  // Find the split point closest to 50%
  const mid = html.length / 2;
  let bestIdx = 0;
  let bestDist = Infinity;
  for (let i = 0; i < matches.length; i++) {
    const pos = (matches[i].index ?? 0) + matches[i][0].length;
    const dist = Math.abs(pos - mid);
    if (dist < bestDist) {
      bestDist = dist;
      bestIdx = i;
    }
  }
  const splitPos = (matches[bestIdx].index ?? 0) + matches[bestIdx][0].length;
  return [html.slice(0, splitPos), html.slice(splitPos)];
}

interface BlogPostContentProps {
  title: string;
  date: string;
  author?: string;
  readingTime?: string;
  tags: string[];
  coverImage?: string;
  content: string;
  slug?: string;
  relatedPosts?: BlogPostMeta[];
}

const AUTHORS: Record<string, { name: string; linkedin: string; title: string }> = {
  "Kedar Kulkarni": {
    name: "Kedar Kulkarni",
    linkedin: "https://www.linkedin.com/in/kedarvijaykulkarni",
    title: "Full-Stack Architect & AI Engineer",
  },
};

export function BlogPostContent({
  title,
  date,
  author,
  readingTime,
  tags,
  coverImage,
  content,
  slug,
  relatedPosts,
}: BlogPostContentProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const authorInfo = (author && AUTHORS[author]) || AUTHORS["Kedar Kulkarni"];

  const [firstHalf, secondHalf] = splitContentAtMidpoint(content);

  const tagPills = tags.map((tag) => (
    <Link
      key={tag}
      href={`/blog?tag=${encodeURIComponent(tag)}`}
      className="text-xs font-semibold tracking-wide uppercase text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
    >
      {tag}
    </Link>
  ));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header - full width above the flex layout */}
      <div className="max-w-5xl mx-auto mb-8 lg:pr-[288px]">
        <div className="flex flex-wrap gap-2 mb-5">
          {tagPills}
        </div>
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
          {title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400 font-medium flex-wrap justify-center">
          <span>
            By{" "}
            <a
              href={authorInfo.linkedin}
              rel="author"
              target="_blank"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              {authorInfo.name}
            </a>
            , {authorInfo.title}
          </span>
          <span className="text-gray-200">|</span>
          <span>{formattedDate}</span>
          {readingTime && (
            <>
              <span className="text-gray-200">|</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>
      </div>

      {/* Hero image - full width above the flex, so TOC starts at article text level */}
      {coverImage && (
        <div className="max-w-5xl mx-auto mb-8 lg:pr-[288px]">
          <Image
            src={coverImage}
            alt={title}
            priority
            width={1200}
            height={630}
            className="w-full h-auto rounded-2xl"
          />
        </div>
      )}

      {/* Main layout: article left, TOC right - TOC starts at first line of text */}
      <div className="max-w-5xl mx-auto">
        <div className="lg:flex lg:gap-12 lg:items-start">
          {/* Left column */}
          <div className="min-w-0 lg:flex-1">
            {secondHalf ? (
              <>
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: firstHalf }}
                />
                <article
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: secondHalf }}
                />
              </>
            ) : (
              <article
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
          {/* Right column: TOC - sticky scrolls with page */}
          <aside className="w-60 shrink-0 hidden lg:block lg:self-stretch">
            <div className="sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <TableOfContents html={content} />
            </div>
          </aside>
        </div>
      </div>

      {/* Tags at bottom */}
      <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {tagPills}
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="max-w-3xl mx-auto mt-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {post.coverImage ? (
                  <span className="block aspect-video bg-gray-100 overflow-hidden relative">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </span>
                ) : (
                  <span className="block aspect-video bg-gradient-to-br from-brand-50 to-brand-50 flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-brand-200">K</span>
                  </span>
                )}
                <span className="block p-4">
                  {post.tags[0] && (
                    <span className="text-xs font-semibold tracking-wide uppercase text-gray-500">
                      {post.tags[0]}
                    </span>
                  )}
                  <h4 className="mt-1 text-sm font-bold text-gray-900 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </span>
                    {post.readingTime && (
                      <>
                        <span className="text-gray-200">|</span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
