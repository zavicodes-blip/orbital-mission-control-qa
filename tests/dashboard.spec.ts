import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { users } from './data/users';

test('displays critical mission dashboard information after login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.verifyLoaded();
  await loginPage.login(users.valid.username, users.valid.password);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifyMissionOverviewVisible();
  await dashboardPage.verifyOperationalSectionsVisible();
});