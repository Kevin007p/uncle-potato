export const externalLinks = {
  instagram: 'https://www.instagram.com/uncle_potato_officielle',
  locations: {
    chabanel: {
      ubereats: 'https://www.ubereats.com/ca/store/uncle-potato-halal/OeFuMSCCQtmxWlRjPSYxyg',
      skipthedishes: 'https://www.skipthedishes.com/uncle-potato',
      googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.3488946765347!2d-73.6540918232033!3d45.543306571075426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919a48e2964a3%3A0xd6c9b260d5f959ba!2sUnclepotato%20(%20Chabanel%20)!5e0!3m2!1sen!2sca!4v1771783161458!5m2!1sen!2sca',
    },
    cotedeneiges: {
      ubereats: 'https://www.ubereats.com/ca/store/oncle-patate-halal/YiQSdIH-U0aCvDFxCXASvA',
      googleMapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.74922020924!2d-73.61948222320551!3d45.49499457107462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc919be5cbd746b%3A0xebb12540f0284d05!2sUncle%20Potato!5e0!3m2!1sen!2sca!4v1771783250508!5m2!1sen!2sca',
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
