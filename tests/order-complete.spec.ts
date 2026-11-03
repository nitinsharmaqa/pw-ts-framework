import { test, expect } from '../fixtures/auth';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';

test('order can be completed', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await inventory.addBackpackToCart();
  await inventory.openCart();
  await checkout.start('Nitin', 'Sharma', '400001');
  await checkout.finish();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});