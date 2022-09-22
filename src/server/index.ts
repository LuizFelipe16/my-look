export * from './types'

import { usersRepository } from "./repositores/users"

const repositories = {
  users: usersRepository
}

export { repositories };
