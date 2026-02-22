'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { siteConfig, externalLinks } from '@/config/links';

export default function LocationsPreview() {
  const t = useTranslations('home');
  const tLoc = useTranslations('locations');

  const locations = [
    {
      key: 'chabanel' as const,
      name: tLoc('chabanel.name'),
      address: siteConfig.locations.chabanel.address,
      phone: siteConfig.locations.chabanel.phone,
      phoneHref: siteConfig.locations.chabanel.phoneHref,
      hours: [tLoc('chabanel.hours.line1'), tLoc('chabanel.hours.line2'), tLoc('chabanel.hours.line3')],
      ubereats: externalLinks.locations.chabanel.ubereats,
    },
    {
      key: 'cotedeneiges' as const,
      name: tLoc('cotedeneiges.name'),
      address: siteConfig.locations.cotedeneiges.address,
      phone: siteConfig.locations.cotedeneiges.phone,
      phoneHref: siteConfig.locations.cotedeneiges.phoneHref,
      hours: [tLoc('cotedeneiges.hours.line1'), tLoc('cotedeneiges.hours.line2'), tLoc('cotedeneiges.hours.line3')],
      ubereats: externalLinks.locations.cotedeneiges.ubereats,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a20]">{t('locationsTitle')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#f3a42a] transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-[#f3a42a] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" aria-hidden="true">
                  <svg className="w-4 h-4 text-[#1a1a20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-black text-[#1a1a20] text-xl mb-1">{loc.name}</h3>
                  <address className="not-italic text-gray-600 text-sm">{loc.address}</address>
                </div>
              </div>

              <div className="ml-11">
                <a href={loc.phoneHref} className="text-sm text-gray-600 hover:text-[#f3a42a] transition-colors block mb-2 focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded">
                  {loc.phone}
                </a>
                <div className="text-sm text-gray-500 space-y-0.5 mb-4">
                  {loc.hours.map((h, idx) => <p key={idx}>{h}</p>)}
                </div>
                <a
                  href={loc.ubereats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#f3a42a] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
                >
                  Order Now ↗
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 border-2 border-[#1a1a20] text-[#1a1a20] font-bold px-8 py-3 rounded-lg hover:bg-[#1a1a20] hover:text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1a1a20]"
          >
            {t('viewAllLocations')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
