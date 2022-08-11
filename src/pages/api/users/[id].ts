import { NextApiRequest, NextApiResponse } from "next";
import { repositories } from "server";

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const {
      email,
      username,
      user_email,
      password
    } = req.body;

    await repositories.users.updateUser({
      id,
      email,
      username,
      user_email,
      password
    }, response);
  }
};
