'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import menuData from '@/data/menu.json';
import MenuItem from './MenuItem';

export default function FeaturedMenu() {
  const t = useTranslations('home');
  const locale = useLocale();

  // Collect featured items across all categories (max 6)
  const featuredItems = menuData.categories
    .flatMap((cat) => cat.items.filter((item) => item.featured))
    .slice(0, 6);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a20] mb-3">{t('featuredTitle')}</h2>
          <p className="text-gray-600 text-lg">{t('featuredSubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredItems.map((item) => (
            <MenuItem
              key={item.id}
              name={locale === 'fr' ? item.name_fr : item.name_en}
              description={locale === 'fr' ? item.description_fr : item.description_en}
              price={item.price}
              image={item.image}
              imageAlt={locale === 'fr' ? item.name_fr : item.name_en}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#1a1a20] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#2a2a30] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2"
          >
            {t('viewFullMenu')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
