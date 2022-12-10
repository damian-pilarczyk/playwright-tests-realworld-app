import { AllSetModal } from '@components/general/all-set-modal';
import { GettingStartedModal } from '@components/general/getting-started-modal';
import { Page } from '@playwright/test';

export class UiGeneralActions {
  allSetModal: AllSetModal;
  gettingStartedModal: GettingStartedModal;

  constructor(page: Page) {
    this.allSetModal = new AllSetModal(page);
    this.gettingStartedModal = new GettingStartedModal(page);
  }
}
