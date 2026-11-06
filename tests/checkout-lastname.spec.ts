import { test, expect } from '../fixtures/auth';
import { InventoryPage } from '../pages/inventory.page';
import { CheckoutPage } from '../pages/checkout.page';

test('missing last name shows an error', async ({ page }) => 

{
  const inventory = new InventoryPage(page);
  const checkout = new CheckoutPage(page);

  await inventory.addBackpackToCart();
  await inventory.openCart();
  await checkout.checkoutButton.click();
  await checkout.firstName.fill('Nitin');
  await checkout.continueButton.click();

  await expect(checkout.error).toContainText('Last Name is required');
});