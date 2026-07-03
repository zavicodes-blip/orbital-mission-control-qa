import { test, expect } from '@playwright/test';

test('loads the mission operator login page', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: /mission operator login/i })
  ).toBeVisible();
});