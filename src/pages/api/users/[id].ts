import { NextApiRequest, NextApiResponse } from "next";
import { repositories } from "server";

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id } = req.query;
    const data = req.body;

    await repositories.users.updateUser({ ...data, id }, response);
  }
};
