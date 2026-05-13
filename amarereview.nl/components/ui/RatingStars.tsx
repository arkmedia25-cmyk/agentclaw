import { Star } from 'lucide-react'

interface RatingBreakdown {
  label: string
  rating: number
}

interface RatingStarsProps {
  overall: number
  breakdown?: RatingBreakdown[]
}

export default function RatingStars({ overall, breakdown }: RatingStarsProps) {
  const fullStars = Math.floor(overall)
  const hasHalfStar = overall % 1 !== 0

  return (
    <div className="bg-bg-soft border-2 border-primary rounded-lg p-6">
      {/* Overall Rating */}
      <div className="mb-6">
        <p className="text-sm font-bold text-primary uppercase mb-2">Onze Beoordeling</p>
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={32}
                className={`${
                  i < fullStars
                    ? 'fill-accent text-accent'
                    : i === fullStars && hasHalfStar
                      ? 'fill-accent text-accent opacity-50'
                      : 'text-border'
                }`}
              />
            ))}
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">{overall.toFixed(1)}</p>
            <p className="text-sm text-text-muted">/5.0</p>
          </div>
        </div>
      </div>

      {/* Breakdown */}
      {breakdown && breakdown.length > 0 && (
        <div>
          <p className="text-sm font-bold text-primary uppercase mb-4">Onderdelen</p>
          <div className="space-y-3">
            {breakdown.map((item) => {
              const iFullStars = Math.floor(item.rating)
              const iHalfStar = item.rating % 1 !== 0

              return (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < iFullStars
                              ? 'fill-accent text-accent'
                              : i === iFullStars && iHalfStar
                                ? 'fill-accent text-accent opacity-50'
                                : 'text-border'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-primary w-8 text-right">
                      {item.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
