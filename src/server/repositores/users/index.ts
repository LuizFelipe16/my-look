import { signup } from "./signup";
import { signin } from "./signin";
import { update } from "./update";
import { confirmAccount } from "./confirmAccount";

const usersCollection = 'users';

const usersRepository = {
  updateUser: update,
  signup: signup,
  signin: signin,
  confirmAccount: confirmAccount,
  config: {
    name: usersCollection,
    filterBy: {
      email: 'user_by_email'
    }
  }
};

export { usersRepository };
