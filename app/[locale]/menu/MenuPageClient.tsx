'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import MenuSection from '@/components/MenuSection';
import menuData from '@/data/menu.json';

export default function MenuPageClient() {
  const t = useTranslations('menu');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#1a1a20] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">{t('heading')}</h1>
            <p className="text-white/60 text-lg">{t('subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Sticky category navigation */}
      <nav
        className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm"
        aria-label="Menu categories"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3">
            {menuData.categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold text-gray-600 hover:bg-[#f3a42a] hover:text-[#1a1a20] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] whitespace-nowrap"
              >
                {locale === 'fr' ? cat.name_fr : cat.name_en}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {menuData.categories.map((cat) => (
          <MenuSection
            key={cat.id}
            id={cat.id}
            name={locale === 'fr' ? cat.name_fr : cat.name_en}
            items={cat.items}
            locale={locale}
          />
        ))}

        <p className="text-center text-sm text-gray-400 pb-4">{t('beforeTax')}</p>
      </div>
    </div>
  );
}
