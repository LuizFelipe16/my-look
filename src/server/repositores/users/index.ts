import { signup } from "./signup";
import { signin } from "./signin";
import { update } from "./update";
import { confirmAccount } from "./confirmAccount";
import { generateToken } from "./generateToken";

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
    },
    generateToken: generateToken,
  }
};

export { usersRepository };
