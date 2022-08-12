import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from 'services';
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

type SignupRequest = {
  username: string;
  email: string;
  password: string;
};

const messageSuccess = 'Created user.';
const messageError = 'This user already exists. Use another email!';

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
  ).then(async () => {
    await fauna.query<User>(
      q.Get(
        q.Match(q.Index(usersRepository.config.filterBy.email), email)
      )
    ).then((resp) => {
      const token = usersRepository.config.generateToken({
        username: resp.data.username,
        email: resp.data.email,
        id: resp.ref.id
      })
  
      return res.status(200).json({ message: messageSuccess, token: token });
    }).catch(() => {
      return res.status(201).json({ message: messageSuccess });
    })

  }).catch(() => {
    return res.status(200).json({ error: messageError });
  });
};

export { signup };
