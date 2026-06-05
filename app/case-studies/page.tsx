import CaseStudyCard from '@/components/CaseStudyCard'
import { getCaseStudies } from '@/lib/cosmic'

export const metadata = {
  title: 'Case Studies | URBTEK Group',
  description: 'Strategic outcomes framed around operational resilience and resource optimization.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Proven Outcomes</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4">Case Studies</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
            Strategic delivery measured in operational resilience, resource optimization,
            and enduring risk mitigation.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        {caseStudies.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink/60">No case studies available.</p>
        )}
      </section>
    </>
  )
}