import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from 'services';
import { usersRepository } from '.';
import { TFaunaUser } from '../../types'

type SignupRequest = {
  username: string;
  email: string;
  password: string;
  avatar: string;
  provider: 'google';
};

const messageSuccess = 'Success login with Google!';
const messageError = 'An unexpected error has occurred. Contact support.';

async function getUserData(email: string, res: NextApiResponse) {
  await fauna.query<TFaunaUser>(
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
    return res.status(201).json({ error: messageError });
  });
}

async function signupGoogle({ email, avatar, username }: SignupRequest, res: NextApiResponse) {
  const data = {
    username,
    email,
    avatar,
    provider: 'google'
  };

  await fauna.query(
    q.Create(
      q.Collection(usersRepository.config.name),
      { data }
    )
  ).then(async () => {
    await getUserData(email, res);
  }).catch(async () => {
    await getUserData(email, res);
  });
};

export { signupGoogle };
