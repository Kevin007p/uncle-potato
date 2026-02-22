import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#1a1a20] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">{t('heading')}</h1>
          <p className="text-white/60 text-lg">{t('subtitle')}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* HALAL badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#f3a42a] text-[#1a1a20] font-black px-6 py-3 rounded-full text-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {t('halalBadge')}
          </div>
        </div>

        {/* Restaurant interior photo */}
        <img
          src="/images/interior.jpg"
          alt={t('imagePlaceholder')}
          className="rounded-2xl w-full aspect-video object-cover mb-12"
        />

        {/* Body copy */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">{t('para1')}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{t('para2')}</p>
          <p className="text-gray-700 text-lg leading-relaxed">{t('para3')}</p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-[#f3a42a] text-[#1a1a20] font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#d4911f] transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2"
          >
            {t('visitUs')}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
