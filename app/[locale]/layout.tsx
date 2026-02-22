import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SetLang from '@/components/SetLang';

type Locale = 'en' | 'fr';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    metadataBase: new URL('https://unclepotato.ca'),
    title: {
      default: t('title'),
      template: '%s | Uncle Potato',
    },
    description: t('description'),
    icons: { icon: '/favicon.ico' },
    alternates: {
      canonical: `https://unclepotato.ca/${locale}`,
      languages: {
        'en-CA': 'https://unclepotato.ca/en',
        'fr-CA': 'https://unclepotato.ca/fr',
      },
    },
    openGraph: {
      images: [
        {
          url: '/images/og-placeholder.png',
          width: 1200,
          height: 630,
          alt: 'Uncle Potato / Oncle Patate',
        },
      ],
      locale: locale === 'fr' ? 'fr_CA' : 'en_CA',
      type: 'website',
    },
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SetLang />
      <a href="#main-content" className="skip-link">
        {locale === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
