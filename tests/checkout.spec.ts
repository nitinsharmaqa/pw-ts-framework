import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('cart shows the backpack', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.addBackpackToCart();
  await inventory.openCart();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});