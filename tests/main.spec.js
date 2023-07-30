// @ts-check
const { test, expect } = require('@playwright/test');

test('status code is 200', async ({ page }) => {
  await page.goto('/');
  const status = await page.evaluate(() => fetch('/').then((res) => res.status));
  expect(status).toBe(200);
});
