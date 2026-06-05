import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.name) || service.title
  const overview = getMetafieldValue(service.metadata?.overview)
  const division = service.metadata?.division
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-sand-200 hover:shadow-xl transition-all duration-300"
    >
      {image?.imgix_url && (
        <div className="h-44 overflow-hidden bg-sand-100">
          <img
            src={`${image.imgix_url}?w=800&h=352&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={176}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {division && (
          <span className="text-xs uppercase tracking-[0.15em] text-emerald-600 font-semibold mb-2">
            {getMetafieldValue(division.metadata?.name) || division.title}
          </span>
        )}
        <h3 className="font-serif text-xl font-bold text-ink mb-2">{name}</h3>
        <p className="text-sm text-ink/70 leading-relaxed line-clamp-3 flex-1">{overview}</p>
      </div>
    </Link>
  )
}