import { Page } from '@playwright/test';

export class Wait {
  private maxTimeout = 2500;

  constructor(private page: Page) {}

  async forElementToDisappear(locator: string): Promise<void> {
    await this.page.locator(locator).waitFor({ state: 'detached', timeout: this.maxTimeout });
  }

  async forValueToNotBeIn<T>(notExpectedValue: T[], getActualValue: () => Promise<T>, i = 0): Promise<T> {
    const recursionTimeOut = 50;
    const maxNumberOfRecursions = this.maxTimeout / recursionTimeOut;
    const actualValue = await getActualValue();
    if (notExpectedValue.includes(actualValue)) {
      if (i > maxNumberOfRecursions) {
        throw new Error(`Value [${actualValue}] is still not expected [${notExpectedValue}]. Waited for ${this.maxTimeout}ms`);
      }
      await this.page.waitForTimeout(recursionTimeOut);
      return await this.forValueToNotBeIn(notExpectedValue, getActualValue, (i += 1));
    }
    return actualValue;
  }
}
