import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('user visits homepage and sees hero section', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByRole('heading', { name: /uncle potato/i, level: 1 })).toBeVisible();
    await expect(page.getByText('Oncle Patate')).toBeVisible();
    await expect(page.getByText(/montreal/i)).toBeVisible();
  });

  test('homepage shows featured menu items', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText('Popular Items')).toBeVisible();
    // At least one menu item card should appear
    await expect(page.getByRole('article').first()).toBeVisible();
  });

  test('homepage shows locations preview', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText('Our Locations')).toBeVisible();
    await expect(page.getByText('Chabanel')).toBeVisible();
    await expect(page.getByText('Côte-des-Neiges')).toBeVisible();
  });

  test('homepage shows gallery section', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText('Our Food')).toBeVisible();
  });

  test('homepage shows Instagram CTA', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText(/instagram/i)).toBeVisible();
  });

  test('UberEats CTA button opens new tab', async ({ page }) => {
    await page.goto('/en');
    const uberLink = page.getByRole('link', { name: /order on ubereats/i }).first();
    await expect(uberLink).toHaveAttribute('target', '_blank');
  });
});

test.describe('Language Switching', () => {
  test('user switches language from EN to FR', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByRole('heading', { name: /uncle potato/i, level: 1 })).toBeVisible();

    // Click language toggle
    await page.getByRole('button', { name: /switch to french/i }).click();

    // Should navigate to French version
    await expect(page).toHaveURL(/\/fr/);
    await expect(page.getByText("Le Fast-Food Préféré de Montréal")).toBeVisible();
  });

  test('French version shows French text', async ({ page }) => {
    await page.goto('/fr');
    await expect(page.getByText("Le Fast-Food Préféré de Montréal")).toBeVisible();
    await expect(page.getByText('Articles Populaires')).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('user can navigate to menu page', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('link', { name: 'Menu' }).first().click();
    await expect(page).toHaveURL(/\/menu/);
    await expect(page.getByRole('heading', { name: 'Our Menu' })).toBeVisible();
  });

  test('user can navigate to locations page', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('link', { name: 'Locations' }).first().click();
    await expect(page).toHaveURL(/\/locations/);
    await expect(page.getByRole('heading', { name: 'Our Locations' })).toBeVisible();
  });

  test('user can navigate to about page', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: 'About Us' })).toBeVisible();
  });
});

test.describe('Menu Page', () => {
  test('menu page shows all categories', async ({ page }) => {
    await page.goto('/en/menu');
    await expect(page.getByRole('heading', { name: 'Burgers' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Baked Potatoes' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Chicken Tenders' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Smoothies' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Fries' })).toBeVisible();
  });

  test('menu page shows item prices', async ({ page }) => {
    await page.goto('/en/menu');
    await expect(page.getByText('$12.99').first()).toBeVisible();
  });

  test('French menu shows French item names', async ({ page }) => {
    await page.goto('/fr/menu');
    await expect(page.getByText('Burger Classique')).toBeVisible();
    await expect(page.getByText('Pommes de Terre au Four')).toBeVisible();
  });
});

test.describe('Locations Page', () => {
  test('locations page shows both locations', async ({ page }) => {
    await page.goto('/en/locations');
    await expect(page.getByText('Chabanel')).toBeVisible();
    await expect(page.getByText('Côte-des-Neiges')).toBeVisible();
  });

  test('locations page shows phone numbers as tel: links', async ({ page }) => {
    await page.goto('/en/locations');
    const phoneLinks = page.getByRole('link', { name: /\(438\)|514/ });
    await expect(phoneLinks.first()).toBeVisible();
  });

  test('locations page shows UberEats links', async ({ page }) => {
    await page.goto('/en/locations');
    const uberLinks = page.getByRole('link', { name: /order on ubereats/i });
    await expect(uberLinks.first()).toHaveAttribute('target', '_blank');
  });
});

test.describe('About Page', () => {
  test('about page shows HALAL messaging', async ({ page }) => {
    await page.goto('/en/about');
    await expect(page.getByText(/halal/i).first()).toBeVisible();
  });

  test('about page has Visit Locations CTA', async ({ page }) => {
    await page.goto('/en/about');
    await expect(page.getByRole('link', { name: /visit our locations/i })).toBeVisible();
  });
});

test.describe('404 Page', () => {
  test('non-existent page shows custom 404', async ({ page }) => {
    await page.goto('/en/nonexistent-page');
    await expect(page.getByText('404')).toBeVisible();
    await expect(page.getByRole('link', { name: /go home/i })).toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test('mobile hamburger menu opens and closes', async ({ page }) => {
    await page.goto('/en');
    const hamburger = page.getByRole('button', { name: /open menu/i });
    await hamburger.click();

    // Menu should be visible
    await expect(page.getByRole('navigation', { name: /mobile/i })).toBeVisible();

    // Close button should work
    await page.getByRole('button', { name: /close menu/i }).click();
    await expect(page.getByRole('navigation', { name: /mobile/i })).not.toBeVisible();
  });

  test('mobile menu contains navigation links', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('button', { name: /open menu/i }).click();

    const mobileNav = page.getByRole('navigation', { name: /mobile/i });
    await expect(mobileNav.getByRole('link', { name: 'Menu' })).toBeVisible();
    await expect(mobileNav.getByRole('link', { name: 'Locations' })).toBeVisible();
  });
});
