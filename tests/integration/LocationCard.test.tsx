import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import LocationCard from '@/components/LocationCard';
import { siteConfig, externalLinks } from '@/config/links';

// Mock next-intl for this component
vi.mock('next-intl', () => ({
  useTranslations: (namespace: string) => {
    const translations: Record<string, Record<string, string>> = {
      locations: {
        'chabanel.name': 'Chabanel',
        'cotedeneiges.name': 'Côte-des-Neiges',
        'chabanel.hours.satTue': 'Sat–Tue: 4:00 PM – 11:00 PM',
        'chabanel.hours.wed': 'Wed: 4:00 PM – 12:00 AM',
        'chabanel.hours.thuFri': 'Thu–Fri: 4:00 PM – 11:00 PM',
        'cotedeneiges.hours.daily': 'Daily: 11:30 AM – 11:00 PM',
        address: 'Address',
        phone: 'Phone',
        hours: 'Hours',
        orderUberEats: 'Order on UberEats',
        orderSkip: 'Order on SkipTheDishes',
        mapsPlaceholder: 'Google Maps Embed',
        mapsTodo: 'TODO: Replace with real Google Maps embed URL',
      },
    };
    return (key: string) => translations[namespace]?.[key] ?? key;
  },
}));

describe('LocationCard - Chabanel', () => {
  it('renders location name', () => {
    render(<LocationCard locationKey="chabanel" />);
    expect(screen.getByText('Chabanel')).toBeInTheDocument();
  });

  it('displays correct address', () => {
    render(<LocationCard locationKey="chabanel" />);
    expect(screen.getByText(siteConfig.locations.chabanel.address)).toBeInTheDocument();
  });

  it('renders phone number as tel: link', () => {
    render(<LocationCard locationKey="chabanel" />);
    const phoneLink = screen.getByRole('link', { name: /438/ });
    expect(phoneLink).toHaveAttribute('href', siteConfig.locations.chabanel.phoneHref);
  });

  it('renders UberEats link with target="_blank"', () => {
    render(<LocationCard locationKey="chabanel" />);
    const uberLink = screen.getByRole('link', { name: /ubereats/i });
    expect(uberLink).toHaveAttribute('href', externalLinks.locations.chabanel.ubereats);
    expect(uberLink).toHaveAttribute('target', '_blank');
    expect(uberLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders SkipTheDishes link with target="_blank"', () => {
    render(<LocationCard locationKey="chabanel" />);
    const skipLink = screen.getByRole('link', { name: /skip/i });
    expect(skipLink).toHaveAttribute('href', externalLinks.locations.chabanel.skipthedishes);
    expect(skipLink).toHaveAttribute('target', '_blank');
  });
});

describe('LocationCard - Côte-des-Neiges', () => {
  it('renders location name', () => {
    render(<LocationCard locationKey="cotedeneiges" />);
    expect(screen.getByText('Côte-des-Neiges')).toBeInTheDocument();
  });

  it('displays correct address', () => {
    render(<LocationCard locationKey="cotedeneiges" />);
    expect(screen.getByText(siteConfig.locations.cotedeneiges.address)).toBeInTheDocument();
  });

  it('renders phone number as tel: link', () => {
    render(<LocationCard locationKey="cotedeneiges" />);
    const phoneLink = screen.getByRole('link', { name: /514/ });
    expect(phoneLink).toHaveAttribute('href', siteConfig.locations.cotedeneiges.phoneHref);
  });
});
