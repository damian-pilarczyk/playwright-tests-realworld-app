export const signIn = {
  input: {
    username: '[data-test="signin-username"] input',
    password: '[data-test="signin-password"] input',
  },
  button: {
    signIn: '[data-test="signin-submit"]',
  },
  container: {
    error: '[data-test="signin-error"]',
  },
};

export const signUp = {
  input: {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  },
  button: {
    signUp: '',
  },
};
