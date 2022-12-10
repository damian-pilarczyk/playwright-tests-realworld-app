import { signUp } from '@locators/auth-locators';
import { Component } from '@components/component.abstract';

export class SignUpComponent extends Component {
  async enterFirstName(name: string): Promise<void> {
    await this.page.locator(signUp.input.firstName).type(name);
  }

  async enterLastName(name: string): Promise<void> {
    await this.page.locator(signUp.input.lastName).type(name);
  }

  async enterUsername(name: string): Promise<void> {
    await this.page.locator(signUp.input.username).type(name);
  }

  async enterPassword(pswd: string): Promise<void> {
    await this.page.locator(signUp.input.password).type(pswd);
  }

  async enterPasswordConfirmation(pswd: string): Promise<void> {
    await this.page.locator(signUp.input.passwordConfirmation).type(pswd);
  }

  async submit(): Promise<void> {
    await this.page.locator(signUp.button.signUp).click();
  }
}
