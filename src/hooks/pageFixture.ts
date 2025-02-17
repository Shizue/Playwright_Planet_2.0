import { Browser, Page, chromium } from '@playwright/test';

class PageFixture {
  browser!: Browser;
  page!: Page;

  async setup() {
    this.browser = await chromium.launch({ headless: false });
    this.page = await this.browser.newPage();
  }

  async teardown() {
    await this.page?.close();
    await this.browser?.close();
  }
}

// Export as a singleton
export const pageFixture = new PageFixture();