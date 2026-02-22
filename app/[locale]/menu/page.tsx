import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import MenuPageClient from './MenuPageClient';

interface MenuPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'menu' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
    },
  };
}

export default async function MenuPage({ params }: MenuPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MenuPageClient />;
}
