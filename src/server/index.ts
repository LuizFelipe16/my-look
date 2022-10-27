export * from './types'

import { productsRepository } from './repositores/products';
import { usersRepository } from "./repositores/users"

const repositories = {
  users: usersRepository,
  products: productsRepository
}

export { repositories };
