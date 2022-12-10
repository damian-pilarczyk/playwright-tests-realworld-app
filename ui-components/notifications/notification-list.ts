import { Component } from '@components/component.abstract';
import { notificationsList } from '@locators/notifications-locators';

export class NotificationsList extends Component {
  async dismiss(notificationMessage): Promise<void> {
    const row = this.page.locator(notificationsList.container.row, { hasText: notificationMessage });
    await row.locator(notificationsList.button.dismiss).click();
  }
}
