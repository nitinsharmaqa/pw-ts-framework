import { test, expect } from '../fixtures/auth';
import { InventoryPage } from '../pages/inventory.page';

test('backpack is added to the cart', async ({ page }) => {
  const inventory = new InventoryPage(page);
  await inventory.addBackpackToCart();
  await expect(inventory.cartBadge).toHaveText('1');
});