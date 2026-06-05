import Link from 'next/link'
import { Division } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function DivisionCard({ division }: { division: Division }) {
  const name = getMetafieldValue(division.metadata?.name) || division.title
  const positioning = getMetafieldValue(division.metadata?.positioning)
  const heroImage = division.metadata?.hero_image

  return (
    <Link
      href={`/divisions/${division.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white border border-sand-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden bg-ink">
        {heroImage?.imgix_url && (
          <img
            src={`${heroImage.imgix_url}?w=800&h=448&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={224}
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
        <h3 className="absolute bottom-5 left-6 font-serif text-2xl font-bold text-white">
          {name}
        </h3>
      </div>
      <div className="p-6">
        <p className="text-sm text-ink/70 leading-relaxed line-clamp-3">{positioning}</p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-emerald-600 group-hover:gap-2 transition-all">
          Explore Division
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}