import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Services | URBTEK Group',
  description: 'Compliance-driven service offerings across all URBTEK divisions.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Offerings</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4">Our Services</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
            Supply & Install. Concept to Commissioning. Every engagement is governed by
            uncompromising compliance and integrated partner excellence.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        {services.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <p className="text-center text-ink/60">No services available.</p>
        )}
      </section>
    </>
  )
}