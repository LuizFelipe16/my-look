import { NextApiRequest, NextApiResponse } from "next";
import { repositories } from "server";

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const {
      email,
      password
    } = req.body;

    await repositories.users.updateCredentials({ email, password, id }, response);
  }
};
