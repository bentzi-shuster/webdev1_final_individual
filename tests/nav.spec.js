const { test,expect } = require("@playwright/test");

// tests for the nav menu link that goes to the top of the page
test('nav link "Benjamin Shuster" goes to top of page', async ({ page }) => {
    await page.goto('/');
    // scroll down
    await page.evaluate(() => window.scrollBy(0, 100));
    let navLink = await page.locator('text=Benjamin Shuster');
    await navLink.waitFor({ state: 'visible' });
    await navLink.click();
    let pageTop = await page.evaluate(() => window.pageYOffset);
    expect(pageTop).toBe(0);
});
// on a mobile device, the nav menu is hidden behind a hamburger menu
test('nav menu is hidden behind hamburger menu on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 385, height: 812 });
    let NavLinks = await page.locator('nav details a').all();
    for (let i = 0; i < NavLinks.length; i++) {
        await NavLinks[i].waitFor({ state: 'attached' })
        expect(await NavLinks[i].isVisible()).toBe(false);
    }
})
// on a desktop device, the nav menu is visible
test('nav menu is visible on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1024, height: 768 });
    let NavLinks = await page.locator('nav details a').all();
    for (let i = 0; i < NavLinks.length; i++) {
        await NavLinks[i].waitFor({ state: 'visible' })
        expect(await NavLinks[i].isVisible()).toBe(true);
    }
})


test('check the dark mode toggle', async ({ page }) => {
    await page.goto('/');
    let darkmodetoggle = await page.locator('nav details button');
    await darkmodetoggle.waitFor({ state: 'visible' })
    await darkmodetoggle.click();
    let darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('dark');
    await darkmodetoggle.click();
    darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('light');
})

test('check the dark mode toggle with default darkmode', async ({ page,colorScheme }) => {
    await page.goto('/');
    //set prefers-color-scheme to dark
    await page.emulateMedia({ colorScheme: 'dark' });
    let darkmodetoggle = await page.locator('nav details button');
    await darkmodetoggle.waitFor({ state: 'visible' })
    await darkmodetoggle.click();
    let darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('light');
    await darkmodetoggle.click();
    darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('dark');
})

test('check the dark mode toggle with default ligtMode', async ({ page,colorScheme }) => {
    await page.goto('/');
    //set prefers-color-scheme to dark
    await page.emulateMedia({ colorScheme: 'light' });
    let darkmodetoggle = await page.locator('nav details button');
    await darkmodetoggle.waitFor({ state: 'visible' })
    await darkmodetoggle.click();
    let darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('dark');
    await darkmodetoggle.click();
    darkmodestatus = await page.locator('html').getAttribute('data-theme');
    expect(darkmodestatus).toBe('light');
})


test('(mobile) check the summary of the nav menu details  element', async ({ page }) => {
    await page.goto('/');
    let navDetails = await page.locator('nav details');
    await navDetails.waitFor({ state: 'visible' })
    await page.setViewportSize({ width: 385, height: 812 });
    let summary = await navDetails.locator('summary');
    await summary.waitFor({ state: 'visible' })
    await summary.click();
    let navLinks = await navDetails.locator('a').all();
    for (let i = 0; i < navLinks.length; i++) {
        expect(await navLinks[i].isVisible()).toBe(true);
    }
    await summary.click();
    for (let i = 0; i < navLinks.length; i++) {
        expect(await navLinks[i].isVisible()).toBe(false);
    }
})