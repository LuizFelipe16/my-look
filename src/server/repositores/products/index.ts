import { create } from './create';
import { list } from './list';
import { getById } from './getById';
import { update } from './update';

const productsCollection = 'products';

const productsRepository = {
  createProduct: create,
  listAllProducts: list,
  getById: getById,
  updateProduct: update,
  config: {
    name: productsCollection,
    filterBy: {
      look: 'product_by_look',
      id: 'product_by_idx',
    },
  }
};

export { productsRepository };
