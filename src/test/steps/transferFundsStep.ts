
import { Given, When, Then } from '@cucumber/cucumber';
import { Page, Browser, chromium, expect } from '@playwright/test';

let browser: Browser;
let page: Page;

Given('User navegate to the application', async function () {      
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('C:/Users/Shizue/Documents/workspace/Playwright_Planet_2.0/data/banking.html');
    //await page.waitForTimeout(5000);
});

Then('I should see the form', async function () {
    await expect(page.locator('#{transferForm}')).toBeVisible()
    // await page.locator('body').click();
    // await page.goto('file:///C:/Users/Shizue/Documents/workspace/Playwright_Planet_2.0/data/banking.html');
    // await page.getByRole('heading', { name: 'Fund Transfer' }).click();
    // await page.getByText('From Account:').click();
    // await page.getByRole('textbox', { name: 'From Account:' }).fill('flavia');
    // await page.getByRole('textbox', { name: 'From Account:' }).press('Enter');
    // await page.getByText('To Account:').click();
    // await page.getByRole('textbox', { name: 'To Account:' }).click();
    // await page.getByText('Amount:').click();
    // await page.getByText('Currency:').click();
    // await page.getByRole('button', { name: 'Transfer Funds' }).click();
    // await page.locator('html').click();
    // await page.getByRole('textbox', { name: 'To Account:' }).click();
    // await page.getByRole('textbox', { name: 'To Account:' }).fill('test');
    // await page.getByRole('spinbutton', { name: 'Amount:' }).click();
    // await page.getByRole('spinbutton', { name: 'Amount:' }).click();
    // await page.getByRole('spinbutton', { name: 'Amount:' }).fill('');
    // await page.getByLabel('Currency:').selectOption('EUR');
    // await page.getByRole('button', { name: 'Transfer Funds' }).click()
     await browser.close();
});

Then('I should see the fields', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I fill in the form with valid data', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see a success message', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('I fill in the form with invalid data', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I should see an error message', async function () {
    // Write code here that turns the phrase above into concrete actions
    //let form = document.querySelector('form') as HTMLFormElement;
    //console.log(form.checkValidity());
    //await expect(page.locator('error-message')).toBeVisible();
    await browser.close();
});
