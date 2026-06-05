'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/divisions', label: 'Divisions' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/team', label: 'Team' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-ink text-white border-b border-emerald-800/40">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-serif text-2xl font-bold tracking-tight">URBTEK</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400">Group</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-sand-100 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-ink hover:bg-emerald-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        <button
          className="md:hidden text-sand-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-ink-light border-t border-emerald-800/40">
          <div className="container-page py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-sand-100 hover:text-emerald-400"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-ink text-center"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}