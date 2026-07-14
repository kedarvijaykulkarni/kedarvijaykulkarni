import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Kedar Kulkarni",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-ink">Page Not Found</h1>
      <p className="mt-4 text-ink-tertiary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-accent font-medium hover:opacity-80 transition-opacity"
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
