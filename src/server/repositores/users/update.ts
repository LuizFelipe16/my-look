import { NextApiResponse } from "next";
import { query as q } from 'faunadb';
import { fauna } from "services";
import { cryptography } from "_lib/global";
import { usersRepository } from ".";

interface UserRequest {
  data: {
    username: string;
    email: string;
  }
}

type UserUpdateRequest = {
  id: any;
  email: string;
  username: string;
  user_email: string;
  password: any;
};

const messageSuccess = 'Account successfully updated! Sign in again.';
const messageError = 'This email already belongs to another account.';

async function update({ id, email, password, user_email, username }: UserUpdateRequest, res: NextApiResponse) {
  const data = {
    username,
    email,
    password: cryptography.encryptValue(password)
  };

  await fauna.query<UserRequest>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((response) => {
    const user_find = response;

    if (user_find.data.email === user_email) {
      fauna.query(
        q.Update(
          q.Ref(q.Collection(usersRepository.config.name), id),
          { data }
        )
      );

      return res.status(200).json({ message: messageSuccess });
    }

    return res.status(200).json({ error: messageError });

  }).catch(() => {

    fauna.query(
      q.Update(
        q.Ref(q.Collection(usersRepository.config.name), id),
        { data }
      )
    );

    return res.status(200).json({ message: messageSuccess });
  });
}

export { update };
