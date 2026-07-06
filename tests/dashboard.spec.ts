import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { users } from './data/users';
import {
  dashboardMetrics,
  expectedMissionQueue,
  expectedOperationalAlerts,
  expectedSpacecraftFleet,
} from './data/dashboardData';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.verifyLoaded();
  await loginPage.login(users.valid.username, users.valid.password);
});

test('displays critical mission dashboard information after login', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifyMissionOverviewVisible();
  await dashboardPage.verifyOperationalSectionsVisible();
});

test('displays expected dashboard metric values', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifyDashboardMetrics(dashboardMetrics);
});

test('displays spacecraft fleet cards with telemetry details', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifySpacecraftFleet(expectedSpacecraftFleet);
});

test('displays mission queue items with priority and status', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifyMissionQueue(expectedMissionQueue);
});

test('displays operational alerts with severity and spacecraft details', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.verifyOperationalAlerts(expectedOperationalAlerts);
});

test('filters mission queue by mission name', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.filterMissions('Telemetry');

  await dashboardPage.verifyMissionVisible('Telemetry Sweep');
  await dashboardPage.verifyMissionNotVisible('Sentinel Watch');
  await dashboardPage.verifyMissionNotVisible('Orbital Reserve');
});

test('filters mission queue by mission ID', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.filterMissions('M-1043');

  await dashboardPage.verifyMissionVisible('Orbital Reserve');
  await dashboardPage.verifyMissionNotVisible('Sentinel Watch');
  await dashboardPage.verifyMissionNotVisible('Telemetry Sweep');
});

test('shows empty state when mission filter has no matches', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.verifyLoaded();
  await dashboardPage.filterMissions('not-real');

  await dashboardPage.verifyMissionFilterEmptyState();
});