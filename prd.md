# Uncle Potato / Oncle Patate - Marketing Website PRD

**Project:** Uncle Potato / Oncle Patate Marketing Website
**Type:** Static SEO-Optimized Bilingual Marketing Website
**Framework:** Next.js 15.x (App Router, Static Export)
**Deployment:** Vercel
**Version:** MVP v1

---

## 1. Product Overview

Build a modern, fast, mobile-first, bilingual (English/French) marketing website for **Uncle Potato / Oncle Patate**, a Montreal-based HALAL fast-food restaurant with two locations, specializing in burgers, baked potatoes, chicken tenders, smoothies, and fries.

### The website MUST:

- Showcase the full menu with names, descriptions, prices, and placeholder images
- Display both restaurant locations with addresses, phone numbers, hours, and embedded Google Maps
- Link to UberEats and SkipTheDishes for online ordering (per-location links)
- Be fully optimized for local Montreal SEO (structured data, metadata, sitemap)
- Support English and French with a language toggle
- Be fully static with zero backend, zero database, zero server-side runtime
- Be accessible (WCAG 2.1 AA compliant)
- Be mobile-first and responsive

### Out of scope (do NOT implement):

- Online ordering / payment processing
- Admin dashboard
- CMS integration
- User authentication / accounts
- Customer reviews
- Reservations system
- Analytics / tracking

---

## 2. Business Information

### Brand Name

- **English:** Uncle Potato
- **French:** Oncle Patate
- Both names MUST appear on the homepage for SEO purposes

### Instagram

- Handle: `uncle_potato_officielle`
- URL: `https://www.instagram.com/uncle_potato_officielle`

### Location 1: Chabanel

- **Address:** 70 Rue Chabanel O, Montreal, QC H2N 1E7
- **Phone:** (438) 701-5040
- **Hours:**
  - Saturday - Tuesday: 4:00 PM - 11:00 PM
  - Wednesday: 4:00 PM - 12:00 AM
  - Thursday - Friday: 4:00 PM - 11:00 PM

### Location 2: Cote-des-Neiges

- **Address:** 4942 Chem. de la Cote-des-Neiges, Montreal, QC H3V 1H2
- **Phone:** (514) 486-5479
- **Hours:**
  - Daily: 11:30 AM - 11:00 PM

---

## 3. Brand Guidelines

### Colors

| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#f3a42a` | CTA buttons, accents, highlights, hover states |
| Background Light | `#ffffff` | Page backgrounds, card backgrounds |
| Background Dark | `#1a1a20` | Navbar, footer, dark sections, text |

### Typography

- **Font:** Inter (loaded via `next/font/google` for self-hosting and optimization)
- **Style:** Bold headings, clean body text, high-contrast

### Visual Style

- Modern fast-food aesthetic
- Clean layout with generous whitespace
- High-contrast text (meets WCAG AA contrast ratios)
- Large food visuals (placeholder boxes for MVP)

### Asset Placeholders

All logos and food images will be added manually later by Kevin. For MVP:

- Use **solid brand-colored boxes (`#f3a42a` background) with white text labels** describing the intended image (e.g., "Hero Image", "Burger Photo", "Logo")
- Add `{/* TODO: Replace with real [description] */}` comments in JSX wherever a placeholder is used

Kevin will later replace:
- Logo SVG
- Food photographs
- Google Maps embed URLs
- UberEats and SkipTheDishes links

---

## 4. Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15.x (latest stable, App Router) |
| Rendering | Static Export (`output: 'export'` in `next.config.js`) |
| Styling | Tailwind CSS |
| i18n | `next-intl` |
| Font | Inter via `next/font/google` |
| Package Manager | npm |
| Linting | ESLint |
| Formatting | Prettier |
| Unit Testing | Vitest |
| Integration Testing | React Testing Library |
| E2E Testing | Playwright |
| Deployment | Vercel |

### Constraints

- **No backend.** No API routes, no server-side runtime.
- **No database.** All data is static JSON.
- **Static export only.** The `next.config.js` must set `output: 'export'`. No middleware, no server components that require runtime, no `getServerSideProps`.
- **No `next/image` optimization loader.** Since this is a static export, use `next/image` with `unoptimized: true` in `next.config.js`, or use standard `<img>` tags with Tailwind classes.

---

## 5. Internationalization (i18n)

### Library

Use `next-intl` with static rendering support.

### URL Structure

| URL | Behavior |
|-----|----------|
| `/` | Serves English content (default language). This is NOT an auto-detect route. |
| `/en` | English version |
| `/fr` | French version |

The root `/` route defaults to English. Users switch languages via a visible toggle in the navbar and footer.

### Translation Files

```
/messages/en.json
/messages/fr.json
```

These JSON files contain ALL UI strings: navbar labels, page titles, button text, meta descriptions, section headings, About page copy, taglines, etc.

### Menu Data (Bilingual)

Menu data lives in `/data/menu.json` as a single file. Each menu item contains both English and French fields:

```json
{
  "categories": [
    {
      "id": "burgers",
      "name_en": "Burgers",
      "name_fr": "Burgers",
      "items": [
        {
          "id": "classic-burger",
          "name_en": "Classic Burger",
          "name_fr": "Burger Classique",
          "description_en": "Juicy beef patty with lettuce, tomato, and our signature sauce",
          "description_fr": "Galette de boeuf juteuse avec laitue, tomate et notre sauce signature",
          "price": 12.99,
          "image": "/images/menu/placeholder-burger.png"
        }
      ]
    }
  ]
}
```

---

## 6. Site Architecture

### Pages

The app uses a `[locale]` dynamic segment for i18n routing:

```
/app/[locale]/page.tsx          -> Home
/app/[locale]/menu/page.tsx     -> Menu
/app/[locale]/locations/page.tsx -> Locations
/app/[locale]/about/page.tsx    -> About
/app/not-found.tsx              -> Custom 404
```

### Navbar (Minimal)

- **Items:** Menu | Locations
- **Right side:** Language toggle (EN | FR) + "Order Now" CTA button (links to UberEats for primary location)
- **Mobile:** Collapses to a hamburger menu icon. Opens a full-screen or slide-in overlay with all nav items, language toggle, and Order Now CTA.
- The brand name/logo is on the left side and links to the homepage.

### Footer (Full)

The footer includes:
- Brand name/logo (placeholder)
- Both locations: address, phone number (clickable `tel:` link), and hours summary
- Delivery links: UberEats and SkipTheDishes (per location)
- Instagram link (icon + handle)
- Language switcher (EN | FR)
- Copyright notice: "© 2025 Uncle Potato / Oncle Patate. All rights reserved."

---

## 7. Page Specifications

### 7.1 Home Page (`/[locale]/page.tsx`)

**Sections in order:**

1. **Hero Section**
   - Large placeholder image area (full-width, brand-colored box with "Hero Image" text)
   - Brand name: Display both "Uncle Potato" and "Oncle Patate" for SEO
   - Tagline: Use placeholder text - "Montreal's Favorite Fast Food" (EN) / "Le Fast-Food Prefere de Montreal" (FR). Mark with `TODO: Replace with final tagline`
   - Two CTA buttons (side by side):
     - "Order on UberEats" -> opens UberEats link in **new tab** (`target="_blank" rel="noopener noreferrer"`)
     - "Order on SkipTheDishes" -> opens SkipTheDishes link in **new tab**
   - CTA button style: `bg-[#f3a42a] text-[#1a1a20] font-bold` with hover darkening effect

2. **Featured Menu Items**
   - Horizontal scrollable row or grid of 4-6 featured menu items (cards)
   - Each card: placeholder image, item name, price
   - "View Full Menu" link at the bottom

3. **Locations Preview**
   - Two side-by-side cards (stack on mobile), one per location
   - Each card: location name, address, phone, brief hours
   - "View All Locations" link

4. **Gallery Section**
   - Grid layout (3 columns desktop, 2 columns tablet, 1 column mobile)
   - 6 placeholder image boxes with lazy loading
   - Title: "Our Food" / "Notre Cuisine"

5. **Instagram CTA**
   - Section with text: "Follow us on Instagram" / "Suivez-nous sur Instagram"
   - Link to `https://www.instagram.com/uncle_potato_officielle` (opens in new tab)

### 7.2 Menu Page (`/[locale]/menu/page.tsx`)

- Page title: "Our Menu" / "Notre Menu"
- Render menu items from `/data/menu.json`
- Group items by category with category headings
- **Categories (initial 5):** Burgers, Baked Potatoes, Chicken Tenders, Smoothies, Fries
- Each menu item displays:
  - Placeholder image (brand-colored box)
  - Name (localized based on current locale)
  - Description (localized)
  - Price (formatted as `$XX.XX`, before tax)
- Layout: Grid of cards (3 columns desktop, 2 tablet, 1 mobile)
- Sticky category navigation at the top that scrolls to the relevant section when clicked

### 7.3 Locations Page (`/[locale]/locations/page.tsx`)

- Page title: "Our Locations" / "Nos Emplacements"
- Two sections, one per location
- Each location section includes:
  - Location name (e.g., "Chabanel", "Cote-des-Neiges")
  - Full address (text)
  - Phone number (clickable `tel:` link)
  - Hours table (day | hours format)
  - Google Maps iframe embed (use a placeholder `<div>` with text "Google Maps Embed - TODO: Replace with real embed URL" until Kevin provides the URLs)
  - Two CTA buttons: "Order on UberEats" and "Order on SkipTheDishes" (per-location links, open in new tab)

### 7.4 About Page (`/[locale]/about/page.tsx`)

- Page title: "About Us" / "A Propos"
- Generate draft marketing copy (stored in translation JSON files) that emphasizes:
  - **HALAL certified** - All food is 100% HALAL
  - **Montreal local** - Proudly serving Montreal from two locations
  - **Fresh ingredients** - Commitment to quality and freshness
- Copy should be 2-3 paragraphs, warm and inviting tone, suitable for a family-friendly fast-food restaurant
- Include a large placeholder image area
- End with a CTA: "Visit Us" linking to the Locations page

### 7.5 Custom 404 Page (`/app/not-found.tsx`)

- Branded with site colors and font
- Friendly message: "Page not found" / "Page introuvable"
- "Go Home" button linking to `/`

---

## 8. SEO Strategy

### Target Keywords

Incorporate these keywords naturally into page content, metadata, and structured data:

- Burgers Montreal
- Best burgers Montreal
- Halal restaurant Montreal
- Halal food Montreal
- Fast food Montreal
- Baked potatoes Montreal
- Chicken tenders Montreal
- Uncle Potato Montreal
- Oncle Patate Montreal

### Metadata (Next.js Metadata API)

Each page MUST have unique metadata using the Next.js `generateMetadata` function:

```typescript
// Example for Home page
export const metadata: Metadata = {
  title: "Uncle Potato | Best Halal Burgers & Fast Food in Montreal",
  description: "Uncle Potato (Oncle Patate) - Montreal's favorite halal fast food. Fresh burgers, baked potatoes, chicken tenders, smoothies & fries. Order now on UberEats or SkipTheDishes.",
  keywords: ["halal restaurant montreal", "burgers montreal", "fast food montreal", "uncle potato", "oncle patate"],
  openGraph: {
    title: "Uncle Potato | Best Halal Burgers & Fast Food in Montreal",
    description: "...",
    images: [{ url: "/images/og-placeholder.png", width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
};
```

- Generate appropriate metadata for EVERY page (Home, Menu, Locations, About)
- Include Open Graph tags with placeholder images (1200x630 brand-colored box with brand name)
- Include both `en_CA` and `fr_CA` locale alternates

### Structured Data (JSON-LD)

Include the following JSON-LD script in the Home page `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Uncle Potato / Oncle Patate",
  "alternateName": "Oncle Patate",
  "description": "Montreal's favorite halal fast food restaurant specializing in burgers, baked potatoes, chicken tenders, smoothies, and fries.",
  "url": "https://unclepotato.ca",
  "telephone": ["(438) 701-5040", "(514) 486-5479"],
  "servesCuisine": ["Halal", "Fast Food", "Burgers", "Canadian"],
  "priceRange": "$$",
  "image": "/images/og-placeholder.png",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "70 Rue Chabanel O",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "postalCode": "H2N 1E7",
      "addressCountry": "CA"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "4942 Chem. de la Cote-des-Neiges",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "postalCode": "H3V 1H2",
      "addressCountry": "CA"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday"],
      "opens": "16:00",
      "closes": "23:00",
      "description": "Chabanel location"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday"],
      "opens": "16:00",
      "closes": "00:00",
      "description": "Chabanel location"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Thursday", "Friday"],
      "opens": "16:00",
      "closes": "23:00",
      "description": "Chabanel location"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:30",
      "closes": "23:00",
      "description": "Cote-des-Neiges location"
    }
  ],
  "hasMenu": {
    "@type": "Menu",
    "name": "Uncle Potato Menu",
    "url": "https://unclepotato.ca/en/menu",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Burgers",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Classic Burger",
            "description": "Juicy beef patty with lettuce, tomato, and our signature sauce",
            "offers": {
              "@type": "Offer",
              "price": "12.99",
              "priceCurrency": "CAD"
            }
          }
        ]
      }
    ]
  },
  "sameAs": [
    "https://www.instagram.com/uncle_potato_officielle"
  ]
}
```

**Note:** The `url` field uses `https://unclepotato.ca` as a placeholder. Replace with the actual domain when known. The `hasMenu` section should be expanded to include all menu items from `/data/menu.json`.

### Sitemap

- Auto-generate a static `sitemap.xml` that includes all pages in both locales
- Include: `/en`, `/fr`, `/en/menu`, `/fr/menu`, `/en/locations`, `/fr/locations`, `/en/about`, `/fr/about`

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://unclepotato.ca/sitemap.xml
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Score | 95+ (all categories) |
| Largest Contentful Paint (LCP) | < 2s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Time to Interactive (TTI) | < 2s |

---

## 9. Animations & Interactions

- **Scroll animations:** Subtle fade-in-up effect as sections enter the viewport (use CSS animations with Intersection Observer or a lightweight library like `framer-motion`). Keep it minimal to avoid impacting performance.
- **Hover effects:** Scale-up on menu cards and CTA buttons (`hover:scale-105 transition-transform`)
- **Smooth scrolling:** Enable smooth scroll behavior for anchor links (category navigation on menu page)
- **Mobile hamburger:** Slide-in animation for mobile nav menu
- **No heavy animation libraries.** If using framer-motion, only import the specific components needed (tree-shakeable).

---

## 10. Accessibility (WCAG 2.1 AA)

- Use semantic HTML elements (`<nav>`, `<main>`, `<header>`, `<footer>`, `<section>`, `<article>`)
- All images MUST have descriptive `alt` text (even placeholders: e.g., `alt="Placeholder for Classic Burger photo"`)
- All interactive elements must be keyboard-navigable (Tab, Enter, Escape for mobile menu)
- Color contrast ratios must meet WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Clickable phone numbers use `tel:` links
- ARIA labels on the hamburger menu toggle button (`aria-label="Open menu"` / `aria-label="Close menu"`)
- ARIA labels on the language toggle
- `lang` attribute set correctly on `<html>` element based on locale (`en` or `fr`)
- Skip-to-content link for keyboard users

---

## 11. Folder Structure

```
/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx            # Locale layout with nav, footer, font, metadata
│   │   ├── page.tsx              # Home page
│   │   ├── menu/
│   │   │   └── page.tsx          # Menu page
│   │   ├── locations/
│   │   │   └── page.tsx          # Locations page
│   │   └── about/
│   │       └── page.tsx          # About page
│   ├── layout.tsx                # Root layout (html, body, font)
│   └── not-found.tsx             # Custom 404 page
├── components/
│   ├── Navbar.tsx                # Navigation bar with hamburger menu
│   ├── MobileMenu.tsx            # Mobile slide-in menu overlay
│   ├── Footer.tsx                # Full footer
│   ├── Hero.tsx                  # Hero section (homepage)
│   ├── FeaturedMenu.tsx          # Featured menu items (homepage)
│   ├── LocationsPreview.tsx      # Locations preview cards (homepage)
│   ├── GalleryGrid.tsx           # Gallery image grid (homepage)
│   ├── InstagramCTA.tsx          # Instagram call-to-action section
│   ├── MenuSection.tsx           # Menu category section with item cards
│   ├── MenuItem.tsx              # Individual menu item card
│   ├── LocationCard.tsx          # Full location details card
│   ├── CTAButton.tsx             # Reusable CTA button component
│   ├── LanguageToggle.tsx        # EN/FR language switcher
│   ├── Placeholder.tsx           # Reusable placeholder image component
│   └── JsonLd.tsx                # JSON-LD structured data component
├── config/
│   └── links.ts                  # External links (UberEats, SkipTheDishes, Instagram) per location
├── data/
│   └── menu.json                 # Menu data (bilingual)
├── messages/
│   ├── en.json                   # English translations
│   └── fr.json                   # French translations
├── public/
│   ├── images/
│   │   ├── og-placeholder.png    # OG image placeholder (1200x630)
│   │   └── menu/                 # Menu item placeholder images
│   ├── favicon.svg               # Generated SVG favicon (letter "U" in brand yellow on dark bg)
│   ├── robots.txt
│   └── sitemap.xml               # Auto-generated
├── tests/
│   ├── unit/                     # Vitest unit tests
│   ├── integration/              # React Testing Library tests
│   └── e2e/                      # Playwright E2E tests
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .eslintrc.json
└── .prettierrc
```

---

## 12. External Links Configuration

Create `/config/links.ts`:

```typescript
export const externalLinks = {
  instagram: "https://www.instagram.com/uncle_potato_officielle",
  locations: {
    chabanel: {
      ubereats: "https://www.ubereats.com/TODO-REPLACE-CHABANEL",    // TODO: Replace with real link
      skipthedishes: "https://www.skipthedishes.com/TODO-REPLACE-CHABANEL", // TODO: Replace with real link
      googleMapsEmbed: "", // TODO: Replace with real Google Maps embed URL
    },
    cotedeneiges: {
      ubereats: "https://www.ubereats.com/TODO-REPLACE-CDN",         // TODO: Replace with real link
      skipthedishes: "https://www.skipthedishes.com/TODO-REPLACE-CDN", // TODO: Replace with real link
      googleMapsEmbed: "", // TODO: Replace with real Google Maps embed URL
    },
  },
} as const;
```

---

## 13. Sample Menu Data

The `/data/menu.json` file must be pre-populated with placeholder items so the site renders with content. Include 2-3 items per category:

```json
{
  "categories": [
    {
      "id": "burgers",
      "name_en": "Burgers",
      "name_fr": "Burgers",
      "items": [
        {
          "id": "classic-burger",
          "name_en": "Classic Burger",
          "name_fr": "Burger Classique",
          "description_en": "Juicy halal beef patty with fresh lettuce, tomato, pickles, and our signature sauce on a toasted brioche bun",
          "description_fr": "Galette de boeuf halal juteuse avec laitue fraiche, tomate, cornichons et notre sauce signature sur un pain brioche grille",
          "price": 12.99,
          "image": "/images/menu/placeholder-burger.png"
        },
        {
          "id": "cheese-burger",
          "name_en": "Cheese Burger",
          "name_fr": "Burger au Fromage",
          "description_en": "Our classic burger topped with melted cheddar cheese",
          "description_fr": "Notre burger classique garni de fromage cheddar fondu",
          "price": 14.49,
          "image": "/images/menu/placeholder-burger.png"
        },
        {
          "id": "spicy-burger",
          "name_en": "Spicy Burger",
          "name_fr": "Burger Epice",
          "description_en": "Halal beef patty with jalapenos, spicy mayo, and pepper jack cheese",
          "description_fr": "Galette de boeuf halal avec jalapenos, mayo epicee et fromage pepper jack",
          "price": 15.49,
          "image": "/images/menu/placeholder-burger.png"
        }
      ]
    },
    {
      "id": "baked-potatoes",
      "name_en": "Baked Potatoes",
      "name_fr": "Pommes de Terre au Four",
      "items": [
        {
          "id": "loaded-potato",
          "name_en": "Loaded Baked Potato",
          "name_fr": "Pomme de Terre Garnie",
          "description_en": "Crispy baked potato loaded with cheese, sour cream, green onions, and bacon bits",
          "description_fr": "Pomme de terre croustillante garnie de fromage, creme sure, oignons verts et morceaux de bacon",
          "price": 10.99,
          "image": "/images/menu/placeholder-potato.png"
        },
        {
          "id": "butter-potato",
          "name_en": "Butter & Herb Potato",
          "name_fr": "Pomme de Terre Beurre et Fines Herbes",
          "description_en": "Fluffy baked potato with garlic butter and fresh herbs",
          "description_fr": "Pomme de terre moelleuse avec beurre a l'ail et fines herbes fraiches",
          "price": 8.99,
          "image": "/images/menu/placeholder-potato.png"
        }
      ]
    },
    {
      "id": "chicken-tenders",
      "name_en": "Chicken Tenders",
      "name_fr": "Filets de Poulet",
      "items": [
        {
          "id": "classic-tenders",
          "name_en": "Classic Chicken Tenders (6pc)",
          "name_fr": "Filets de Poulet Classiques (6 mcx)",
          "description_en": "Crispy golden halal chicken tenders served with your choice of dipping sauce",
          "description_fr": "Filets de poulet halal croustillants dores servis avec votre choix de sauce",
          "price": 11.99,
          "image": "/images/menu/placeholder-chicken.png"
        },
        {
          "id": "spicy-tenders",
          "name_en": "Spicy Chicken Tenders (6pc)",
          "name_fr": "Filets de Poulet Epices (6 mcx)",
          "description_en": "Our classic tenders with a spicy kick, served with ranch dipping sauce",
          "description_fr": "Nos filets classiques avec une touche epicee, servis avec sauce ranch",
          "price": 12.99,
          "image": "/images/menu/placeholder-chicken.png"
        }
      ]
    },
    {
      "id": "smoothies",
      "name_en": "Smoothies",
      "name_fr": "Smoothies",
      "items": [
        {
          "id": "mango-smoothie",
          "name_en": "Mango Paradise Smoothie",
          "name_fr": "Smoothie Paradis Mangue",
          "description_en": "Fresh mango blended with yogurt, banana, and a splash of orange juice",
          "description_fr": "Mangue fraiche melangee avec yogourt, banane et un soupcon de jus d'orange",
          "price": 7.99,
          "image": "/images/menu/placeholder-smoothie.png"
        },
        {
          "id": "strawberry-smoothie",
          "name_en": "Strawberry Blast Smoothie",
          "name_fr": "Smoothie Explosion Fraise",
          "description_en": "Sweet strawberries blended with vanilla yogurt and honey",
          "description_fr": "Fraises sucrees melangees avec yogourt vanille et miel",
          "price": 7.99,
          "image": "/images/menu/placeholder-smoothie.png"
        }
      ]
    },
    {
      "id": "fries",
      "name_en": "Fries",
      "name_fr": "Frites",
      "items": [
        {
          "id": "classic-fries",
          "name_en": "Classic Fries",
          "name_fr": "Frites Classiques",
          "description_en": "Golden crispy fries seasoned with our special blend of spices",
          "description_fr": "Frites dorees et croustillantes assaisonnees avec notre melange special d'epices",
          "price": 5.99,
          "image": "/images/menu/placeholder-fries.png"
        },
        {
          "id": "loaded-fries",
          "name_en": "Loaded Fries",
          "name_fr": "Frites Garnies",
          "description_en": "Our classic fries topped with cheese sauce, green onions, and our signature sauce",
          "description_fr": "Nos frites classiques garnies de sauce au fromage, oignons verts et notre sauce signature",
          "price": 9.99,
          "image": "/images/menu/placeholder-fries.png"
        }
      ]
    }
  ]
}
```

---

## 14. Favicon

Generate a simple SVG favicon: the letter **"U"** in white (`#ffffff`) on a dark background (`#1a1a20`) with rounded corners. Save as `/public/favicon.svg`.

Example:
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#1a1a20"/>
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-family="Inter, sans-serif" font-weight="700" font-size="20" fill="#f3a42a">U</text>
</svg>
```

---

## 15. Testing Plan

### Coverage Target

- **Component tests:** Minimum 80% coverage
- **Utility functions:** 100% coverage

### Unit Tests (Vitest)

- Each component renders without crashing
- Menu item card displays correct name, price, and description
- CTA button renders with correct `href` and `target="_blank"`
- Language toggle renders current locale
- Placeholder component renders with correct label text

### Integration Tests (React Testing Library)

- Menu page loads and renders all categories from `menu.json`
- Correct localized text appears based on locale (EN vs FR)
- Navigation links point to correct routes
- UberEats/SkipTheDishes links have correct `href` values and `target="_blank"`
- Phone numbers are wrapped in clickable `tel:` links
- Language switching changes displayed text

### E2E Tests (Playwright)

- User visits homepage -> sees hero, featured menu, locations preview
- User navigates to Menu -> sees all categories and items
- User switches language EN -> FR -> all text changes to French
- User clicks UberEats CTA -> new tab opens (verify `target="_blank"`)
- User visits Locations page -> sees both locations with addresses and hours
- User visits About page -> sees HALAL messaging and brand story
- User visits non-existent page -> sees custom 404
- Mobile viewport: hamburger menu opens and closes correctly
- Mobile viewport: all navigation works through hamburger menu

---

## 16. Deployment Plan

1. Develop locally with `npm run dev`
2. Run full test suite: `npm run test` (unit + integration) and `npm run test:e2e` (Playwright)
3. Build static export: `npm run build` (produces `/out` directory)
4. Deploy to Vercel (connect GitHub repo)
5. Connect custom domain (when available)
6. Submit `sitemap.xml` to Google Search Console

---

## 17. Future Extensibility

Structure the code so these features can be added later without major refactoring:

- **Online ordering system:** Menu data is already structured in JSON. A cart and checkout flow can be layered on top.
- **CMS integration:** Translation files and menu data can be migrated to a headless CMS (e.g., Sanity, Contentful) by replacing the JSON imports with API calls.
- **Admin dashboard:** The static data files (`menu.json`, `links.ts`) can be replaced with a database-backed API.
- **Additional locations:** The location data structure supports adding new locations by extending the config.

---

## 18. Implementation Checklist

The Sonnet model should implement in this order:

1. Initialize Next.js 15.x project with TypeScript, Tailwind CSS, ESLint, Prettier
2. Configure `next.config.js` for static export (`output: 'export'`, `images: { unoptimized: true }`)
3. Set up `next-intl` with `/messages/en.json` and `/messages/fr.json`
4. Create the `[locale]` routing structure
5. Build shared components: Navbar, Footer, LanguageToggle, CTAButton, Placeholder
6. Build the Home page with all sections (Hero, Featured Menu, Locations Preview, Gallery, Instagram CTA)
7. Build the Menu page with category navigation and item cards
8. Build the Locations page with both locations
9. Build the About page with HALAL-focused draft copy
10. Build the custom 404 page
11. Add JSON-LD structured data to the Home page
12. Add metadata to all pages (title, description, OG tags)
13. Create `sitemap.xml` and `robots.txt`
14. Generate the SVG favicon
15. Create `/data/menu.json` with sample data
16. Create `/config/links.ts` with placeholder external links
17. Add scroll animations (fade-in) and hover effects
18. Ensure mobile responsiveness across all pages
19. Ensure WCAG 2.1 AA compliance
20. Write unit tests (Vitest)
21. Write integration tests (React Testing Library)
22. Write E2E tests (Playwright)
23. Run `npm run build` to verify static export succeeds
24. Verify Lighthouse score targets are met
