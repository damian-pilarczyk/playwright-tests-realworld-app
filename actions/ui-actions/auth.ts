import { Action } from '@actions/base/action.interface';
import { SignInComponent } from '@components/auth/sign-in';
import { SignUpComponent } from '@components/auth/sign-up';
import { SideNav } from '@components/general/side-nav';
import { User } from '@models/user.interface';
import { Page } from '@playwright/test';
import { AuthVerification } from '@verifications/auth';

export class UiAuthActions implements Action {
  sideNav: SideNav;
  signUpComponent: SignUpComponent;
  signInComponent: SignInComponent;
  verify: AuthVerification;

  constructor(private page: Page) {
    this.sideNav = new SideNav(page);
    this.signInComponent = new SignInComponent(page);
    this.signUpComponent = new SignUpComponent(page);
    this.verify = new AuthVerification(page);
  }

  async signIn(user: User) {
    await this.page.goto('/signin');
    await this.signInComponent.enterUsername(user.username);
    await this.signInComponent.enterPassword(user.password);
    await this.signInComponent.submit();
  }

  async signUp(user: User): Promise<void> {
    await this.page.goto('/signup');
    await this.signUpComponent.enterFirstName(user.firstName);
    await this.signUpComponent.enterLastName(user.lastName);
    await this.signUpComponent.enterUsername(user.email);
    await this.signUpComponent.enterPassword(user.password);
    await this.signUpComponent.enterPasswordConfirmation(user.password);
    await this.signUpComponent.submit();
  }

  async signOut(): Promise<void> {
    await this.page.goto('/');
    await this.sideNav.logOut();
  }
}
