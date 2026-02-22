import { useTranslations } from 'next-intl';
import { externalLinks, siteConfig } from '@/config/links';

type LocationKey = 'chabanel' | 'cotedeneiges';

interface LocationCardProps {
  locationKey: LocationKey;
  showMap?: boolean;
}

const hoursData = {
  chabanel: [
    { key: 'chabanel.hours.line1' as const },
    { key: 'chabanel.hours.line2' as const },
    { key: 'chabanel.hours.line3' as const },
  ],
  cotedeneiges: [
    { key: 'cotedeneiges.hours.line1' as const },
    { key: 'cotedeneiges.hours.line2' as const },
    { key: 'cotedeneiges.hours.line3' as const },
  ],
};

export default function LocationCard({ locationKey, showMap = true }: LocationCardProps) {
  const t = useTranslations('locations');

  const locationInfo = siteConfig.locations[locationKey];
  const links = externalLinks.locations[locationKey];
  const hours = hoursData[locationKey];

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      {/* Google Maps embed */}
      {showMap && links.googleMapsEmbed && (
        <div className="h-48 border-b border-gray-100">
          <iframe
            src={links.googleMapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={locationKey === 'chabanel' ? t('chabanel.name') : t('cotedeneiges.name')}
          />
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
          {'skipthedishes' in links && (
            <a
              href={links.skipthedishes}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border-2 border-[#1a1a20] text-[#1a1a20] font-bold py-2.5 px-4 rounded-lg text-sm hover:bg-[#1a1a20] hover:text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1a1a20]"
            >
              {t('orderSkip')}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
