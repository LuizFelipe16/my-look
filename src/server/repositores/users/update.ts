import { NextApiResponse } from "next";
import { query as q } from 'faunadb';
import { fauna } from "services";
import { cryptography } from "_lib/global";
import { usersRepository } from ".";
import { TFaunaUser } from "server/types";

type UserUpdateRequest = {
  id: any;
  email: string;
  username: string;
  name: string;
  phone: string;
  bio: string;
  password?: any;
  decode: any;
  token: any;
};

const messageSuccess = 'Account successfully updated!';
const messageError = 'This email already belongs to another account.';

async function update({ id, email, decode, token, ...rest }: UserUpdateRequest, res: NextApiResponse) {
  const data = {
    email,
    ...rest,
    // password: cryptography.encryptValue(password)
  };

  delete data.password

  await fauna.query<TFaunaUser>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((response) => {
    const user_find = response;

    if (user_find.data.email === email) {
      fauna.query(
        q.Update(
          q.Ref(q.Collection(usersRepository.config.name), id),
          { data }
        )
      );

      const token = usersRepository.config.generateToken({
        username: data?.username,
        email: data?.email,
        id: id,
      });

      const newUser = { ...data, token }

      return res.status(200).json({ message: messageSuccess, user: newUser });
    }

    return res.status(200).json({ error: messageError });

  }).catch(() => {

    fauna.query(
      q.Update(
        q.Ref(q.Collection(usersRepository.config.name), id),
        { data }
      )
    );

    const token = usersRepository.config.generateToken({
      username: data?.username,
      email: data?.email,
      id: id,
    });

    const newUser = { ...data, token }

    return res.status(200).json({ message: messageSuccess, user: newUser });
  });
}

export { update };
