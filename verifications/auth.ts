import { signIn } from '@locators/auth-locators';
import { expect, Page } from '@playwright/test';
import { Wait } from '@waits/wait';
import { Verification } from './verification.abstract';

export class AuthVerification extends Verification {
  private wait: Wait;

  constructor(page: Page) {
    super(page);
    this.wait = new Wait(page);
  }

  async userIsLoggedIn(): Promise<void> {
    await this.checkAuthState('authorized');
  }

  async userIsNotLoggedIn(): Promise<void> {
    await this.checkAuthState('unauthorized');
  }

  async messageIs(message: string): Promise<void> {
    expect(await this.page.locator(signIn.container.error).textContent()).toEqual(message);
  }

  private async checkAuthState(expectedAuthState: string): Promise<void> {
    const authState = await this.wait.forValueToNotBeIn(
      ['loading', 'logout'],
      async () => (await this.page.evaluate(() => JSON.parse(window.localStorage.getItem('authState')) as { value: string })).value,
    );

    expect(authState).toBe(expectedAuthState);
  }
}
