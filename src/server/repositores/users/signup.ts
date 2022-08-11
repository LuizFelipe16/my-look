import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from 'services';
import { cryptography } from '_lib/global';
import { usersRepository } from '.';

const messageSuccess = 'Created user.';
const messageError = 'This user already exists. Use another email!';

type SignupRequest = {
  username: string;
  email: string;
  password: string;
};

async function signup({ email, password, username }: SignupRequest, res: NextApiResponse) {
  const data = {
    username,
    email,
    password: cryptography.encryptValue(password)
  };

  await fauna.query(
    q.Create(
      q.Collection(usersRepository.config.name),
      { data }
    )
  ).then(() => {
    return res.status(201).json({ message: messageSuccess });
  }).catch(() => {
    return res.status(200).json({ error: messageError });
  });
};

export { signup };
