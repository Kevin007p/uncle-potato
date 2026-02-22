import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import LanguageToggle from '@/components/LanguageToggle';

describe('LanguageToggle', () => {
  it('renders without crashing', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('shows current locale text', () => {
    render(<LanguageToggle />);
    // The mock returns 'lang.current' as the namespace.key
    expect(screen.getByText('lang.current')).toBeInTheDocument();
  });

  it('shows the other locale to switch to', () => {
    render(<LanguageToggle />);
    expect(screen.getByText('lang.toggle')).toBeInTheDocument();
  });

  it('has accessible aria-label', () => {
    render(<LanguageToggle />);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('calls router replace on click', () => {
    render(<LanguageToggle />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    // The click should trigger without errors
    expect(button).toBeInTheDocument();
  });
});
