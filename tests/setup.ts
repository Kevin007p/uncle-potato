import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: (namespace: string) => (key: string) => `${namespace}.${key}`,
  useLocale: () => 'en',
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
  getTranslations: () => (key: string) => key,
  getMessages: () => ({}),
}));

// Mock next-intl/server
vi.mock('next-intl/server', () => ({
  getTranslations: () => async (key: string) => key,
  getMessages: async () => ({}),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
  notFound: vi.fn(),
}));

// Mock i18n navigation
vi.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => {
    const React = require('react');
    return React.createElement('a', { href, ...props }, children);
  },
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
  usePathname: () => '/',
  redirect: vi.fn(),
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
      const React = require('react');
      return React.createElement('div', props, children);
    },
    article: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
      const React = require('react');
      return React.createElement('article', props, children);
    },
    section: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => {
      const React = require('react');
      return React.createElement('section', props, children);
    },
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));
