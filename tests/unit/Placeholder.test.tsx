import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Placeholder from '@/components/Placeholder';

describe('Placeholder', () => {
  it('renders without crashing', () => {
    render(<Placeholder label="Test Image" />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('displays the label text', () => {
    render(<Placeholder label="Hero Image" />);
    expect(screen.getByText('Hero Image')).toBeInTheDocument();
  });

  it('has correct aria-label with placeholder prefix', () => {
    render(<Placeholder label="Burger Photo" />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Placeholder for Burger Photo');
  });

  it('applies custom className', () => {
    const { container } = render(<Placeholder label="Test" className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
