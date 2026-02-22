'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';
import { externalLinks } from '@/config/links';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations('nav');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-[#1a1a20] z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-bold text-lg">Uncle Potato</span>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] rounded-md"
            aria-label={t('closeMenu')}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-2 p-6 flex-1">
          <Link
            href="/menu"
            onClick={onClose}
            className="text-white text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a]"
          >
            {t('menu')}
          </Link>
          <Link
            href="/locations"
            onClick={onClose}
            className="text-white text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a]"
          >
            {t('locations')}
          </Link>
          <Link
            href="/about"
            onClick={onClose}
            className="text-white text-xl font-semibold py-3 px-4 rounded-lg hover:bg-white/10 hover:text-[#f3a42a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a]"
          >
            {t('about')}
          </Link>
        </div>

        <div className="p-6 border-t border-white/10 flex flex-col gap-4">
          <LanguageToggle />
          <a
            href={externalLinks.locations.chabanel.ubereats}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full text-center bg-[#f3a42a] text-[#1a1a20] font-bold py-3 px-6 rounded-lg hover:bg-[#d4911f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a]"
          >
            {t('orderNow')}
          </a>
        </div>
      </nav>
    </>
  );
}
