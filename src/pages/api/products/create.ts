import { NextApiRequest, NextApiResponse } from 'next';
import { repositories } from 'server';

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'POST') {
    const data = req.body;

    await repositories.products.createProduct({ ...data })
      .then((data) => {
        return response.status(200).json({ message: data?.message, product: data?.product });
      })
      .catch((data) => {
        return response.status(200).json({ error: data?.message });
      })
  }
}
