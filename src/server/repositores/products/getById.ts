import { query as q } from 'faunadb';
import { fauna } from 'services';
import { TFaunaProduct } from 'server/types'
import { productsRepository } from '.';

type ResponseGetProduct = TFaunaProduct;

const messageSuccess = 'Get product successfully!';
const messageError = 'An unexpected error occurred while get product.';

async function getById({ id }: { id: string }) {
  try {
    const result = await fauna.query<ResponseGetProduct>(
      q.Get(
        q.Match(q.Index(productsRepository.config.filterBy.id), id)
      )
    );

    return { message: messageSuccess, product: result }
  } catch {
    return { message: messageError, product: null }
  }
};

export { getById };
