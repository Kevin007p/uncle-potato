import { useTranslations } from 'next-intl';
import { externalLinks, siteConfig } from '@/config/links';

type LocationKey = 'chabanel' | 'cotedeneiges';

interface LocationCardProps {
  locationKey: LocationKey;
  showMap?: boolean;
}

const hoursData = {
  chabanel: [
    { key: 'chabanel.hours.satTue' as const },
    { key: 'chabanel.hours.wed' as const },
    { key: 'chabanel.hours.thuFri' as const },
  ],
  cotedeneiges: [{ key: 'cotedeneiges.hours.daily' as const }],
};

export default function LocationCard({ locationKey, showMap = true }: LocationCardProps) {
  const t = useTranslations('locations');

  const locationInfo = siteConfig.locations[locationKey];
  const links = externalLinks.locations[locationKey];
  const hours = hoursData[locationKey];

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      {/* Map placeholder */}
      {showMap && (
        <div className="bg-[#f3a42a]/20 h-48 flex items-center justify-center border-b border-gray-100">
          {/* TODO: Replace with real Google Maps embed */}
          <div className="text-center text-[#1a1a20]/60 px-4">
            <svg className="w-8 h-8 mx-auto mb-2 text-[#f3a42a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-sm font-medium">{t('mapsPlaceholder')}</p>
            <p className="text-xs mt-1 opacity-60">{t('mapsTodo')}</p>
          </div>
        </div>
      )}

      <div className="p-6">
        <h2 className="text-2xl font-black text-[#1a1a20] mb-4">
          {locationKey === 'chabanel' ? t('chabanel.name') : t('cotedeneiges.name')}
        </h2>

        <div className="space-y-4">
          {/* Address */}
          <div>
            <h3 className="text-xs font-bold text-[#f3a42a] uppercase tracking-wide mb-1">{t('address')}</h3>
            <address className="not-italic text-gray-700 text-sm">{locationInfo.address}</address>
          </div>

          {/* Phone */}
          <div>
            <h3 className="text-xs font-bold text-[#f3a42a] uppercase tracking-wide mb-1">{t('phone')}</h3>
            <a
              href={locationInfo.phoneHref}
              className="text-gray-700 text-sm hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
            >
              {locationInfo.phone}
            </a>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-bold text-[#f3a42a] uppercase tracking-wide mb-2">{t('hours')}</h3>
            <div className="space-y-1">
              {hours.map((h) => (
                <p key={h.key} className="text-gray-700 text-sm">
                  {t(h.key)}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Order CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={links.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-[#f3a42a] text-[#1a1a20] font-bold py-2.5 px-4 rounded-lg text-sm hover:bg-[#d4911f] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f3a42a]"
          >
            {t('orderUberEats')}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
          <a
            href={links.skipthedishes}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center border-2 border-[#1a1a20] text-[#1a1a20] font-bold py-2.5 px-4 rounded-lg text-sm hover:bg-[#1a1a20] hover:text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1a1a20]"
          >
            {t('orderSkip')}
            <span className="sr-only"> (opens in new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}
