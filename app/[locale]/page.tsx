import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import FeaturedMenu from '@/components/FeaturedMenu';
import LocationsPreview from '@/components/LocationsPreview';
import InstagramCTA from '@/components/InstagramCTA';
import JsonLd from '@/components/JsonLd';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'halal restaurant montreal',
      'burgers montreal',
      'best burgers montreal',
      'fast food montreal',
      'halal food montreal',
      'uncle potato',
      'oncle patate',
      'baked potatoes montreal',
      'chicken tenders montreal',
    ],
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Hero />
      <FeaturedMenu />
      <LocationsPreview />
      <InstagramCTA />
    </>
  );
}
