import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByLabel(/username/i);
    this.passwordInput = page.getByLabel(/password/i);
    this.loginButton = page.getByRole('button', {
    name: /access mission control/i,
    });

    this.heading = page.getByRole('heading', {
      name: /mission operator login/i,
    });
  }

  async goto() {
    await this.page.goto('/');
  }

  async verifyLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}