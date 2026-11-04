import { type Page, type Locator } from '@playwright/test';

export class CheckoutPage {
  readonly checkoutButton: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly error: Locator;

  constructor(private readonly page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.error = page.locator('[data-test="error"]');
  }

  async start(first: string, last: string, postal: string) {
    await this.checkoutButton.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}