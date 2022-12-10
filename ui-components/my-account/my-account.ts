import { Component } from '@components/component.abstract';
import { myAccount } from '@locators/my-account-locators';

export class MyAccountComponent extends Component {
  async enterFirstName(name: string): Promise<void> {
    await this.page.locator(myAccount.input.firstName).type(name);
  }

  async enterLastName(name: string): Promise<void> {
    await this.page.locator(myAccount.input.lastName).type(name);
  }

  async enterEmail(name: string): Promise<void> {
    await this.page.locator(myAccount.input.email).type(name);
  }

  async enterPhoneNumber(pswd: string): Promise<void> {
    await this.page.locator(myAccount.input.phoneNumber).type(pswd);
  }

  async save(): Promise<void> {
    await this.page.locator(myAccount.button.save).click();
  }
}
