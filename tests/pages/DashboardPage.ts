import { expect, type Locator, type Page } from '@playwright/test';

type DashboardMetric = {
  label: string;
  value: string;
};

type Spacecraft = {
  id: string;
  status: string;
  mission: string;
  altitude: string;
  velocity: string;
  fuel: string;
  health: string;
};

type MissionQueueItem = {
  id: string;
  name: string;
  priority: string;
  status: string;
};

type OperationalAlert = {
  id: string;
  title: string;
  severity: string;
  spacecraft: string;
};

export class DashboardPage {
  readonly page: Page;

  readonly heading: Locator;
  readonly activeMissionsMetric: Locator;
  readonly spacecraftOnlineMetric: Locator;
  readonly fleetStatusSection: Locator;
  readonly missionQueueSection: Locator;
  readonly operationalAlertsSection: Locator;

  readonly metricCards: Locator;
  readonly spacecraftCards: Locator;
  readonly missionRows: Locator;
  readonly alertRows: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', { name: /operations dashboard/i });
    this.activeMissionsMetric = page.getByText(/active missions/i);
    this.spacecraftOnlineMetric = page.getByText(/spacecraft online/i);
    this.fleetStatusSection = page.getByRole('heading', { name: /fleet status/i });
    this.missionQueueSection = page.getByRole('heading', { name: /mission queue/i });
    this.operationalAlertsSection = page.getByRole('heading', { name: /operational alerts/i });

    this.metricCards = page.locator('.metric-card');
    this.spacecraftCards = page.locator('.spacecraft-card');
    this.missionRows = page.locator('.mission-row');
    this.alertRows = page.locator('.alert-row');
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

  async verifyDashboardMetrics(metrics: DashboardMetric[]) {
    await expect(this.metricCards).toHaveCount(metrics.length);

    for (const metric of metrics) {
      const metricCard = this.metricCards.filter({ hasText: metric.label });

      await expect(metricCard).toBeVisible();
      await expect(metricCard).toContainText(metric.value);
    }
  }

  async verifySpacecraftFleet(spacecraftFleet: Spacecraft[]) {
    await expect(this.spacecraftCards).toHaveCount(spacecraftFleet.length);

    for (const spacecraft of spacecraftFleet) {
      const spacecraftCard = this.spacecraftCards.filter({
        hasText: spacecraft.id,
      });

      await expect(spacecraftCard).toBeVisible();
      await expect(spacecraftCard).toContainText(spacecraft.status);
      await expect(spacecraftCard).toContainText(spacecraft.mission);
      await expect(spacecraftCard).toContainText(spacecraft.altitude);
      await expect(spacecraftCard).toContainText(spacecraft.velocity);
      await expect(spacecraftCard).toContainText(spacecraft.fuel);
      await expect(spacecraftCard).toContainText(spacecraft.health);
    }
  }

  async verifyMissionQueue(missionQueue: MissionQueueItem[]) {
    await expect(this.missionRows).toHaveCount(missionQueue.length);

    for (const mission of missionQueue) {
      const missionRow = this.missionRows.filter({ hasText: mission.id });

      await expect(missionRow).toBeVisible();
      await expect(missionRow).toContainText(mission.name);
      await expect(missionRow).toContainText(mission.priority);
      await expect(missionRow).toContainText(mission.status);
    }
  }

  async verifyOperationalAlerts(alerts: OperationalAlert[]) {
    await expect(this.alertRows).toHaveCount(alerts.length);

    for (const alert of alerts) {
      const alertRow = this.alertRows.filter({ hasText: alert.title });

      await expect(alertRow).toBeVisible();
      await expect(alertRow).toContainText(alert.spacecraft);
      await expect(alertRow).toContainText(alert.severity);
    }
  }
}