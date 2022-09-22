import { NextApiRequest, NextApiResponse } from 'next';
import { repositories } from 'server';

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === "POST") {
    const {
      username,
      email,
      password,
      avatar,
      provider
    } = req.body;

    if (provider === 'google') {
      await repositories.users.signupGoogle({
        username,
        email,
        password,
        avatar,
        provider
      }, response);
    } else {
      await repositories.users.signup({
        username,
        email,
        password
      }, response);
    }
  }
};
