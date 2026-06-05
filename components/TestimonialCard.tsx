import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const author = getMetafieldValue(testimonial.metadata?.author_name)
  const role = getMetafieldValue(testimonial.metadata?.author_role)
  const org = getMetafieldValue(testimonial.metadata?.organization)

  return (
    <figure className="rounded-2xl bg-ink-light p-8 text-white border border-emerald-800/30">
      <svg className="w-10 h-10 text-emerald-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <blockquote className="text-lg leading-relaxed text-sand-100 font-serif italic">
        {quote}
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-emerald-400">
          {role}{org ? `, ${org}` : ''}
        </p>
      </figcaption>
    </figure>
  )
}