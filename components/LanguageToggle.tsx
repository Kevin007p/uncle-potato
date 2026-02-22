'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useTransition } from 'react';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const locale = useLocale();
  const t = useTranslations('lang');
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function handleChange() {
    const nextLocale = locale === 'en' ? 'fr' : 'en';
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      onClick={handleChange}
      className={`flex items-center gap-1 px-3 py-1.5 rounded-md border border-[#f3a42a] text-[#f3a42a] font-bold text-sm hover:bg-[#f3a42a] hover:text-[#1a1a20] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f3a42a] focus:ring-offset-2 disabled:opacity-50 ${className}`}
      disabled={isPending}
      aria-label={t('switchTo')}
    >
      <span aria-hidden="true">{t('current')}</span>
      <span className="sr-only">{t('switchTo')}</span>
      <span aria-hidden="true" className="opacity-50">|</span>
      <span aria-hidden="true">{t('toggle')}</span>
    </button>
  );
}
