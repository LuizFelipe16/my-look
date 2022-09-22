import { signup } from "./signup";
import { signupGoogle } from "./signupGoogle";
import { signin } from "./signin";
import { update } from "./update";
import { confirmAccount } from "./confirmAccount";
import { loadProfile } from "./loadProfile";
import { generateToken } from "./generateToken";

const usersCollection = 'users';

const usersRepository = {
  updateUser: update,
  signup: signup,
  signupGoogle: signupGoogle,
  signin: signin,
  confirmAccount: confirmAccount,
  loadProfile: loadProfile,
  config: {
    name: usersCollection,
    filterBy: {
      email: 'user_by_email'
    },
    generateToken: generateToken,
  }
};

export { usersRepository };
