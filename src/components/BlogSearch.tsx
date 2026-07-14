"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/mdx";

interface BlogSearchProps {
  posts: BlogPostMeta[];
  categories: string[];
  allTags: string[];
}

export function BlogSearch({ posts, categories, allTags }: BlogSearchProps) {
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag");

  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    initialTag ? [initialTag] : []
  );

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (post) =>
          post.category?.toLowerCase().replace(/\s+/g, "-") ===
          selectedCategory
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((post) =>
        selectedTags.every((tag) => post.tags.includes(tag))
      );
    }

    return filtered;
  }, [posts, query, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Search bar top spacing */}
      <div className="mb-12" />

      {/* Search - pill style matching landing page */}
      <div className="flex justify-center mb-8">
        <div className="glass-panel w-full max-w-md rounded-full shadow-md overflow-hidden flex items-center">
          <svg
            className="ml-4 h-4 w-4 text-ink-tertiary shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            aria-label="Search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-3 py-3 text-sm text-ink placeholder-ink-tertiary bg-transparent outline-none"
          />
        </div>
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory("")}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              !selectedCategory
                ? "bg-accent text-cta-text shadow-sm"
                : "bg-bg-alt text-ink-tertiary hover:bg-border"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? "" : cat)
              }
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors capitalize ${
                selectedCategory === cat
                  ? "bg-accent text-cta-text shadow-sm"
                  : "bg-bg-alt text-ink-tertiary hover:bg-border"
              }`}
            >
              {cat.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      )}

      {/* Tag filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-border text-ink ring-1 ring-border"
                  : "bg-bg-alt text-ink-tertiary hover:bg-border hover:text-ink-secondary"
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-3 py-1 text-xs font-medium text-red-500 hover:text-red-700"
            >
              Clear tags
            </button>
          )}
        </div>
      )}

      {/* Posts grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group glass-panel block rounded-2xl overflow-hidden hover:border-accent-border hover:shadow-xl transition-all duration-300"
              >
                {post.coverImage ? (
                  <div className="aspect-video bg-bg-alt overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      width={1200}
                      height={630}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-bg-alt flex items-center justify-center">
                    <span className="text-4xl font-extrabold text-border">
                      S
                    </span>
                  </div>
                )}
                <div className="p-6">
                  {post.tags[0] && (
                    <span className="text-xs font-semibold tracking-wide uppercase text-ink-tertiary">
                      {post.tags[0]}
                    </span>
                  )}
                  <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-tertiary line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs font-medium text-ink-tertiary">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                    {post.readingTime && (
                      <>
                        <span className="text-border">|</span>
                        <span>{post.readingTime}</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-lg text-ink-tertiary">No posts found.</p>
          <button
            onClick={() => {
              setQuery("");
              setSelectedCategory("");
              setSelectedTags([]);
            }}
            className="mt-4 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
