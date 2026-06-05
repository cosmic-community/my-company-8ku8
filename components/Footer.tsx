import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-sand-100 mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="font-serif text-3xl font-bold text-white">URBTEK Group</span>
          <p className="mt-4 max-w-md text-sm text-sand-200/70 leading-relaxed">
            Engineering Play. Enriching Life. Sustainable Intelligence. An integrator of
            global partner technologies delivering end-to-end, Concept-to-Commissioning
            solutions.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/divisions" className="hover:text-emerald-400">Divisions</Link></li>
            <li><Link href="/services" className="hover:text-emerald-400">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-emerald-400">Case Studies</Link></li>
            <li><Link href="/team" className="hover:text-emerald-400">Team</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-emerald-400 mb-4">Contact</h4>
          <address className="not-italic text-sm space-y-2 text-sand-200/70">
            <p>Rigga Business Towers,<br />Muraqqabat, Deira,<br />Dubai, UAE</p>
            <p>+971 54 546 5954</p>
            <p>info@urbtekgroup.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-emerald-800/40">
        <div className="container-page py-6 text-xs text-sand-200/50">
          © {year} URBTEK Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}