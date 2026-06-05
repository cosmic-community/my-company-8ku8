import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'URBTEK Group | Engineering Play. Enriching Life. Sustainable Intelligence.',
  description:
    'URBTEK Group is an integrator of global partner technologies delivering end-to-end, Concept-to-Commissioning solutions across Playscape, Technical Services, IoT, Trading, and Cooling.',
  keywords: [
    'Integrated Urban Infrastructure UAE',
    'Turnkey Playscape Contractor Dubai',
    'Smart Agriculture IoT MENA',
    'End-to-End Technical Services Dubai',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚙️</text></svg>" />
        <script src="/dashboard-console-capture.js" />
              <script defer src="https://insights.cosmicinsights.dev/script.js" data-project="6a2254d7d66dd9646b9e1110"></script>
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}