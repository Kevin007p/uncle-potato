import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuItem from '@/components/MenuItem';

const mockItem = {
  name: 'Classic Burger',
  description: 'Juicy halal beef patty with lettuce and tomato',
  price: 12.99,
  image: '/images/menu/placeholder-burger.png',
  imageAlt: 'Classic Burger',
};

describe('MenuItem', () => {
  it('renders without crashing', () => {
    render(<MenuItem {...mockItem} />);
    expect(screen.getByRole('article')).toBeInTheDocument();
  });

  it('displays item name', () => {
    render(<MenuItem {...mockItem} />);
    expect(screen.getByRole('heading', { name: 'Classic Burger' })).toBeInTheDocument();
  });

  it('displays item description', () => {
    render(<MenuItem {...mockItem} />);
    expect(screen.getByText('Juicy halal beef patty with lettuce and tomato')).toBeInTheDocument();
  });

  it('displays formatted price', () => {
    render(<MenuItem {...mockItem} />);
    expect(screen.getByText('$12.99')).toBeInTheDocument();
  });

  it('displays placeholder with alt text', () => {
    render(<MenuItem {...mockItem} />);
    const placeholder = screen.getByRole('img');
    expect(placeholder).toHaveAttribute('aria-label', 'Placeholder for Classic Burger');
  });

  it('formats price with 2 decimal places', () => {
    render(<MenuItem {...mockItem} price={10} />);
    expect(screen.getByText('$10.00')).toBeInTheDocument();
  });
});
