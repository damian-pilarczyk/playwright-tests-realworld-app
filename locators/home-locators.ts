export const amountRange = {
  slider: '[data-test="transaction-list-filter-amount-range"] input',
  button: {
    clear: '',
  },
};

export const calendar = {
  button: {
    date: (date: Date) => `[data-date=${`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}]`,
  },
};

export const transactionList = {
  button: {
    everyone: '',
    friends: '',
    mine: '',
  },
  control: {
    calendar: '',
    amountRange: '',
  },
};
