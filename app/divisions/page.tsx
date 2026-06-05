import DivisionCard from '@/components/DivisionCard'
import { getDivisions } from '@/lib/cosmic'

export const metadata = {
  title: 'Divisions | URBTEK Group',
  description: 'Explore URBTEK Group\'s five strategic business divisions.',
}

export default async function DivisionsPage() {
  const divisions = await getDivisions()

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Capabilities</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4">Our Divisions</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
            Five integrated divisions, one accountable partner — engineered to deliver
            end-to-end solutions across the urban and agricultural landscape.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        {divisions.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {divisions.map((division) => (
              <DivisionCard key={division.id} division={division} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink/60">No divisions available.</p>
        )}
      </section>
    </>
  )
}