import { test } from '@utilities/base-test';

test.describe('Auth', () => {
  test('Sign in', async ({ ui, user }) => {
    await ui.auth.signIn(user);
    await ui.auth.verify.userIsLoggedIn();
  });

  test('Invalid password', async ({ ui, user }) => {
    await ui.auth.signIn({ username: user.username, password: 'wrong' });
    await ui.auth.verify.userIsNotLoggedIn();
    await ui.auth.verify.messageIs('Username or password is invalid');
  });
});
