import { siteConfig } from '@/config/links';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Uncle Potato / Oncle Patate',
    alternateName: 'Oncle Patate',
    description:
      "Montreal's favorite halal fast food restaurant specializing in burgers, baked potatoes, chicken tenders, smoothies, and fries.",
    url: siteConfig.url,
    telephone: [
      siteConfig.locations.chabanel.phone,
      siteConfig.locations.cotedeneiges.phone,
    ],
    servesCuisine: ['Halal', 'Fast Food', 'Burgers', 'Canadian'],
    priceRange: '$$',
    image: `${siteConfig.url}/images/og-placeholder.png`,
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '70 Rue Chabanel O',
        addressLocality: 'Montreal',
        addressRegion: 'QC',
        postalCode: 'H2N 1E7',
        addressCountry: 'CA',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: '4942 Chem. de la Cote-des-Neiges',
        addressLocality: 'Montreal',
        addressRegion: 'QC',
        postalCode: 'H3V 1H2',
        addressCountry: 'CA',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
        opens: '16:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday'],
        opens: '16:00',
        closes: '00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Thursday', 'Friday'],
        opens: '16:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '11:30',
        closes: '23:00',
      },
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Uncle Potato Menu',
      url: `${siteConfig.url}/en/menu`,
    },
    sameAs: ['https://www.instagram.com/uncle_potato_officielle'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
