import { Component } from '@components/component.abstract';
import { gettingStartedModal } from '@locators/general-locators';

export class GettingStartedModal extends Component {
  async next(): Promise<void> {
    await this.page.locator(gettingStartedModal.button.next).click();
  }
}
