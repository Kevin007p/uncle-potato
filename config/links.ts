export const externalLinks = {
  instagram: 'https://www.instagram.com/uncle_potato_officielle',
  locations: {
    chabanel: {
      ubereats: 'https://www.ubereats.com/TODO-REPLACE-CHABANEL', // TODO: Replace with real link
      skipthedishes: 'https://www.skipthedishes.com/TODO-REPLACE-CHABANEL', // TODO: Replace with real link
      googleMapsEmbed: '', // TODO: Replace with real Google Maps embed URL
    },
    cotedeneiges: {
      ubereats: 'https://www.ubereats.com/TODO-REPLACE-CDN', // TODO: Replace with real link
      skipthedishes: 'https://www.skipthedishes.com/TODO-REPLACE-CDN', // TODO: Replace with real link
      googleMapsEmbed: '', // TODO: Replace with real Google Maps embed URL
    },
  },
} as const;

export const siteConfig = {
  name: 'Uncle Potato',
  nameFr: 'Oncle Patate',
  url: 'https://unclepotato.ca', // TODO: Replace with actual domain
  instagram: '@uncle_potato_officielle',
  locations: {
    chabanel: {
      address: '70 Rue Chabanel O, Montreal, QC H2N 1E7',
      phone: '(438) 701-5040',
      phoneHref: 'tel:+14387015040',
    },
    cotedeneiges: {
      address: '4942 Chem. de la Cote-des-Neiges, Montreal, QC H3V 1H2',
      phone: '(514) 486-5479',
      phoneHref: 'tel:+15144865479',
    },
  },
} as const;
