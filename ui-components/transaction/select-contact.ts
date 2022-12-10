import { Component } from '@components/component.abstract';
import { selectContact } from '@locators/transaction-locators';

export class SelectContactComponent extends Component {
  async search(name: string): Promise<void> {
    await this.page.locator(selectContact.input.search).type(name);
  }

  async clickFirstRow(): Promise<void> {
    await this.page.locator(selectContact.container.row).first().click();
  }

  async clickRow(name: string): Promise<void> {
    await this.page.locator(selectContact.container.row, { hasText: name }).click();
  }
}
