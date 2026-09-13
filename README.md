# OhHoBa

OhHoBa is a Next.js creative archive exploring language, symbols, imagination, and unfinished ideas.

## Design direction

The site was rebuilt around a museum/archive visual system inspired by the pacing and editorial composition of illoca.unseen.co, while using OhHoBa's own green brand color derived from `public/images/icon.svg`.

Key principles:

- English-first with a parallel Chinese experience at `/zh`
- Responsive layouts for desktop, tablet, and mobile
- Large editorial typography and restrained navigation
- Archive content driven by the existing post data and view-count APIs
- Reusable site header/footer and artifact components
- Existing MDX posts, RSS/Atom, sitemap, OG routes, Redis view counting, and Vercel integrations remain intact

## Local development

```bash
npm install
npm run dev
```

The project uses Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, and the existing MDX/Redis integrations.

## Main routes

- `/` — English homepage
- `/zh` — Chinese homepage
- `/about` — English about page
- `/zh/about` — Chinese about page
- `/world` — OhHoBa World
- `/<year>/<post-id>` — English articles
- `/zh/<year>/<post-id>` — Chinese articles

## Design note
The hero artwork (`public/images/ohhoba-unknown-seed.png`) is intentionally text-free. All visible website copy is rendered in HTML/React so it remains editable, translatable, accessible, and indexable.

## OhHoBa V5 redesign

The homepage now follows a framed editorial-gallery composition inspired by the supplied illoca reference: paper-toned page field, centered floating navigation card, a bordered hero stage, and a scroll-driven five-step feature sequence. The hero artwork is intentionally text-free. All visible copy is rendered in HTML/React so it remains editable, translatable, accessible, and indexable.

SEO compatibility is preserved: existing article URLs, metadata, canonical/hreflang, robots, sitemap, Open Graph, JSON-LD, analytics, and Redis view-count functionality remain part of the application.


## Typography / guide update
- Page grid remains global; the hero title panel masks the background grid locally and uses sparse crossed type-construction guides.
- Display typography uses heavy weight with more generous tracking/leading. Manifesto items are centered within their cells.
