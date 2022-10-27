import { NextApiRequest, NextApiResponse } from "next";
import { repositories } from "server";

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;

    await repositories.products.getById({ id: id as string })
      .then((data) => {
        return response.status(200).json({ message: data?.message, product: data?.product });
      })
      .catch((data) => {
        return response.status(200).json({ error: data?.message });
      });
  }

  if (req.method === 'PUT' || req.method === 'PATCH') {
    const { id } = req.query;
    const data = req.body;

    await repositories.products.updateProduct({ id: id as string, ...data })
      .then((data) => {
        return response.status(200).json({ message: data?.message });
      })
      .catch((data) => {
        return response.status(200).json({ error: data?.message });
      });
  }
};
