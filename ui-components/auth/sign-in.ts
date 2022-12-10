import { signIn } from '@locators/auth-locators';
import { Component } from '@components/component.abstract';

export class SignInComponent extends Component {
  async enterUsername(name: string): Promise<void> {
    await this.page.locator(signIn.input.username).type(name);
  }

  async enterPassword(pswd: string): Promise<void> {
    await this.page.locator(signIn.input.password).type(pswd);
  }

  async submit(): Promise<void> {
    await this.page.locator(signIn.button.signIn).click();
  }
}
