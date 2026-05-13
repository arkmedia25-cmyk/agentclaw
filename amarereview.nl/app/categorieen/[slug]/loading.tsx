import { ReviewCardSkeleton } from '@/components/ui/Skeleton'

export default function CategoryLoading() {
  return (
    <>
      <div className="bg-bg-soft border-b border-border">
        <div className="container-max py-4">
          <div className="h-4 w-40 bg-border rounded animate-pulse" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="container-max section-padding text-white">
          <div className="h-12 w-12 bg-white/20 rounded animate-pulse mb-4" />
          <div className="h-8 w-64 bg-white/20 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card">
              <div className="h-4 w-24 bg-border rounded animate-pulse mb-2" />
              <div className="h-8 w-12 bg-border rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <ReviewCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </>
  )
}
