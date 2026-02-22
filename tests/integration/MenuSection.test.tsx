import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import MenuSection from '@/components/MenuSection';
import menuData from '@/data/menu.json';

describe('MenuSection', () => {
  const burgerCategory = menuData.categories[0];

  it('renders category heading', () => {
    render(
      <MenuSection
        id={burgerCategory.id}
        name={burgerCategory.name_en}
        items={burgerCategory.items}
        locale="en"
      />,
    );
    expect(screen.getByRole('heading', { name: 'Burgers' })).toBeInTheDocument();
  });

  it('renders all items in the category', () => {
    render(
      <MenuSection
        id={burgerCategory.id}
        name={burgerCategory.name_en}
        items={burgerCategory.items}
        locale="en"
      />,
    );
    expect(screen.getByRole('heading', { name: 'Classic Burger' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Cheese Burger' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Spicy Burger' })).toBeInTheDocument();
  });

  it('renders French item names when locale is fr', () => {
    render(
      <MenuSection
        id={burgerCategory.id}
        name={burgerCategory.name_fr}
        items={burgerCategory.items}
        locale="fr"
      />,
    );
    expect(screen.getByRole('heading', { name: 'Burger Classique' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Burger au Fromage' })).toBeInTheDocument();
  });

  it('renders English item names when locale is en', () => {
    render(
      <MenuSection
        id={burgerCategory.id}
        name={burgerCategory.name_en}
        items={burgerCategory.items}
        locale="en"
      />,
    );
    expect(screen.getByRole('heading', { name: 'Classic Burger' })).toBeInTheDocument();
  });

  it('renders correct prices', () => {
    render(
      <MenuSection
        id={burgerCategory.id}
        name={burgerCategory.name_en}
        items={burgerCategory.items}
        locale="en"
      />,
    );
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText('$14.49')).toBeInTheDocument();
    expect(screen.getByText('$15.49')).toBeInTheDocument();
  });

  it('sets correct section id for anchor navigation', () => {
    render(
      <MenuSection
        id="burgers"
        name="Burgers"
        items={burgerCategory.items}
        locale="en"
      />,
    );
    expect(screen.getByRole('region', { name: /burgers/i })).toHaveAttribute('id', 'burgers');
  });
});
