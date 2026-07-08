export default function BlogLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        <div className="mt-2 h-5 w-64 bg-gray-100 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-xl overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 animate-pulse" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-16 bg-gray-100 rounded animate-pulse" />
              <div className="h-5 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
