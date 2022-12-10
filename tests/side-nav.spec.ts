import { test } from '@utilities/base-test';

test.describe('Auth', () => {
  test.use({ storageState: './storage-state/user.json' });
  test('Sign out', async ({ ui }) => {
    await ui.auth.signOut();
    await ui.auth.verify.userIsNotLoggedIn();
  });
});
