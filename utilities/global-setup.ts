import { ApiActions } from '@actions/api-actions';
import { UiActions } from '@actions/ui-actions';
import { BankAccount } from '@models/bank-account.interface';
import { User } from '@models/user.interface';
import { chromium, request } from '@playwright/test';
import { generateBankAccount, generateRandomUser } from './random-data-generator';

function generateData(): [User, BankAccount] {
  return [generateRandomUser(), generateBankAccount()];
}

function addUserToEnvironmentalVariables(user: User): void {
  process.env.e2e_user = JSON.stringify(user);
}

async function registerUser(user: User): Promise<void> {
  const requestContext = await request.newContext();
  const api = new ApiActions(requestContext);
  await api.signUp(user);
  await requestContext.dispose();
}

async function signInFirstTime(user: User, bankAccount: BankAccount): Promise<void> {
  const browser = await chromium.launch();
  const page = await browser.newPage({ baseURL: process.env.base_url });
  const ui = new UiActions(page);
  await ui.auth.signIn(user);
  await ui.general.gettingStartedModal.next();
  await ui.bankAccount.createBankAccount(bankAccount);
  await ui.general.allSetModal.done();
  await page.context().storageState({ path: './storage-state/user.json' });
  await browser.close();
}

async function globalSetup() {
  const [user, bankAccount] = generateData();
  addUserToEnvironmentalVariables(user);
  await registerUser(user);
  await signInFirstTime(user, bankAccount);
}

export default globalSetup;
