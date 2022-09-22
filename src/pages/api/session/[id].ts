import { NextApiRequest, NextApiResponse } from 'next';
import { repositories } from 'server';

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    await repositories.users.loadProfile({ email })
      .then((data) => {
        return response.status(200).json({ message: data?.message, user: data?.user });
      })
      .catch((data) => {
        return response.status(200).json({ error: data?.message });
      })
  }
}
