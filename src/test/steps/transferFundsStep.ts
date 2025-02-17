
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TransferFundPage } from '../pages/TransferFundPage';

setDefaultTimeout(60000 * 2);
const { pageFixture } = require("../../hooks/pageFixture");
let transferFundPage;

Given('User navegate to the application', async function () {
    transferFundPage = new TransferFundPage(pageFixture.page);
    await transferFundPage.navigate();
});

Then('I should see the form', async function () {
    await expect(transferFundPage.isHeader, 'Page exist');
});

Then('I should see the fields', async function () {

    await expect(transferFundPage.isHtmlVisible, 'Html exist');
    await expect(transferFundPage.isBodyVisible, 'body exist');
    await expect(transferFundPage.isHeaderVisible, 'Header exist');
    await expect(transferFundPage.isLblFromAccountVisible, 'label From Account exist');
    await expect(transferFundPage.isHtmlVisible, 'label From Account exist');
    await expect(transferFundPage.isHtmlVisible, 'label To Account exist');
    await expect(transferFundPage.isHtmlVisible, 'label To Account exist');
    await expect(transferFundPage.isHtmlVisible, 'label Amount exist');
    await expect(transferFundPage.isHtmlVisible, 'label Amount exist');
    await expect(transferFundPage.isHtmlVisible, 'label Currency exist');
    await expect(transferFundPage.isHtmlVisible, 'label Currency exist');
    await expect(transferFundPage.isHtmlVisible, 'label Transfer Funds exist');
});

When('I fill in the form with valid data', async function () {
    await transferFundPage.fill('flavia', 'test', '6', 'EUR');
});

When('I submit the form', async function () {
        await transferFundPage.submitForm();
});

Then('I should see a success message', async function () {
    await expect(transferFundPage.isLoginSuccessful, 'success');
});

When('I fill in the form with invalid data', async function () {
    await transferFundPage.fill('', '', '', '');
});

Then('I should see an error message', async function () {
    await expect(!
        transferFundPage.isLoginSuccessful, 'Failed');
});
