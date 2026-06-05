// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy, getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const challenge = getMetafieldValue(caseStudy.metadata?.challenge)
  const solution = getMetafieldValue(caseStudy.metadata?.solution)
  const outcomes = getMetafieldValue(caseStudy.metadata?.outcomes)
  const division = caseStudy.metadata?.division
  const heroImage = caseStudy.metadata?.hero_image
  const gallery = caseStudy.metadata?.gallery

  return (
    <>
      <section className="relative bg-ink text-white overflow-hidden">
        {heroImage?.imgix_url && (
          <>
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${heroImage.imgix_url}?w=2400&h=1000&fit=crop&auto=format,compress)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          </>
        )}
        <div className="container-page relative py-28">
          {division && (
            <Link
              href={`/divisions/${division.slug}`}
              className="text-xs uppercase tracking-[0.3em] text-emerald-400 hover:text-emerald-300"
            >
              {getMetafieldValue(division.metadata?.name) || division.title}
            </Link>
          )}
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 max-w-3xl">{title}</h1>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {challenge && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">The Challenge</h2>
              <div className="text-lg text-ink/80 leading-relaxed whitespace-pre-line">{challenge}</div>
            </div>
          )}

          {solution && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">The Solution</h2>
              <div className="text-lg text-ink/80 leading-relaxed whitespace-pre-line">{solution}</div>
            </div>
          )}

          {outcomes && (
            <div className="rounded-2xl bg-ink p-8 text-white">
              <h2 className="font-serif text-2xl font-bold text-emerald-400 mb-4">Strategic Outcomes</h2>
              <div className="text-sand-100 leading-relaxed whitespace-pre-line">{outcomes}</div>
            </div>
          )}
        </div>
      </section>

      {gallery && gallery.length > 0 && (
        <section className="container-page pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, idx) => (
              <img
                key={idx}
                src={`${img.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                alt={`${title} gallery ${idx + 1}`}
                width={400}
                height={300}
                className="w-full rounded-xl object-cover"
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}