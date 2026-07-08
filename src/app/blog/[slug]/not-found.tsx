import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Post Not Found</h1>
      <p className="mt-4 text-gray-500">
        The blog post you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-block text-brand-600 font-medium hover:text-brand-700"
      >
        &larr; Back to Blog
      </Link>
    </div>
  );
}
