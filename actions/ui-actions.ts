import { Page } from '@playwright/test';
import { UiAuthActions } from './ui-actions/auth';
import { UiBankAccountActions } from './ui-actions/bank-account';
import { UiGeneralActions } from './ui-actions/general';
import { UiTransactionActions } from './ui-actions/transaction';

export class UiActions {
  auth: UiAuthActions;
  bankAccount: UiBankAccountActions;
  general: UiGeneralActions;
  transaction: UiTransactionActions;

  constructor(page: Page) {
    this.auth = new UiAuthActions(page);
    this.bankAccount = new UiBankAccountActions(page);
    this.general = new UiGeneralActions(page);
    this.transaction = new UiTransactionActions(page);
  }
}
