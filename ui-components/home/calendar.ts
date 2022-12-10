import { Component } from '@components/component.abstract';
import { calendar } from '@locators/home-locators';

export class CalendarComponent extends Component {
  async pickDates(startDate: Date, endDate: Date): Promise<void> {
    await this.page.locator(calendar.button.date(startDate)).click();
    await this.page.locator(calendar.button.date(endDate)).click();
  }
}
