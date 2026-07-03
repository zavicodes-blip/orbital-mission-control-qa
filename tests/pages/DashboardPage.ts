import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly activeMissionsMetric: Locator;
  readonly spacecraftOnlineMetric: Locator;
  readonly fleetStatusSection: Locator;
  readonly missionQueueSection: Locator;
  readonly operationalAlertsSection: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', { name: /operations dashboard/i });
    this.activeMissionsMetric = page.getByText(/active missions/i);
    this.spacecraftOnlineMetric = page.getByText(/spacecraft online/i);
    this.fleetStatusSection = page.getByRole('heading', { name: /fleet status/i });
    this.missionQueueSection = page.getByRole('heading', { name: /mission queue/i });
    this.operationalAlertsSection = page.getByRole('heading', { name: /operational alerts/i });
  }

  async verifyLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async verifyMissionOverviewVisible() {
    await expect(this.activeMissionsMetric).toBeVisible();
    await expect(this.spacecraftOnlineMetric).toBeVisible();
  }

  async verifyOperationalSectionsVisible() {
    await expect(this.fleetStatusSection).toBeVisible();
    await expect(this.missionQueueSection).toBeVisible();
    await expect(this.operationalAlertsSection).toBeVisible();
  }
}