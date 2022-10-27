import { NextApiRequest, NextApiResponse } from 'next';
import { repositories } from 'server';

export default async function handler(req: NextApiRequest, response: NextApiResponse) {
  if (req.method === 'GET') {
    await repositories.products.listAllProducts()
      .then((data) => {
        return response.status(200).json({ message: data?.message, products: data?.products });
      })
      .catch((data) => {
        return response.status(200).json({ error: data?.message });
      })
  }
}
