import { Page } from '@playwright/test';

export abstract class Component {
  constructor(protected page: Page) { }
}
