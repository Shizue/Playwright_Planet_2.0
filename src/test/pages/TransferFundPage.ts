import { Page } from "@playwright/test";

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

  // async isHeader() {
  //   return this.page.getByRole('heading', { name: this.lblHeader }).isVisible()
  // }



  // Fill login form
  async fill(strFromAccount: string, strToAccount: string, strAmount: string, strCurrency: string) {
    await this.page.getByRole('textbox', { name: this.txtFromAccount }).fill(strFromAccount);
    await this.page.getByRole('textbox', { name: this.txtToAccount }).fill(strToAccount);
    await this.page.getByRole('spinbutton', { name: this.spinAmount }).fill(strAmount);
    await this.page.getByLabel(this.lblCurrency).selectOption(strAmount);
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
    return this.page.getByRole('textbox', { name: this.txtFromAccount}).isVisible();
  }
  async isLblToAccountVisible() {
    return this.page.getByText(this.txtToAccount).isVisible();
  }
  async isToAccountVisible() {
    return this.page.getByRole('textbox', { name: this.txtToAccount}).isVisible();
  }

  async isAmountVisible() {
    return this.page.getByText(this.txtToAccount).isVisible();
  }

  async isCurrencyVisible() {
    return this.page.getByRole('textbox', { name: this.txtToAccount}).isVisible();
  }

  async isTxtAmountVisible() {
    return this.page.getByText(this.spinAmount).isVisible();
  }

  async isSpinBtnAmountVisible() {
    return this.page.getByRole('spinbutton', { name: this.spinAmount}).isVisible();
  }

  async isTxtCurrencyVisible() {

    return this.page.getByText(this.lblCurrency).isVisible();
  }

  async isLblCurrencyVisible() {
    return this.page.getByLabel(this.lblCurrency).isVisible();
  }

  async isBtnTransferFundsVisible() {
    return this.page.getByRole('button', { name: this.btnTransferFunds}).isVisible();
  }

  // Validate login success
  async isLoginSuccessful() {
  return this.page.getByText('Transfer Successful!').isVisible()

}
}
