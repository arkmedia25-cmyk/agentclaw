export function SkeletonLine({ width = 'full', height = 'md' }: { width?: string; height?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const heightMap = { sm: 'h-3', md: 'h-4', lg: 'h-6', xl: 'h-8' }
  const widthMap: Record<string, string> = {
    full: 'w-full',
    '3/4': 'w-3/4',
    '1/2': 'w-1/2',
    '1/3': 'w-1/3',
    '1/4': 'w-1/4',
  }
  return (
    <div
      className={`${heightMap[height]} ${widthMap[width] || `w-[${width}]`} bg-border rounded animate-pulse`}
      aria-hidden="true"
    />
  )
}

export function SkeletonBlock({ className = '' }: { className?: string }) {
  return <div className={`bg-border rounded animate-pulse ${className}`} aria-hidden="true" />
}

export function ReviewCardSkeleton() {
  return (
    <article className="card h-full flex flex-col" aria-hidden="true">
      <SkeletonLine width="1/3" height="sm" />
      <SkeletonBlock className="w-full h-48 mb-4 rounded" />
      <SkeletonLine width="3/4" height="lg" />
      <div className="flex gap-1 my-3">
        {[...Array(5)].map((_, i) => (
          <SkeletonBlock key={i} className="w-4 h-4 rounded" />
        ))}
      </div>
      <SkeletonLine width="full" height="sm" />
      <SkeletonLine width="1/2" height="sm" />
      <div className="mt-3 space-y-2">
        <SkeletonLine width="full" height="sm" />
        <SkeletonLine width="3/4" height="sm" />
      </div>
      <SkeletonBlock className="w-full h-10 mt-auto rounded" />
    </article>
  )
}

export function ReviewPageSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <div className="bg-bg-soft border-b border-border">
        <div className="container-max py-3">
          <SkeletonLine width="1/4" height="sm" />
        </div>
      </div>
      <div className="bg-primary text-white">
        <div className="container-max py-8">
          <SkeletonBlock className="w-24 h-6 rounded mb-4 bg-white/20" />
          <SkeletonBlock className="w-3/4 h-8 rounded mb-3 bg-white/20" />
          <SkeletonBlock className="w-1/2 h-5 rounded bg-white/20" />
        </div>
      </div>
      <div className="container-max py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <SkeletonBlock className="w-full h-32 rounded" />
            <SkeletonBlock className="w-full h-64 rounded" />
            <SkeletonBlock className="w-full h-48 rounded" />
          </div>
          <aside className="space-y-6">
            <SkeletonBlock className="w-full h-48 rounded" />
            <SkeletonBlock className="w-full h-40 rounded" />
            <SkeletonBlock className="w-full h-32 rounded" />
          </aside>
        </div>
      </div>
    </div>
  )
}
