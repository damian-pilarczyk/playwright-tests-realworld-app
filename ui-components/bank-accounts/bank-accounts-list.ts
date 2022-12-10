import { Component } from '@components/component.abstract';
import { bankAccountsList } from '@locators/bank-accounts-locators';

export class BankAccountsList extends Component {
  async create(): Promise<void> {
    await this.page.locator(bankAccountsList.button.create).click();
  }

  async delete(bankName: string): Promise<void> {
    const row = this.page.locator(bankAccountsList.container.row, { hasText: bankName });
    await row.locator(bankAccountsList.button.delete).click();
  }
}
