import { User } from '@models/user.interface';
import { APIRequestContext } from '@playwright/test';

export class ApiActions {
  private apiUrl: string;

  constructor(private readonly request: APIRequestContext) {
    this.apiUrl = process.env.api_url;
  }

  async signUp(user: User): Promise<void> {
    await this.request.post(`${this.apiUrl}users`, {
      data: user,
    });
  }

  async signIn(user: User): Promise<void> {
    await this.request.post(`${this.apiUrl}login`, {
      data: user,
    });
  }
}
