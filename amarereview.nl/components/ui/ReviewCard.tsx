import Link from 'next/link'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface ReviewCardProps {
  slug: string
  title: string
  excerpt: string
  rating: number
  category: string
  image: string
  pros: string[]
  cons: string[]
}

export default function ReviewCard({
  slug,
  title,
  excerpt,
  rating,
  category,
  image,
  pros,
  cons,
}: ReviewCardProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  return (
    <article className="card h-full flex flex-col">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-primary-light text-white text-xs font-bold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Image */}
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-primary mb-2 line-clamp-2">{title}</h3>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
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
        <span className="font-bold text-primary">{rating.toFixed(1)}/5.0</span>
      </div>

      {/* Excerpt */}
      <p className="text-text-muted text-sm mb-4 line-clamp-2">{excerpt}</p>

      {/* Pros & Cons */}
      <div className="mb-4 flex-1">
        <div className="mb-3">
          <p className="text-xs font-bold text-success uppercase mb-2">Voordelen</p>
          <ul className="space-y-1">
            {pros.slice(0, 2).map((pro, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-success">✓</span>
                <span className="text-text-muted">{pro}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold text-error uppercase mb-2">Nadelen</p>
          <ul className="space-y-1">
            {cons.slice(0, 1).map((con, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-error">✗</span>
                <span className="text-text-muted">{con}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href={`/reviews/${slug}`}
        className="btn-secondary w-full text-center"
      >
        Lees review →
      </Link>
    </article>
  )
}
