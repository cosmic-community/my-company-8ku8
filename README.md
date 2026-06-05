# URBTEK Group

![App Preview](https://imgix.cosmicjs.com/00ce82c0-609a-11f1-9266-d781b035c0c9-autopilot-photo-1497366811353-6870744d04b2-1780634997987.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A Fortune 500-standard corporate website for **URBTEK Group** — an integrator of global partner technologies providing end-to-end (Concept to Commissioning) solutions. Built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com).

**Engineering Play. Enriching Life. Sustainable Intelligence.**

## Features

- 🏛️ **Authoritative C-Suite Design** — A strategic, sustainable corporate aesthetic targeted at private and government decision-makers
- ⚙️ **5 Business Divisions** — Playscape, Technical Services, IoT, Trading, and Cooling with deep-dive positioning
- 🛠️ **Services Catalog** — Compliance-driven service offerings with partner technology integration
- 📊 **Case Studies** — Strategic outcomes framed around operational resilience and resource optimization
- 👥 **Team Members** — Leadership profiles with photos, bios, and LinkedIn links
- 💬 **Client Testimonials** — C-suite endorsements and featured quotes
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile
- 🚀 **Server-Side Rendered** — Fast, SEO-optimized pages using Next.js App Router

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a2254d7d66dd9646b9e1112&clone_repository=6a22565dd66dd9646b9e1162)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a professional services company with services offered, team members (including photos and bios), case studies, and client testimonials.
>
> Act as the Chief Content Officer for URBTEK Group. Your task is to generate the complete, page-by-page website copy and a nested JSON structure for a Fortune 500-standard corporate website. BRAND CONTEXT: Essence: Engineering Play. Enriching Life. Sustainable Intelligence. Tone: Authoritative, strategic, innovative, and sustainable. Target audience is C-Suite (Private & Government). CRITICAL RULE: Do NOT use cheap transactional ROI jargon. Translate financial metrics into strategic business value, operational resilience, resource optimization, and risk mitigation. Positioning: URBTEK is an integrator of global partner technologies providing end-to-end (Supply & Install / Concept to Commissioning) solutions. Partners are mentioned only in deep-dive sections. Generate the Master JSON Architecture and Deep-Dive Page Copy for the 5 Divisions (Playscape, Technical Services, IoT, Trading, Cooling) emphasizing sustainability, compliance, and quality."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Company'. The content is managed in Cosmic CMS with the following object types: divisions, services, team-members, case-studies, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Cosmic** (Headless CMS)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

```bash
# Install dependencies
bun install

# Run the development server
bun run dev
```

Set the following environment variables (provided automatically in the Cosmic dashboard):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all divisions sorted by display order
const { objects: divisions } = await cosmic.objects
  .find({ type: 'divisions' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch a single service by slug
const { object: service } = await cosmic.objects
  .findOne({ type: 'services', slug: 'core-construction' })
  .depth(1)
```

## Cosmic CMS Integration

This application leverages your existing Cosmic content model:

- **Divisions** — Business units with positioning, master narrative, hero image, and sub-sectors
- **Services** — Offerings linked to divisions with compliance and partner details
- **Team Members** — Leadership profiles with photos and bios
- **Case Studies** — Strategic outcomes linked to divisions
- **Testimonials** — Client endorsements with featured flags

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — Connect your repository and add environment variables
- **Netlify** — Configure build command `bun run build`

Set `COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, and `COSMIC_WRITE_KEY` in your hosting platform's dashboard.

<!-- README_END -->