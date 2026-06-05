import TestimonialCard from '@/components/TestimonialCard'
import { getTestimonials } from '@/lib/cosmic'

export const metadata = {
  title: 'About | URBTEK Group',
  description: 'Vision, mission, and core values of URBTEK Group.',
}

const coreValues = [
  { title: 'Integration', desc: 'We unify global partner technologies into singular, accountable delivery.' },
  { title: 'Sustainability', desc: 'Plastic-free innovation and resource optimization at the core of every solution.' },
  { title: 'Compliance', desc: 'EN1177, FIFA, FIH, OHSAS 18001 — uncompromising standards, every engagement.' },
  { title: 'Resilience', desc: 'Infrastructure engineered to perform across decades, not quarters.' },
]

export default async function AboutPage() {
  const testimonials = await getTestimonials()

  return (
    <>
      <section className="relative bg-ink text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'url(https://imgix.cosmicjs.com/f85e52f0-6099-11f1-9266-d781b035c0c9-autopilot-photo-1504307651254-35680f356dfd-1780634983828.jpeg?w=2400&h=1000&fit=crop&auto=format,compress)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="container-page relative py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">About Us</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 max-w-3xl">
            The Integrator's Mandate
          </h1>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          <div>
            <h2 className="font-serif text-2xl font-bold text-emerald-600 mb-4">Our Vision</h2>
            <p className="text-lg text-ink/80 leading-relaxed">
              To be the MENA region's most trusted integrator of sustainable urban and
              agricultural infrastructure — engineering play, enriching life, and advancing
              sustainable intelligence across every landscape we touch.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-emerald-600 mb-4">Our Mission</h2>
            <p className="text-lg text-ink/80 leading-relaxed">
              We integrate the world's most advanced partner technologies into end-to-end,
              Concept-to-Commissioning solutions — delivering operational resilience,
              regulatory compliance, and enduring strategic value to private and government
              stakeholders alike.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-20">
        <div className="container-page">
          <h2 className="font-serif text-3xl font-bold text-ink text-center mb-12">Core Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <div key={value.title} className="rounded-2xl bg-white p-6 border border-sand-200">
                <h3 className="font-serif text-xl font-bold text-emerald-600 mb-3">{value.title}</h3>
                <p className="text-sm text-ink/70 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="max-w-4xl mx-auto rounded-2xl bg-ink p-10 text-white">
          <h2 className="font-serif text-2xl font-bold text-emerald-400 mb-4">HSE & Quality Policy</h2>
          <p className="text-sand-100/80 leading-relaxed">
            URBTEK Group upholds a Zero-Accident HSE philosophy and operates under OHSAS 18001
            compliance frameworks. Quality assurance is embedded from concept through
            commissioning, ensuring every engagement meets the most exacting international
            standards — including EN1177, FIFA, and FIH certifications across our Playscape
            division.
          </p>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-ink py-20">
          <div className="container-page">
            <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
              Voices of Confidence
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}