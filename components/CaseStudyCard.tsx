import Link from 'next/link'
import { CaseStudy } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const division = caseStudy.metadata?.division
  const image = caseStudy.metadata?.hero_image

  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group block overflow-hidden rounded-2xl bg-ink text-white hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        {image?.imgix_url && (
          <img
            src={`${image.imgix_url}?w=800&h=480&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={240}
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      </div>
      <div className="p-6 -mt-16 relative">
        {division && (
          <span className="text-xs uppercase tracking-[0.15em] text-emerald-400 font-semibold">
            {getMetafieldValue(division.metadata?.name) || division.title}
          </span>
        )}
        <h3 className="font-serif text-2xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-sm text-sand-200/70 leading-relaxed line-clamp-2">{challenge}</p>
      </div>
    </Link>
  )
}