import { CreateBankAccountComponent } from '@components/bank-accounts/create-bank-account';
import { BankAccount } from '@models/bank-account.interface';
import { Page } from '@playwright/test';

export class UiBankAccountActions {
  createBankAccountComponent: CreateBankAccountComponent;

  constructor(page: Page) {
    this.createBankAccountComponent = new CreateBankAccountComponent(page);
  }

  async createBankAccount(bankAccount: BankAccount): Promise<void> {
    await this.createBankAccountComponent.enterBankName(bankAccount.bankName);
    await this.createBankAccountComponent.enterRoutingNumber(bankAccount.routingNumber);
    await this.createBankAccountComponent.enterAccountNumber(bankAccount.accountNumber);
    await this.createBankAccountComponent.save();
  }
}
