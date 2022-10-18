import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from 'services';
import { cryptography } from '_lib/global';
import { usersRepository } from '.';
import { TFaunaUser } from '../../types'

type SinginRequest = {
  email: string;
  password: string;
};

const messageSuccess = 'Sign in successfully! Wait a moment.';
const messageError = 'Incorrect email/password.';

async function signin({ email, password }: SinginRequest, res: NextApiResponse) {
  await fauna.query<TFaunaUser>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((resp) => {
    const passwordMatch = cryptography.compareValues(password, resp.data?.password);

    if (!passwordMatch) {
      return res.status(200).json({ error: messageError });
    }

    const token = usersRepository.config.generateToken({
      username: resp.data.username,
      email: resp.data.email,
      id: resp.ref.id
    });

    const newUser = {
      ...resp.data,
      password: '',
      token,
    }

    return res.status(200).json({ message: messageSuccess, ...newUser });
  }).catch(() => {
    return res.status(200).json({ error: messageError });
  });
};

export { signin };
