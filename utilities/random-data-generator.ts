import { User } from '@models/user.interface';
import { faker } from '@faker-js/faker';
import { BankAccount } from '@models/bank-account.interface';

function getRandomNumberBetween(from: number, to: number) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

export function generateRandomUser(): User {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(5),
  };
}

export function generateBankAccount(): BankAccount {
  return {
    bankName: faker.company.name(),
    routingNumber: faker.finance.routingNumber(),
    accountNumber: faker.finance.account(getRandomNumberBetween(9, 12)),
  };
}
