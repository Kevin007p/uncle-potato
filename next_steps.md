# Uncle Potato / Oncle Patate — Next Steps

## What's Completed

- Full Next.js 15 static site with App Router and `output: 'export'`
- All 4 pages: Home, Menu, Locations, About + custom 404
- All 15 components: Navbar, MobileMenu, Footer, Hero, FeaturedMenu, LocationsPreview, GalleryGrid, InstagramCTA, MenuSection, MenuItem, LocationCard, CTAButton, LanguageToggle, Placeholder, JsonLd
- Bilingual i18n (EN/FR) with next-intl, language toggle, locale routing (`/en`, `/fr`)
- Menu data with 5 categories and 14 items in `/data/menu.json`
- SEO: JSON-LD structured data, per-page metadata, Open Graph tags, sitemap.xml, robots.txt
- Tailwind CSS with brand colors, Inter font, responsive/mobile-first design
- Scroll animations (framer-motion), hover effects, smooth scrolling
- Accessibility: semantic HTML, ARIA labels, skip-to-content, keyboard navigation
- Unit, integration, and E2E test scaffolding

---

## What's Left — Manual Replacements

### 1. Favicon (`public/favicon.ico`)

You need a real `favicon.ico` file. Currently only `public/favicon.svg` exists. Browsers automatically request `/favicon.ico`, so add one:

- Use a tool like [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net) to generate a `.ico` from your logo
- Place it at: **`public/favicon.ico`**
- Optionally also add `public/apple-touch-icon.png` (180x180) for iOS

---

### 2. Logo

The logo appears in two places, both currently showing placeholder text:

**File: `components/Navbar.tsx`** (line ~25)

- Look for: `{/* TODO: Replace with real logo SVG */}`
- Replace the placeholder `<span>` with your logo `<img>` or inline SVG

**File: `components/Footer.tsx`** (line ~17)

- Look for: `{/* TODO: Replace with real logo */}`
- Same — replace with your logo

---

### 3. Hero Image

**File: `components/Hero.tsx`** (lines ~13 and ~77)

- Look for: `{/* TODO: Replace with real hero image */}`
- Replace the brand-colored placeholder box with a real image:
  ```tsx
  <img
    src="/images/hero.jpg"
    alt="Uncle Potato restaurant"
    className="w-full h-full object-cover"
  />
  ```
- Recommended size: 1920x800 or similar wide aspect ratio
- Place the image at: **`public/images/hero.jpg`**

---

### 4. Menu Item Images

**File: `components/MenuItem.tsx`** (line ~23)

- Look for: `{/* TODO: Replace with real image using next/image */}`
- Replace the Placeholder component with real images
- Each menu item in `/data/menu.json` has an `image` field pointing to paths like `/images/menu/placeholder-burger.png`

**Images to create and place in `public/images/menu/`:**

| Filename                   | Used by                                            |
| -------------------------- | -------------------------------------------------- |
| `placeholder-burger.png`   | Classic Burger, Cheese Burger, Spicy Burger        |
| `placeholder-potato.png`   | Loaded Baked Potato, Butter & Herb Potato          |
| `placeholder-chicken.png`  | Classic Chicken Tenders, Spicy Chicken Tenders     |
| `placeholder-smoothie.png` | Mango Paradise Smoothie, Strawberry Blast Smoothie |
| `placeholder-fries.png`    | Classic Fries, Loaded Fries                        |

You can either:

- Keep one image per category (current setup), or
- Give each item its own image by updating the `image` field in **`data/menu.json`**

Recommended image size: 400x300 or square 400x400.

---

### 5. Gallery Photos

**File: `components/GalleryGrid.tsx`** (line ~42)

- Look for: `{/* TODO: Replace with real food photo */}`
- There are 6 placeholder boxes in the "Our Food" section on the homepage
- Replace each with a real food photo
- Recommended: 600x400 images showing your best dishes
- Place images at: **`public/images/gallery/`** (create this directory)

---

### 6. About Page Image

**File: `app/[locale]/about/page.tsx`** (line ~51)

- Look for: `{/* TODO: Replace with real restaurant image */}`
- Replace the placeholder with a photo of the restaurant interior, team, or food spread
- Place image at: **`public/images/about.jpg`**

---

### 7. Open Graph Image

Used when the site is shared on social media (Facebook, Twitter, WhatsApp, etc.):

- Create a 1200x630 image with your logo, brand name, and tagline
- Place it at: **`public/images/og-placeholder.png`** (or rename to `og.png` and update the reference)
- The reference is in **`app/[locale]/layout.tsx`** line ~44

---

### 8. UberEats & SkipTheDishes Links (per location)

**File: `config/links.ts`**

Replace these placeholder URLs with real ones:

```ts
// Chabanel location
ubereats: 'https://www.ubereats.com/TODO-REPLACE-CHABANEL',      // line 5
skipthedishes: 'https://www.skipthedishes.com/TODO-REPLACE-CHABANEL', // line 6

// Cote-des-Neiges location
ubereats: 'https://www.ubereats.com/TODO-REPLACE-CDN',           // line 10
skipthedishes: 'https://www.skipthedishes.com/TODO-REPLACE-CDN',      // line 11
```

To find your links:

- **UberEats:** Search for "Uncle Potato" on ubereats.com and copy each location's page URL
- **SkipTheDishes:** Search for "Uncle Potato" on skipthedishes.com and copy each location's page URL

---

### 9. Google Maps Embed URLs (per location)

**File: `config/links.ts`** (lines 7 and 12)

Currently empty strings:

```ts
googleMapsEmbed: '', // line 7  — Chabanel
googleMapsEmbed: '', // line 12 — Cote-des-Neiges
```

To get embed URLs:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your restaurant location
3. Click **Share** → **Embed a map**
4. Copy the `src` URL from the iframe code (starts with `https://www.google.com/maps/embed?pb=...`)
5. Paste it as the `googleMapsEmbed` value

The embed is rendered in **`components/LocationCard.tsx`** (line ~32).

---

### 10. Site Domain URL

**File: `config/links.ts`** (line 20)

```ts
url: 'https://unclepotato.ca', // TODO: Replace with actual domain
```

Update this once your domain is confirmed. This URL is also used in:

- **`app/[locale]/layout.tsx`** — `metadataBase` and canonical URLs
- **`components/JsonLd.tsx`** — structured data `url` field
- **`public/sitemap.xml`** — all page URLs
- **`public/robots.txt`** — sitemap reference

Do a project-wide find-and-replace for `https://unclepotato.ca` when you have the final domain.

---

### 11. Menu Data Updates

**File: `data/menu.json`**

The current menu items are sample data from the PRD. Review and update:

- Item names (EN and FR)
- Descriptions (EN and FR)
- Prices (currently placeholder values like $12.99, $14.49, etc.)
- Add or remove items as needed
- Update the `featured` flag to control which items appear on the homepage

---

### 12. Translation Text Review

**Files: `messages/en.json` and `messages/fr.json`**

Review all text strings, especially:

- **Hero tagline** (`home.heroTagline`): Currently "Montreal's Favorite Fast Food" — marked with TODO to replace with your final tagline
- **About page copy** (`about.para1`, `about.para2`, `about.para3`): AI-generated draft copy, review for accuracy
- **Copyright year** (`footer.copyright`): Currently says 2025

---

## Summary Checklist

| #   | Task                    | File(s) to edit                                          |
| --- | ----------------------- | -------------------------------------------------------- |
| 1   | Add favicon.ico         | `public/favicon.ico`                                     |
| 2   | Add logo                | `components/Navbar.tsx`, `components/Footer.tsx`         |
| 3   | Add hero image          | `public/images/hero.jpg`, `components/Hero.tsx`          |
| 4   | Add menu item photos    | `public/images/menu/`, `components/MenuItem.tsx`         |
| 5   | Add gallery photos      | `public/images/gallery/`, `components/GalleryGrid.tsx`   |
| 6   | Add about page photo    | `public/images/about.jpg`, `app/[locale]/about/page.tsx` |
| 7   | Add OG social image     | `public/images/og-placeholder.png`                       |
| 8   | Add UberEats/Skip links | `config/links.ts`                                        |
| 9   | Add Google Maps embeds  | `config/links.ts`                                        |
| 10  | Confirm domain URL      | `config/links.ts` + find-replace `unclepotato.ca`        |
| 11  | Review/update menu data | `data/menu.json`                                         |
| 12  | Review/update text copy | `messages/en.json`, `messages/fr.json`                   |

Once all items are done, run `npm run build` to verify the static export still builds cleanly, then deploy to Vercel.
