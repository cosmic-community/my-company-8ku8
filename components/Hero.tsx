import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-ink text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url(https://imgix.cosmicjs.com/f85e52f0-6099-11f1-9266-d781b035c0c9-autopilot-photo-1504307651254-35680f356dfd-1780634983828.jpeg?w=2400&h=1200&fit=crop&auto=format,compress)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="container-page relative py-28 md:py-40">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-emerald-400 mb-6">
          The Integrator
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
          Engineering Play.<br />
          Enriching Life.<br />
          <span className="text-emerald-400">Sustainable Intelligence.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
          URBTEK Group integrates global partner technologies into end-to-end,
          Concept-to-Commissioning solutions — engineered for operational resilience,
          regulatory compliance, and enduring strategic value.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/divisions"
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-ink hover:bg-emerald-400 transition-colors"
          >
            Explore Our Divisions
          </Link>
          <Link
            href="/case-studies"
            className="rounded-full border border-sand-100/30 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </div>
    </section>
  )
}