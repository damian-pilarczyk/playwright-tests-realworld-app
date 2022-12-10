import { Component } from '@components/component.abstract';
import { sideNav, topBar } from '@locators/general-locators';

export class TopBar extends Component {
  private async changeSideMenuVisibilityTo(shouldBeOpen: boolean): Promise<void> {
    this.page.locator(sideNav.container.main).isVisible().then(async isVisible => {
      if (isVisible === shouldBeOpen) await this.page.locator(topBar.button.menu).click();
    });
  }

  async openSideMenu(): Promise<void> {
    await this.changeSideMenuVisibilityTo(true);
  }

  async closeSideMenu(): Promise<void> {
    await this.changeSideMenuVisibilityTo(false);
  }

  async openNewTransaction(): Promise<void> {
    await this.page.locator(topBar.button.newTransaction).click();
  }

  async goToNotifications(): Promise<void> {
    await this.page.locator(topBar.button.notifications).click();
  }
}
