import { TopBar } from '@components/general/top-bar';
import { PaymentComponent } from '@components/transaction/payment';
import { SelectContactComponent } from '@components/transaction/select-contact';
import { Payment } from '@models/payment.interface';
import { Page } from '@playwright/test';

export class UiTransactionActions {
  selectContactComponent: SelectContactComponent;
  paymentComponent: PaymentComponent;
  topBar: TopBar;

  constructor(private page: Page) {
    this.selectContactComponent = new SelectContactComponent(page);
    this.paymentComponent = new PaymentComponent(page);
    this.topBar = new TopBar(page);
  }

  async pay(username: string, payment: Payment): Promise<void> {
    await this.topBar.openNewTransaction();
    await this.selectContactComponent.search(username);
    await this.selectContactComponent.clickFirstRow();
    await this.paymentComponent.enterAmount(payment.amount.toString());
    await this.paymentComponent.enterNote(payment.note);
    await this.paymentComponent.pay();
  }

  async requestTo(username: string, payment: Payment): Promise<void> {
    await this.topBar.openNewTransaction();
    await this.selectContactComponent.search(username);
    await this.selectContactComponent.clickFirstRow();
    await this.paymentComponent.enterAmount(payment.amount.toString());
    await this.paymentComponent.enterNote(payment.note);
    await this.paymentComponent.request();
  }
}
