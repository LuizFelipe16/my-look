import { query as q } from 'faunadb';
import { fauna } from 'services';
import { TFaunaProduct, TProduct } from 'server/types'
import { productsRepository } from '.';

type ResponseUpdateProduct = TFaunaProduct;

type RequestUpdateProduct = TProduct & { id: string };

const messageSuccess = 'Product successfully updated!';
const messageError = 'An unexpected error occurred while update product.';

async function update({ id, ...rest }: RequestUpdateProduct) {
  const data = { ...rest };

  try {
    await fauna.query<ResponseUpdateProduct>(
      q.Update(
        q.Ref(q.Collection(productsRepository.config.name), id),
        { data }
      )
    );

    return { message: messageSuccess }
  } catch {
    return { message: messageError }
  }
};

export { update };
