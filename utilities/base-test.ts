import { ApiActions } from '@actions/api-actions';
import { UiActions } from '@actions/ui-actions';
import { User } from '@models/user.interface';
import { test as baseTest } from '@playwright/test';

type MyFixtures = {
  ui: UiActions;
  api: ApiActions;
  user: User;
};

export const test = baseTest.extend<MyFixtures>({
  ui: async ({ page }, use) => {
    await use(new UiActions(page));
  },
  api: async ({ request }, use) => {
    await use(new ApiActions(request));
  },
  user: async ({}, use) => {
    const user = JSON.parse(process.env.e2e_user) as User;
    await use(user);
  },
});
