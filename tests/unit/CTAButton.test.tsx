import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CTAButton from '@/components/CTAButton';

describe('CTAButton', () => {
  it('renders without crashing', () => {
    render(<CTAButton href="/menu">View Menu</CTAButton>);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('renders children text', () => {
    render(<CTAButton href="/menu">View Menu</CTAButton>);
    expect(screen.getByText('View Menu')).toBeInTheDocument();
  });

  it('has correct href', () => {
    render(<CTAButton href="/menu">View Menu</CTAButton>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/menu');
  });

  it('opens in new tab when external is true', () => {
    render(
      <CTAButton href="https://ubereats.com" external>
        Order on UberEats
      </CTAButton>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not have target="_blank" when external is false', () => {
    render(<CTAButton href="/menu">View Menu</CTAButton>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target', '_blank');
  });

  it('applies primary variant classes by default', () => {
    render(<CTAButton href="/menu">Button</CTAButton>);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-[#f3a42a]');
  });

  it('applies outline variant classes', () => {
    render(
      <CTAButton href="/menu" variant="outline">
        Button
      </CTAButton>,
    );
    const link = screen.getByRole('link');
    expect(link).toHaveClass('border-2');
  });

  it('applies custom aria-label', () => {
    render(
      <CTAButton href="/menu" ariaLabel="Go to menu page">
        Menu
      </CTAButton>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Go to menu page');
  });
});
