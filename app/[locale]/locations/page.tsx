import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import LocationCard from '@/components/LocationCard';

interface LocationsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocationsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'locations' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function LocationsPage({ params }: LocationsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('locations');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header */}
      <div className="bg-[#1a1a20] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">{t('heading')}</h1>
          <p className="text-white/60 text-lg">{t('subtitle')}</p>
        </div>
      </div>

      {/* Locations grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <LocationCard locationKey="chabanel" showMap={true} />
          <LocationCard locationKey="cotedeneiges" showMap={true} />
        </div>
      </div>
    </div>
  );
}
