import { type Locator, type Page } from '@playwright/test';

export class InventoryPage {
  readonly cartBadge: Locator;
  readonly addBackpack: Locator;

  constructor(private readonly page: Page) {
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.addBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  async addBackpackToCart() {
    await this.addBackpack.click();
  }
}