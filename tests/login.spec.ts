import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { users } from './data/users';

test('allows a valid operator to access the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.verifyLoaded();

  await loginPage.login(users.valid.username, users.valid.password);

  await expect(
    page.getByRole('heading', { name: /operations dashboard/i })
  ).toBeVisible();
});