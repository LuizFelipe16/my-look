import { NextApiRequest, NextApiResponse } from 'next';
import { repositories } from 'server';

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === "POST") {
    const {
      username,
      email,
      password
    } = req.body;

    await repositories.users.signup({
      username,
      email,
      password
    }, response);
  }
};
