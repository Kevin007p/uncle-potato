import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';
import { externalLinks, siteConfig } from '@/config/links';

export default function Footer() {
  const t = useTranslations('footer');
  const tLoc = useTranslations('locations');

  return (
    <footer className="bg-[#1a1a20] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* TODO: Replace with real logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#f3a42a] rounded-md flex items-center justify-center" aria-hidden="true">
                <span className="text-[#1a1a20] font-black text-base">U</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Uncle Potato</div>
                <div className="text-white/60 text-sm">Oncle Patate</div>
              </div>
            </div>
            <p className="text-white/60 text-sm mb-4">
              100% HALAL · Montreal&apos;s favorite fast food
            </p>
            <LanguageToggle />
          </div>

          {/* Chabanel Location */}
          <div>
            <h3 className="font-bold text-[#f3a42a] mb-3">{tLoc('chabanel.name')}</h3>
            <address className="not-italic text-sm text-white/70 space-y-1">
              <p>{siteConfig.locations.chabanel.address}</p>
              <p>
                <a
                  href={siteConfig.locations.chabanel.phoneHref}
                  className="hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
                >
                  {siteConfig.locations.chabanel.phone}
                </a>
              </p>
            </address>
            <div className="mt-2 text-sm text-white/60 space-y-0.5">
              <p>{tLoc('chabanel.hours.satTue')}</p>
              <p>{tLoc('chabanel.hours.wed')}</p>
              <p>{tLoc('chabanel.hours.thuFri')}</p>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={externalLinks.locations.chabanel.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f3a42a] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                {tLoc('orderUberEats')} ↗
              </a>
              <a
                href={externalLinks.locations.chabanel.skipthedishes}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f3a42a] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                {tLoc('orderSkip')} ↗
              </a>
            </div>
          </div>

          {/* Côte-des-Neiges Location */}
          <div>
            <h3 className="font-bold text-[#f3a42a] mb-3">{tLoc('cotedeneiges.name')}</h3>
            <address className="not-italic text-sm text-white/70 space-y-1">
              <p>{siteConfig.locations.cotedeneiges.address}</p>
              <p>
                <a
                  href={siteConfig.locations.cotedeneiges.phoneHref}
                  className="hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
                >
                  {siteConfig.locations.cotedeneiges.phone}
                </a>
              </p>
            </address>
            <div className="mt-2 text-sm text-white/60">
              <p>{tLoc('cotedeneiges.hours.daily')}</p>
            </div>
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={externalLinks.locations.cotedeneiges.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f3a42a] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                {tLoc('orderUberEats')} ↗
              </a>
              <a
                href={externalLinks.locations.cotedeneiges.skipthedishes}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#f3a42a] hover:underline focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                {tLoc('orderSkip')} ↗
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-[#f3a42a] mb-3">{t('follow')}</h3>
            <a
              href={externalLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span>{siteConfig.instagram}</span>
            </a>

            <div className="mt-6">
              <Link
                href="/menu"
                className="block text-sm text-white/60 hover:text-[#f3a42a] transition-colors mb-1 focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                Menu
              </Link>
              <Link
                href="/locations"
                className="block text-sm text-white/60 hover:text-[#f3a42a] transition-colors mb-1 focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                Locations
              </Link>
              <Link
                href="/about"
                className="block text-sm text-white/60 hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-1 focus:ring-[#f3a42a] rounded"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
