const { test, expect } = require('@playwright/test');


test('all cards have text', async ({ page }) => {
    await page.goto('/');
   let cards = await page.locator('.bordercardcardwrapper div').all()
//    wait for the cards to load
    await page.waitForSelector('.bordercardcardwrapper div');
   for (let card of cards) {
      let p = await card.locator('p');
      let h4 = await card.locator('h4');
    //   expect text to be present
        expect(await p.innerText()).toBeTruthy();
        expect(await h4.innerText()).toBeTruthy();
    }
});

