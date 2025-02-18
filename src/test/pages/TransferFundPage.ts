import { expect, Page } from "@playwright/test";

export class TransferFundPage {
  page: Page;

  // Selectors
  urlTransferFund = "file:///C:/Users/Shizue/Documents/workspace/Playwright_Planet_2.0/data/banking.html";
  lblHeader = "Fund Transfer";
  txtFromAccount = "From Account:";
  txtToAccount = "To Account:";
  spinAmount = "Amount:";
  lblCurrency = "Currency:";
  btnTransferFunds = "Transfer Funds";
  messageSuccess = "Transfer Successful!";
  transactionID = "Transaction ID: TXN98765";

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to Login Page
  async navigate() {
    if (this.page) {
      await this.page.goto(this.urlTransferFund);
    } else {
      throw new Error('Page is not initialized');
    }
  }

  // Fill login form
  async fill(strFromAccount: string, strToAccount: string, strAmount: string, strCurrency: string) {
    await this.page.getByRole('textbox', { name: this.txtFromAccount }).fill(strFromAccount);
    await this.page.getByRole('textbox', { name: this.txtToAccount }).fill(strToAccount);
    await this.page.getByRole('spinbutton', { name: this.spinAmount }).type(strAmount);
    await this.page.getByLabel(this.lblCurrency).selectOption(strCurrency);
  }

  async filInvalidAmoutData(strFromAccount: string, strToAccount: string, strCurrency: string) {
    await this.page.getByRole('textbox', { name: this.txtFromAccount }).fill(strFromAccount);
    await this.page.getByRole('textbox', { name: this.txtToAccount }).fill(strToAccount);
    await this.fillEmptyAmountData();
    await this.fillNumberAndCharValidAmoutData();
    await this.fillValidAmoutNumberType();
    await this.fillManualInvalidAmoutData();
    await this.page.getByLabel(this.lblCurrency).selectOption(strCurrency);
  }

  async fillEmptyAmountData() {
    const spinButton = this.page.getByRole('spinbutton', { name: this.spinAmount });
    // Attempt to type invalid characters
    await spinButton.click();
    await this.page.keyboard.type("abc!@#");
    const inputValue = await spinButton.inputValue();
    console.log("Input Value After Typing:", inputValue);
    // Expect the field to remain empty or unchanged
    await expect(spinButton).toHaveValue("");
  }

  async fillNumberAndCharValidAmoutData() {
    const spinButton = this.page.getByRole('spinbutton', { name: this.spinAmount });
    await spinButton.click();
    await this.page.keyboard.type("123abc!@#");
    // Validate that only "123" remains in the field
    await expect(spinButton).toHaveValue("123");
  }

  async fillValidAmoutNumberType() {
    const spinButton = this.page.getByRole('spinbutton', { name: this.spinAmount });
    const inputType = await spinButton.getAttribute("type");
    expect(inputType).toBe("number");
  }

  async fillManualInvalidAmoutData() {
    const spinButton = this.page.getByRole('spinbutton', { name: this.spinAmount });
    await spinButton.click();
    await this.page.keyboard.type("abc123!@#");
  }

  async submitForm() {
    await this.page.getByRole('button', { name: this.btnTransferFunds }).click();
  }

  async isTransferFundsButtonVisible() {
    return this.page.getByRole('button', { name: this.btnTransferFunds }).isVisible();
  }

  async isHtmlVisible() {
    return this.page.locator('html').isVisible();
  }

  async isBodyVisible() {
    return this.page.locator('body').isVisible();
  }

  async isHeaderVisible() {
    return this.page.getByRole('heading', { name: this.lblHeader }).isVisible();
  }

  async isLblFromAccountVisible() {
    return this.page.getByText(this.txtFromAccount).isVisible();
  }

  async isFromAccountVisible() {
    return this.page.getByRole('textbox', { name: this.txtFromAccount }).isVisible();
  }
  async isLblToAccountVisible() {
    return this.page.getByText(this.txtToAccount).isVisible();
  }
  async isToAccountVisible() {
    return this.page.getByRole('textbox', { name: this.txtToAccount }).isVisible();
  }

  async isAmountVisible() {
    return this.page.getByText(this.txtToAccount).isVisible();
  }

  async isCurrencyVisible() {
    return this.page.getByRole('textbox', { name: this.txtToAccount }).isVisible();
  }

  async isTxtAmountVisible() {
    return this.page.getByText(this.spinAmount).isVisible();
  }

  async isSpinBtnAmountVisible() {
    return this.page.getByRole('spinbutton', { name: this.spinAmount }).isVisible();
  }

  async isTxtCurrencyVisible() {

    return this.page.getByText(this.lblCurrency).isVisible();
  }

  async isLblCurrencyVisible() {
    return this.page.getByLabel(this.lblCurrency).isVisible();
  }

  async isBtnTransferFundsVisible() {
    return this.page.getByRole('button', { name: this.btnTransferFunds }).isVisible();
  }

  async getTransactionID() {
    return this.page.getByText(this.transactionID).textContent();
  }
  async getMessageSuccess() {
    return this.page.getByText(this.messageSuccess).textContent();
  }

}
