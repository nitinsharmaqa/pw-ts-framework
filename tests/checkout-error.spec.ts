import { test, expect } from '../fixtures/auth';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';

test('missing postal code shows an error', async ({ page }) => {
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await inventory.addBackpackToCart();
  await inventory.openCart();
  await checkout.checkoutButton.click();
  await checkout.firstName.fill('Nitin');
  await checkout.lastName.fill('Sharma');
  await checkout.continueButton.click();

  await expect(checkout.error).toContainText('Postal Code is required');
});