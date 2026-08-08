import { fetch } from 'netbun';

import type { Message } from './message';

export class TempMailPro {
  private url: string = 'https://tempmailpro.io/api';
  private proxy?: string;

  constructor(proxy?: string) {
    this.proxy = proxy;
  }

  public activate = async (name: string): Promise<{ success: boolean }> =>
    (await (
      await fetch(`${this.url}/emails/activate-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        proxy: this.proxy,
        body: JSON.stringify({ address: `${name}@tempmailpro.io` }),
      })
    ).json()) as { success: boolean };

  public messages = async (name: string): Promise<Message[]> =>
    (await (
      await fetch(`${this.url}/emails/guest/${name}@tempmailpro.io`, {
        method: 'GET',
        proxy: this.proxy,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()) as Message[];
}
