import type { Message } from './message';

export class TempMailPro {
  private url: string = 'https://tempmailpro.io/api';

  public activate = async (name: string): Promise<{ success: boolean }> =>
    (await (
      await fetch(`${this.url}/emails/activate-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ address: `${name}@tempmailpro.io` }),
      })
    ).json()) as { success: boolean };

  public messages = async (name: string): Promise<Message[]> =>
    (await (
      await fetch(`${this.url}/emails/guest/${name}@tempmailpro.io`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json()) as Message[];
}
