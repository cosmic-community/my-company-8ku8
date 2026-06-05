// app/divisions/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getDivision, getServices, getCaseStudies, getMetafieldValue } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'

export default async function DivisionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const division = await getDivision(slug)

  if (!division) {
    notFound()
  }

  const [allServices, allCaseStudies] = await Promise.all([
    getServices(),
    getCaseStudies(),
  ])

  const name = getMetafieldValue(division.metadata?.name) || division.title
  const positioning = getMetafieldValue(division.metadata?.positioning)
  const narrative = getMetafieldValue(division.metadata?.master_narrative)
  const subSectors = getMetafieldValue(division.metadata?.sub_sectors)
  const heroImage = division.metadata?.hero_image

  const relatedServices = allServices.filter(
    (s) => s.metadata?.division?.id === division.id
  )
  const relatedCaseStudies = allCaseStudies.filter(
    (c) => c.metadata?.division?.id === division.id
  )

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
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Division</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 max-w-3xl">{name}</h1>
          {positioning && (
            <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">{positioning}</p>
          )}
        </div>
      </section>

      {narrative && (
        <section className="container-page py-20">
          <div className="max-w-3xl mx-auto">
            <div className="prose-content text-lg text-ink/80 leading-relaxed whitespace-pre-line">
              {narrative}
            </div>
          </div>
        </section>
      )}

      {subSectors && (
        <section className="bg-sand-50 py-16">
          <div className="container-page max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-ink mb-6">Sectors & Sub-Pages</h2>
            <div className="text-ink/80 leading-relaxed whitespace-pre-line">{subSectors}</div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="container-page py-20">
          <h2 className="font-serif text-3xl font-bold text-ink mb-10">Related Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}

      {relatedCaseStudies.length > 0 && (
        <section className="bg-sand-50 py-20">
          <div className="container-page">
            <h2 className="font-serif text-3xl font-bold text-ink mb-10">Case Studies</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.map((c) => (
                <CaseStudyCard key={c.id} caseStudy={c} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}