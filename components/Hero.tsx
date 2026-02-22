'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { externalLinks } from '@/config/links';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <section className="relative bg-[#1a1a20] overflow-hidden min-h-[85vh] flex items-center">
      {/* Background placeholder */}
      {/* TODO: Replace with real hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a20] via-[#2a2a30] to-[#1a1a20]" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, #f3a42a 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* HALAL badge */}
            <div className="inline-flex items-center gap-2 bg-[#f3a42a]/20 border border-[#f3a42a]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#f3a42a] font-bold text-sm">✓ 100% HALAL Certified</span>
            </div>

            {/* Brand names (both for SEO) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-2">
              Uncle Potato
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-[#f3a42a] mb-4" aria-label="Also known as Oncle Patate">
              Oncle Patate
            </p>
            <p className="text-xl text-white/80 mb-2">
              {/* TODO: Replace with final tagline */}
              {t('heroTagline')}
            </p>
            <p className="text-base text-white/50 mb-8">{t('heroSubtitle')}</p>

            <div className="flex flex-wrap gap-4">
              <a
                href={externalLinks.locations.chabanel.ubereats}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f3a42a] text-[#1a1a20] font-bold px-6 py-3 rounded-lg text-base hover:bg-[#d4911f] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2 focus:ring-offset-[#1a1a20]"
              >
                {t('orderUberEats')}
                <span className="sr-only">(opens in new tab)</span>
              </a>
              <a
                href={externalLinks.locations.chabanel.skipthedishes}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#f3a42a] text-[#f3a42a] font-bold px-6 py-3 rounded-lg text-base hover:bg-[#f3a42a] hover:text-[#1a1a20] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2 focus:ring-offset-[#1a1a20]"
              >
                {t('orderSkip')}
                <span className="sr-only">(opens in new tab)</span>
              </a>
            </div>
          </motion.div>

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* TODO: Replace with real hero image */}
            <div
              className="bg-[#f3a42a] rounded-2xl aspect-square flex items-center justify-center"
              role="img"
              aria-label="Placeholder for hero food image"
            >
              <div className="text-center text-[#1a1a20]">
                <div className="text-6xl mb-4" aria-hidden="true">🥔</div>
                <p className="font-bold text-xl">Hero Image</p>
                <p className="text-sm mt-1 opacity-70">TODO: Replace with real photo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-white/50 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
