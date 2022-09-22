import { NextApiResponse } from 'next';
import { query as q } from 'faunadb';
import { fauna } from 'services';
import { cryptography } from '_lib/global';
import { usersRepository } from '.';
import { TFaunaUser } from 'server/types';

type ConfirmAccountRequest = {
  email: string;
  password: string;
}

const messageSuccess = 'Account verified successfully!';
const messageError = 'Account not verified. Try again!';

async function confirmAccount({ email, password }: ConfirmAccountRequest, res: NextApiResponse) {
  await fauna.query<TFaunaUser>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((resp) => {
    const passwordMatch = cryptography.compareValues(password, resp.data?.password);

    if (!passwordMatch) {
      return res.status(200).json({ error: messageError, isAccountConfirm: false });
    }

    return res.status(200).json({ message: messageSuccess, isAccountConfirm: true });
  }).catch(() => {
    return res.status(200).json({ error: messageError, isAccountConfirm: false });
  });
};

export { confirmAccount };
