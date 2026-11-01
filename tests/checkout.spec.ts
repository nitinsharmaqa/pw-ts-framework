/*import { test, expect } from '@playwright/test';
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
});*/

//Test - 01-11-2026
import { test, expect } from '../fixtures/auth';
import { InventoryPage } from '../pages/inventory.page';

test('cart shows the backpack', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addBackpackToCart();
  await inventory.openCart();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});