import { test, expect } from '@playwright/test';
const url= 'https://e-commerce-dev.betterbytesvn.com/';
test('has title', async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

test('get started link', async ({ page }) => {
  await page.goto(url);

  // Click the get started link.
  await page.getByRole('link', { name: 'My account' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
