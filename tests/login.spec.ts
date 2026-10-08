import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test('standard user reaches the inventory', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page.getByText('Products')).toBeVisible();
});

test('locked out user sees an error', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');
  await expect(login.error).toContainText('Sorry, this user has been locked out.');
});