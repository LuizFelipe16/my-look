import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { sign } from 'jsonwebtoken';

import { fauna } from 'services';
import { Settings } from '_app';
import { cryptography } from '_lib/global';
import { usersRepository } from '.';

interface User {
  data: {
    email: string;
    username: string;
    password: string;
  };
  ts: number;
  ref: {
    id: string;
  };
}

type SinginRequest = {
  email: string;
  password: string;
};

const messageSuccess = 'Sign in successfully! Wait a moment.';
const messageError = 'Incorrect email/password.';

async function signin({ email, password }: SinginRequest, res: NextApiResponse) {
  await fauna.query<User>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((resp) => {
    const passwordMatch = cryptography.compareValues(password, resp.data?.password);

    if (!passwordMatch) {
      return res.status(200).json({ error: messageError });
    }

    const token = sign(
      {
        username: resp.data.username,
        email: resp.data.email,
      },
      String(Settings.ApiCredentials?.AuthSecretCode),
      {
        subject: resp.ref.id,
        expiresIn: "1d"
      }
    );

    return res.status(200).json({ message: messageSuccess, token: token });
  }).catch(() => {
    return res.status(200).json({ error: messageError });
  });
};

export { signin };
