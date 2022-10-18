import { NextApiResponse } from "next";
import { query as q } from 'faunadb';
import { fauna } from "services";
import { cryptography } from "_lib/global";
import { usersRepository } from ".";
import { TFaunaUser } from "server/types";

type UserUpdateRequest = {
  id: any;
  email: string;
  password: string;
};

const messageSuccess = 'Account successfully updated!';
const messageError = 'This email already belongs to another account.';

async function updateCredentials({ id, email, password }: UserUpdateRequest, res: NextApiResponse) {
  const data = {
    email,
    password: cryptography.encryptValue(password)
  };

  await fauna.query<TFaunaUser>(
    q.Get(
      q.Match(q.Index(usersRepository.config.filterBy.email), email)
    )
  ).then((response) => {
    const user_find = response;

    if (user_find.ref.id === id) {
      fauna.query(
        q.Update(
          q.Ref(q.Collection(usersRepository.config.name), id),
          { data }
        )
      ).then(() => {
        const token = usersRepository.config.generateToken({
          username: user_find.data?.username,
          email: data.email,
          id: user_find.ref.id,
        });
  
        const newUser = { ...user_find.data, email: data.email, token }
        
        return res.status(200).json({ message: messageSuccess, user: newUser });
      }).catch(() => {
        return res.status(200).json({ error: messageError });
      });
    
    } else {
      return res.status(200).json({ error: messageError });
    }
  }).catch(() => {
    try {
      fauna.query(
        q.Update(
          q.Ref(q.Collection(usersRepository.config.name), id),
          { data }
        )
      ).then(() => {
        const token = usersRepository.config.generateToken({
          email: data?.email,
          id: id,
        });
  
        const newUser = { email, token }
  
        return res.status(200).json({ message: messageSuccess, user: newUser });
      })
    } catch {
      return res.status(200).json({ error: messageError });
    }
  });
}

export { updateCredentials };
