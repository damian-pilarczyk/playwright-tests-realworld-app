import { Component } from '@components/component.abstract';
import { completeTransaction } from '@locators/transaction-locators';

export class CompleteTransaction extends Component {
  async returnToTransactions(): Promise<void> {
    await this.page.locator(completeTransaction.button.returnToTransactions).click();
  }

  async createAnotherTransaction(): Promise<void> {
    await this.page.locator(completeTransaction.button.createAnotherTransaction).click();
  }
}
