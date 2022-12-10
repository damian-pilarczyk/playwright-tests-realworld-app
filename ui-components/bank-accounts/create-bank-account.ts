import { Component } from '@components/component.abstract';
import { newBankAccount } from '@locators/bank-accounts-locators';

export class CreateBankAccountComponent extends Component {
  async enterBankName(name: string): Promise<void> {
    await this.page.locator(newBankAccount.input.bankName).type(name);
  }

  async enterRoutingNumber(name: string): Promise<void> {
    await this.page.locator(newBankAccount.input.routingNumber).type(name);
  }

  async enterAccountNumber(name: string): Promise<void> {
    await this.page.locator(newBankAccount.input.accountNumber).type(name);
  }

  async save(): Promise<void> {
    await this.page.locator(newBankAccount.button.save).click();
  }
}
