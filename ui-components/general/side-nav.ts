import { Component } from '@components/component.abstract';
import { sideNav } from '@locators/general-locators';

export class SideNav extends Component {
  async goToHome(): Promise<void> {
    await this.page.locator(sideNav.button.home).click();
  }

  async goToMyAccount(): Promise<void> {
    await this.page.locator(sideNav.button.myAccount).click();
  }

  async goToBankAccounts(): Promise<void> {
    await this.page.locator(sideNav.button.bankAccounts).click();
  }

  async goToNotifications(): Promise<void> {
    await this.page.locator(sideNav.button.notifications).click();
  }

  async logOut(): Promise<void> {
    await this.page.locator(sideNav.button.logOut).click();
  }
}
