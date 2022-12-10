import { Component } from '@components/component.abstract';
import { allSetModal } from '@locators/general-locators';

export class AllSetModal extends Component {
  async done(): Promise<void> {
    await this.page.locator(allSetModal.button.done).click();
  }
}
