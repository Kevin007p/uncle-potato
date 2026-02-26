# CLAUDE.md — Uncle Potato (Oncle Patate)

Bilingual (EN/FR) website for a Montreal-based halal fast-food restaurant with 2 locations. Static site built with Next.js App Router.

## Tech Stack

- **Next.js 15** (App Router, static export via `output: 'export'`)
- **React 19**, **TypeScript 5** (strict mode)
- **Tailwind CSS 3** for styling
- **next-intl** for i18n (locales: `en`, `fr`)
- **framer-motion** for animations
- **Vitest** + **Testing Library** for unit/integration tests
- **Playwright** for E2E tests

## Commands

```bash
npm run dev          # Dev server on port 3000
npm run build        # Static export to /out
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npm run format       # Prettier (single quotes, 2-space indent, semis, trailing commas, 100 char width)
npm test             # Vitest unit/integration tests (once)
npm run test:watch   # Vitest in watch mode
npm run test:e2e     # Playwright E2E tests (starts dev server automatically)
```

## Project Structure

```
app/                        # Next.js App Router pages
  [locale]/                 # Dynamic locale routes (/en/*, /fr/*)
    page.tsx                # Home
    menu/page.tsx           # Menu (server) → MenuPageClient.tsx (client)
    locations/page.tsx      # Locations
    about/page.tsx          # About
components/                 # React components (Navbar, Hero, MenuItem, Footer, etc.)
config/links.ts             # External links (UberEats, SkipTheDishes, Google Maps), site config
data/menu.json              # Menu data: categories and items with bilingual names/descriptions
i18n/                       # next-intl setup (routing.ts, request.ts, navigation.ts)
messages/en.json, fr.json   # Translation strings organized by namespace
public/images/              # Static assets (hero, menu item photos, interior)
tests/
  setup.ts                  # Mocks for next-intl, framer-motion, next/navigation
  unit/                     # Unit tests (MenuItem, CTAButton, LanguageToggle, Placeholder)
  integration/              # Integration tests (MenuSection, LocationCard)
  e2e/                      # Playwright E2E tests
```

## Architecture

- **Server components** by default; client components (`'use client'`) for interactivity (animations, state, language toggle)
- **Static generation**: all pages pre-rendered via `generateStaticParams()` with `dynamicParams: false`
- **i18n routing**: URL-based (`/en/menu`, `/fr/menu`). Use `<Link>` from `@/i18n/navigation` for locale-aware links. Translation namespaces: `nav`, `home`, `menu`, `locations`, `about`, `footer`, `lang`, `common`
- **Menu data** lives in `data/menu.json` — single source of truth. Items have `name_en`/`name_fr`/`description_en`/`description_fr` fields; select by locale at render time
- **No API routes** — all data is static JSON

## Conventions

- **Components**: functional, default exports, props defined via `interface ComponentNameProps`
- **Styling**: Tailwind utility classes; brand colors are `#f3a42a` (gold), `#1a1a20` (dark), `#ffffff` (white) — defined in `tailwind.config.ts` under `brand.*`
- **Accessibility**: semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`), ARIA attributes, skip-to-content link, focus ring styles (`focus:ring-2 focus:ring-[#f3a42a]`)
- **Responsive**: mobile-first with breakpoints `sm`, `md`, `lg`, `xl`
- **Animations**: framer-motion `whileInView` with `viewport={{ once: true }}`
- **Imports**: use `@/` path alias (maps to project root)
- **Formatting**: Prettier enforced — single quotes, semicolons, trailing commas, 2-space indent, 100 char width

## Key Config

- `next.config.js`: static export, unoptimized images, trailing slash, next-intl plugin
- `tailwind.config.ts`: brand color tokens, `scrollbar-hide` utility
- `tsconfig.json`: strict mode, `@/*` path alias
