
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { TransferFundPage } from '../pages/TransferFundPage';
import assert = require('assert');

setDefaultTimeout(60000 * 2);
const { pageFixture } = require("../../hooks/pageFixture");
let transferFundPage= require("../pages/TransferFundPage");

Given('User navegate to the application', async function () {
    transferFundPage = new TransferFundPage(pageFixture.page);
    await transferFundPage.navigate();
});

Then('I should see the form', async function () {
    expect(await transferFundPage.isHeaderVisible, 'Page exist');
});

Then('I should see the fields', async function () {

    expect( await transferFundPage.isHtmlVisible, 'Html exist');
    expect( await transferFundPage.isBodyVisible, 'body exist');
    expect( await transferFundPage.isHeaderVisible, 'Header exist');
    expect( await transferFundPage.isLblFromAccountVisible, 'label From Account exist');
    expect( await transferFundPage.isHtmlVisible, 'label From Account exist');
    expect( await transferFundPage.isHtmlVisible, 'label To Account exist');
    expect( await transferFundPage.isHtmlVisible, 'label To Account exist');
    expect( await transferFundPage.isHtmlVisible, 'label Amount exist');
    expect( await transferFundPage.isHtmlVisible, 'label Amount exist');
    expect( await transferFundPage.isHtmlVisible, 'label Currency exist');
    expect( await transferFundPage.isHtmlVisible, 'label Currency exist');
    expect( await transferFundPage.isHtmlVisible, 'label Transfer Funds exist');
});

When('I fill in the form with valid data', async function () {
    await transferFundPage.fill('flavia', 'test', '6', 'EUR');
});

When('I submit the form', async function () {
        await transferFundPage.submitForm();
});

Then('I should see a success message', async function () {
    expect(transferFundPage.getMessageSuccess, "Message success exist");
     expect(transferFundPage.getTransactionID, "Transaction ID exist");
});

When('I fill in the form with invalid data', async function () {
    await transferFundPage.filInvalidAmoutData('', '', 'USD');
});

Then('I should see an error message', async function () {
    expect(!transferFundPage.getMessageSuccess, "Message success Not exist");
    expect(!transferFundPage.getTransactionID, "Transaction ID Not exist");
});

