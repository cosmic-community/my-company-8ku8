export const metadata = {
  title: 'Contact | URBTEK Group',
  description: 'Get in touch with URBTEK Group.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="container-page">
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-400">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mt-4">Contact URBTEK</h1>
          <p className="mt-6 max-w-2xl text-lg text-sand-100/80 leading-relaxed">
            Engage with our team to explore end-to-end, Concept-to-Commissioning solutions
            tailored to your strategic objectives.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
          <div>
            <h2 className="font-serif text-2xl font-bold text-ink mb-6">Headquarters</h2>
            <address className="not-italic space-y-4 text-ink/80">
              <p className="leading-relaxed">
                Rigga Business Towers,<br />
                Muraqqabat, Deira,<br />
                Dubai, United Arab Emirates
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-emerald-600 mb-1">Phone</span>
                +971 54 546 5954
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-emerald-600 mb-1">Email</span>
                info@urbtekgroup.com
              </p>
            </address>
          </div>

          <div className="rounded-2xl bg-sand-50 p-8 border border-sand-200">
            <h2 className="font-serif text-2xl font-bold text-ink mb-4">Strategic Inquiries</h2>
            <p className="text-ink/70 leading-relaxed mb-6">
              For C-suite and government engagements, our integration specialists are ready
              to discuss your infrastructure objectives.
            </p>
            <a
              href="mailto:info@urbtekgroup.com"
              className="inline-flex items-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-ink hover:bg-emerald-400 transition-colors"
            >
              Email Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}