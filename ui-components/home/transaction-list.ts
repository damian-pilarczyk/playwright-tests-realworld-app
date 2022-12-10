import { Component } from '@components/component.abstract';
import { transactionList } from '@locators/home-locators';

export class TransactionList extends Component {
  async goToEveryone(): Promise<void> {
    await this.page.locator(transactionList.button.everyone).click();
  }

  async goToFriends(): Promise<void> {
    await this.page.locator(transactionList.button.friends).click();
  }

  async goToMine(): Promise<void> {
    await this.page.locator(transactionList.button.mine).click();
  }

  async clickDateFilter(): Promise<void> {
    await this.page.locator(transactionList.control.calendar).click();
  }

  async clickAmountFilter(): Promise<void> {
    await this.page.locator(transactionList.control.amountRange).click();
  }
}
