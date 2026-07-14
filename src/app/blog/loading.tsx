export default function BlogLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="h-10 w-32 bg-border rounded animate-pulse" />
        <div className="mt-2 h-5 w-64 bg-bg-alt rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border border-border rounded-xl overflow-hidden"
          >
            <div className="aspect-video bg-bg-alt animate-pulse" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-16 bg-bg-alt rounded animate-pulse" />
              <div className="h-5 w-full bg-border rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-bg-alt rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
