# Company Website — Premium Software Engineering & Digital Systems Studio

A complete, production-quality marketing site for a software services studio:
Next.js App Router, strict TypeScript, Tailwind CSS v4, content-driven pages,
and an honest, configurable enquiry pipeline. Built to the accompanying
*Master Website Build Specification*.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in NEXT_PUBLIC_SITE_URL at minimum
npm run dev                  # http://localhost:3000
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build (static/SSG where possible) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next core-web-vitals + TypeScript rules) |
| `npm run typecheck` | `tsc --noEmit` in strict mode |
| `npm test` | Vitest: enquiry schema, brief builder, content integrity, accordion |
| `npm run format` | Prettier over source and tests |

Verified at delivery: build, lint, typecheck, and all tests pass.

## Rebranding — change the company in one place

Brand facts are **never hardcoded in components**. Edit:

- `src/config/site.ts` — name (currently the working placeholder
  **"Fieldwork"**), legal name, domain, tagline, positioning, and the
  signal-bar text / on-off switch.
- `src/config/contact.ts` — public contact email, social profile links, and
  the enquiry form's project types, budget ranges, and timelines.
- `src/config/navigation.ts` — header/footer navigation.
- `NEXT_PUBLIC_SITE_URL` in `.env.local` — canonical URL, Open Graph, sitemap.

## Editing content

All content is typed data in `src/content/` — add entries; pages update
everywhere automatically:

| File | Drives |
|---|---|
| `content/services.ts` | Homepage capabilities, /services, each `/services/[slug]` page (problem, situations, approach, deliverables, technologies, example, FAQs) |
| `content/projects.ts` | /work and `/work/[slug]` case studies |
| `content/faqs.ts` | Homepage FAQ |
| `content/process.ts` | Process overview, /process, delivery signals, decision-log example |
| `content/insights.ts` | /insights and `/insights/[slug]` field notes |

**Honesty rules baked into the content layer:** every project carries a
`kind` — `client`, `internal`, `open-source`, `prototype`, or `concept` —
which is displayed wherever the project appears. Never publish invented
clients, testimonials, or metrics. Content-integrity tests
(`tests/content.test.ts`) fail the build if content references a slug that
doesn't exist (a dead internal link).

## Contact enquiries — how delivery works

The form (`/contact`) validates twice: client-side and again in
`POST /api/contact` using the shared Zod schema
(`src/lib/validation/enquiry.ts`). A honeypot field filters bots; enquiry
contents are never logged.

Delivery is provider-based (`src/lib/email/sendEnquiry.ts`), configured by
environment only — credentials never live in code (see `.env.example`):

- `ENQUIRY_PROVIDER=webhook` + `ENQUIRY_WEBHOOK_URL` — enquiries are POSTed
  as JSON to your endpoint (Zapier/Make, a CRM, a Slack incoming webhook, your
  own API). Optional `ENQUIRY_WEBHOOK_TOKEN` bearer auth.
- **Not configured** — the deployment is in *development mode*: submissions
  validate but are **not** delivered, and the visitor is told exactly that.
  The site never shows a fake success.

To add an email provider (Resend, SES, SMTP…), implement it inside
`sendEnquiry` — the form and API route don't change.

## Features

- **Engineering Workbench** — the hero's signature SVG system diagram: four
  modules, a packet travelling the request path, monospace annotations.
  Explanatory, not a fake live dashboard; still under reduced motion.
- **Project Brief Builder** (`/contact`) — four questions → a structured
  brief the visitor can copy or drop into the enquiry form. Fully client-side,
  no AI API.
- **Systems flow** (homepage) — Problem → Architecture → Build → Integration →
  Delivery, with the decisions behind each stage.
- **Decision log example** (`/process`) — how trade-offs are evaluated,
  labelled as illustrative.
- Motion is CSS-first (scroll reveals via IntersectionObserver), respects
  `prefers-reduced-motion`, and the site is fully coherent with it disabled.

## SEO & platform

Per-page titles/descriptions, canonical URLs, Open Graph, generated
`sitemap.xml` and `robots.txt`, custom 404. All content pages are static or
SSG; only `/api/contact` is dynamic.

## Deployment

Any Node host or Vercel:

```bash
npm run build && npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL and the enquiry provider
variables (above) before launch. No database or separate backend is required.

## Structure

Follows the specification's suggested layout: `src/app` (routes),
`src/components` (layout / ui / sections / services / work / forms / motion),
`src/content` (typed data), `src/config` (site / navigation / contact),
`src/lib` (validation / email / seo / utils), `src/types`, `tests/`.
