const { test, expect } = require("@playwright/test");

//expect both the .toolboxul li count to be greater than 1
test("test toolbox ul li count", async ({ page }) => {
    await page.goto("/");
    const toolboxul = await page.locator(".toolboxul").all();
    for (let i = 0; i < toolboxul.length; i++) {
        toolboxul[i].locator("li").first().waitFor({ state: "visible" });
        let toolboxulli = await toolboxul[i].locator("li").all()
        expect(toolboxulli.length).toBeGreaterThan(1);
    }
});

//expect the toolbox ul li img to have an alt and src attribute
test("test toolbox ul li img", async ({ page }) => {
    await page.goto("/");
    const toolboxul = await page.locator(".toolboxul").all();
    for (let i = 0; i < toolboxul.length; i++) {
        toolboxul[i].locator("li").first().waitFor({ state: "visible" });
        let toolboxulli = await toolboxul[i].locator("li").all()
        for (let j = 0; j < toolboxulli.length; j++) {
            expect(await toolboxulli[j].locator("img").first().getAttribute("alt")).toBeTruthy();
            expect(await toolboxulli[j].locator("img").first().getAttribute("src")).toBeTruthy();
        }
    }
});