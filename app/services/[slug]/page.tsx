// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService, getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.name) || service.title
  const overview = getMetafieldValue(service.metadata?.overview)
  const compliance = getMetafieldValue(service.metadata?.compliance)
  const partners = getMetafieldValue(service.metadata?.partners)
  const division = service.metadata?.division
  const image = service.metadata?.featured_image

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          {division && (
            <Link
              href={`/divisions/${division.slug}`}
              className="text-xs uppercase tracking-[0.3em] text-emerald-400 hover:text-emerald-300"
            >
              {getMetafieldValue(division.metadata?.name) || division.title}
            </Link>
          )}
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4 max-w-3xl">{name}</h1>
        </div>
      </section>

      {image?.imgix_url && (
        <div className="container-page py-12">
          <img
            src={`${image.imgix_url}?w=2000&h=900&fit=crop&auto=format,compress`}
            alt={name}
            width={1000}
            height={450}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      )}

      <section className="container-page py-12">
        <div className="max-w-3xl mx-auto space-y-12">
          {overview && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Overview</h2>
              <div className="text-lg text-ink/80 leading-relaxed whitespace-pre-line">{overview}</div>
            </div>
          )}

          {compliance && (
            <div className="rounded-2xl bg-sand-50 p-8 border border-sand-200">
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Compliance & Standards</h2>
              <div className="text-ink/80 leading-relaxed whitespace-pre-line">{compliance}</div>
            </div>
          )}

          {partners && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Partner Technologies</h2>
              <div className="text-ink/80 leading-relaxed whitespace-pre-line">{partners}</div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}