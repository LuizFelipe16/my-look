import { query as q } from 'faunadb';
import { fauna } from 'services';
import { TFaunaUser } from 'server/types'
import { usersRepository } from '.';

type LoadProfileRequest = {
  email: string;
};

const messageSuccess = 'Session load successfully!';
const messageError = 'Account not found';

async function loadProfile({ email }: LoadProfileRequest) {
  const data = await fauna.query<TFaunaUser>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((resp) => {
    const token = usersRepository.config.generateToken({
      username: resp.data.username,
      email: resp.data.email,
      id: resp.ref.id
    });

    const user = {
      ...resp.data,
      id: resp.ref.id,
      username: resp.data.username,
      email: resp.data.email,
      token,
      password: '',
      accountType: !resp.data.provider ? 'mylook' : resp.data.provider
    }

    return { message: messageSuccess, user }
  }).catch(() => {
    return { message: messageError, user: null }
  });

  return data
};

export { loadProfile };
