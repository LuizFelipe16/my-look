import { query as q } from 'faunadb';
import { fauna } from 'services';
import { TFaunaProduct, TProduct } from 'server/types'
import { productsRepository } from '.';

type ProductCreateRequest = TProduct;

const messageSuccess = 'Product created successfully!';
const messageError = 'An unexpected error occurred while creating the product.';

async function create(data: ProductCreateRequest) {
  try {
    const result = await fauna.query<TFaunaProduct>(
      q.Create(
        q.Collection(productsRepository.config.name),
        { data }
      )
    );

    const product = {
      ...result.data,
      id: result.ref.id,
    }

    return { message: messageSuccess, product }
  } catch {
    return { message: messageError, product: null }
  }
};

export { create };
