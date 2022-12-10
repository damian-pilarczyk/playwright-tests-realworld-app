import { Component } from '@components/component.abstract';
import { amountRange } from '@locators/home-locators';

export class AmountRangeComponent extends Component {
  async clear(): Promise<void> {
    await this.page.locator(amountRange.button.clear).click();
  }

  async changeAmountRange(min: number, max: number): Promise<void> {
    await this.page.locator(amountRange.slider).fill(`${min / 10},${max / 10}`);
  }
}
