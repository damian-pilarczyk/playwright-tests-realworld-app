import { BankAccount } from './bank-account.interface';

export interface User {
  firstName?: string;
  lastName?: string;
  username: string;
  email?: string;
  password: string;
  bankAccounts?: BankAccount[];
}
