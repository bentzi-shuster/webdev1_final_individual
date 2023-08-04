const { test,expect } = require("@playwright/test");

//check that the form can be submitted
test('check that the form can be submitted', async ({ page }) => {
    await page.goto('/');
    let form = await page.locator('form');
    await form.waitFor({ state: 'visible' })
    let email = await form.locator('input[type="email"]')
    await email.fill("iam@your.house");
    await form.locator('input[type="text"]').fill("it's me");
    await form.locator('button[type="submit"]').click();
    //js window.alert()
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Thank you for subscribing!');
        await dialog.dismiss();
    }
    );
});

//dont include the @ symbol in the email
test('dont include the @ symbol in the email', async ({ page }) => {
    await page.goto('/');
    let form = await page.locator('form');
    await form.waitFor({ state: 'visible' })
    let email = await form.locator('input[type="email"]')
    await email.fill("iamyour.house");
    await form.locator('input[type="text"]').fill("it's me");
    await form.locator('button[type="submit"]').click();
    //js window.alert()
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please provide a valid email address');
        await dialog.dismiss();
    }
    );
});

// no email
test('no email', async ({ page }) => {
    await page.goto('/');
    let form = await page.locator('form');
    await form.waitFor({ state: 'visible' })
    await form.locator('input[type="text"]').fill("it's me");
    await form.locator('button[type="submit"]').click();
    //js window.alert()
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please provide a valid email address');
        await dialog.dismiss();
    }
    );
}
);

// no name
test('no name', async ({ page }) => {
    await page.goto('/');
    let form = await page.locator('form');
    await form.waitFor({ state: 'visible' })
    let email = await form.locator('input[type="email"]')
    await email.fill("iam@your.house");
    await form.locator('button[type="submit"]').click();
    //js window.alert()
    await page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Please provide your name');
        await dialog.dismiss();
    }
    );
}
);

