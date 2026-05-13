import { ReviewCardSkeleton } from '@/components/ui/Skeleton'

export default function ReviewsLoading() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <div className="h-8 w-64 bg-white/20 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
      <div className="container-max section-padding">
        <div className="mb-8">
          <div className="h-12 w-full bg-border rounded-lg animate-pulse" />
        </div>
        <div className="flex gap-3 mb-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-border rounded-lg animate-pulse" />
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
