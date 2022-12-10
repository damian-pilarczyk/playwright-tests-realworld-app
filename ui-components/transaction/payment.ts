import { Component } from '@components/component.abstract';
import { payment } from '@locators/transaction-locators';

export class PaymentComponent extends Component {
  async enterAmount(amount: string): Promise<void> {
    await this.page.locator(payment.input.amount).type(amount);
  }

  async enterNote(note: string): Promise<void> {
    await this.page.locator(payment.input.note).type(note);
  }

  async request(): Promise<void> {
    await this.page.locator(payment.button.request).click();
  }

  async pay(): Promise<void> {
    await this.page.locator(payment.button.pay).click();
  }
}
