import { query as q } from 'faunadb';
import { fauna } from 'services';
import { TFaunaProduct } from 'server/types'
import { productsRepository } from '.';

type ResponseGetProducts = {
  after?: {
    id: string;
  };
  data: Array<TFaunaProduct>;
}

const messageSuccess = 'Products list successfully!';
const messageError = 'An unexpected error occurred while listing products.';

async function list() {
  try {
    const result = await fauna.query<ResponseGetProducts>(
      q.Map(
        q.Paginate(
          q.Match(q.Index(productsRepository.config.filterBy.look), 'look')
        ),
        q.Lambda("X", q.Get(q.Var("X")))
      )
    );

    const products = result.data.map(p => ({
      ...p.data,
      ts: p.ts,
      id: p.ref.id,
    }));

    return { message: messageSuccess, products }
  } catch {
    return { message: messageError, products: null }
  }
};

export { list };
