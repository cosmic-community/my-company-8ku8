import Hero from '@/components/Hero'
import DivisionCard from '@/components/DivisionCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'
import Link from 'next/link'
import { getDivisions, getCaseStudies, getTestimonials } from '@/lib/cosmic'

export default async function HomePage() {
  const [divisions, caseStudies, testimonials] = await Promise.all([
    getDivisions(),
    getCaseStudies(),
    getTestimonials(),
  ])

  const featuredTestimonials = testimonials.filter((t) => t.metadata?.featured)
  const displayTestimonials = featuredTestimonials.length > 0 ? featuredTestimonials : testimonials

  return (
    <>
      <Hero />

      {/* Master Narrative */}
      <section className="container-page py-24">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">Our Mandate</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-4 leading-tight">
            One partner. End-to-end accountability.
          </h2>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            From concept to commissioning, URBTEK orchestrates the world's most advanced
            partner technologies into singular, accountable delivery. We translate complexity
            into resilience — engineering infrastructure that performs across decades, not quarters.
          </p>
        </div>
      </section>

      {/* Divisions */}
      {divisions.length > 0 && (
        <section className="bg-sand-50 py-24">
          <div className="container-page">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">Capabilities</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2">
                  Five Strategic Divisions
                </h2>
              </div>
              <Link href="/divisions" className="hidden md:inline text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                View all →
              </Link>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {divisions.map((division) => (
                <DivisionCard key={division.id} division={division} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="container-page py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-600">Proven Outcomes</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mt-2">
                Operational Resilience in Practice
              </h2>
            </div>
            <Link href="/case-studies" className="hidden md:inline text-sm font-semibold text-emerald-600 hover:text-emerald-700">
              View all →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      {displayTestimonials.length > 0 && (
        <section className="bg-ink py-24">
          <div className="container-page">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Trusted Partners</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">
                What Leaders Say
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {displayTestimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}