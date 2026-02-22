'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const galleryItems = [
  'Burger Photo',
  'Baked Potato Photo',
  'Chicken Tenders Photo',
  'Smoothie Photo',
  'Fries Photo',
  'Restaurant Interior Photo',
];

export default function GalleryGrid() {
  const t = useTranslations('home');

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1a1a20]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">{t('galleryTitle')}</h2>
          <p className="text-white/60 text-lg">{t('gallerySubtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="aspect-square overflow-hidden rounded-xl hover:scale-[1.02] transition-transform duration-300"
            >
              {/* TODO: Replace with real food photo */}
              <div
                className="w-full h-full bg-[#f3a42a] flex items-center justify-center"
                role="img"
                aria-label={`Placeholder for ${item}`}
              >
                <div className="text-center text-[#1a1a20] px-4">
                  <p className="font-bold text-sm">{item}</p>
                  <p className="text-xs mt-1 opacity-60">TODO: Replace with real photo</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
