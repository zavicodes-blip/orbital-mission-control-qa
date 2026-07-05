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

test('shows an error when credentials are invalid', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login(users.invalid.username, users.invalid.password)

  await loginPage.verifyLoginError('Invalid username or password.')
  await loginPage.verifyLoginPageVisible()
})

test('shows validation when username and password are empty', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login('', '')

  await loginPage.verifyLoginError('Username and password are required.')
  await loginPage.verifyLoginPageVisible()
})

test('shows validation when username is missing', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login('', users.valid.password)

  await loginPage.verifyLoginError('Username is required.')
  await loginPage.verifyLoginPageVisible()
})

test('shows validation when password is missing', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.login(users.valid.username, '')

  await loginPage.verifyLoginError('Password is required.')
  await loginPage.verifyLoginPageVisible()
})