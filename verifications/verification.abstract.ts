import { Page } from '@playwright/test';

export abstract class Verification {
  constructor(protected page: Page) {}
}
