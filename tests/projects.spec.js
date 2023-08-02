const { test, expect } = require("@playwright/test");

test("test projects img for an alt and src", async ({ page }) => {
    await page.goto("/");
    const cards = await page.locator(".card").all();
    for (const card of cards) {
        await card.waitFor({ state: "visible" })
        //check if there is an img tag in the card
        const imgs = await card.locator("img").all();
        if (imgs.length > 0) {
    await card.locator("img").first().waitFor({ state: "visible" });
    for (const i of imgs) {
        const alt = await i.getAttribute("alt");
        const src = await i.getAttribute("src");
        expect(alt).toBeTruthy();
        expect(src).toBeTruthy();
    }
        }
    }
});
