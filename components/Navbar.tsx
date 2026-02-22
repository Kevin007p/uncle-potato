'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';
import MobileMenu from './MobileMenu';
import { externalLinks } from '@/config/links';

export default function Navbar() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-[#1a1a20] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md"
              aria-label={t('home')}
            >
              {/* TODO: Replace with real logo SVG */}
              <div className="w-8 h-8 bg-[#f3a42a] rounded-md flex items-center justify-center" aria-hidden="true">
                <span className="text-[#1a1a20] font-black text-sm">U</span>
              </div>
              <span className="text-white font-bold text-lg hidden sm:block">Uncle Potato</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              <Link
                href="/menu"
                className="text-white/80 hover:text-[#f3a42a] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md px-2 py-1"
              >
                {t('menu')}
              </Link>
              <Link
                href="/locations"
                className="text-white/80 hover:text-[#f3a42a] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md px-2 py-1"
              >
                {t('locations')}
              </Link>
              <Link
                href="/about"
                className="text-white/80 hover:text-[#f3a42a] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md px-2 py-1"
              >
                {t('about')}
              </Link>
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <LanguageToggle />
              </div>
              <a
                href={externalLinks.locations.chabanel.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center bg-[#f3a42a] text-[#1a1a20] font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#d4911f] transition-colors hover:scale-105 transform focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2 focus:ring-offset-[#1a1a20]"
              >
                {t('orderNow')}
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-white hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md"
                aria-label={t('openMenu')}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
