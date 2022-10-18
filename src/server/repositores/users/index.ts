import { signup } from "./signup";
import { signupGoogle } from "./signupGoogle";
import { signin } from "./signin";
import { update } from "./update";
import { confirmAccount } from "./confirmAccount";
import { loadProfile } from "./loadProfile";
import { generateToken } from "./generateToken";
import { updateCredentials } from "./updateCredentials";

const usersCollection = 'users';

const usersRepository = {
  updateUser: update,
  signup: signup,
  signupGoogle: signupGoogle,
  signin: signin,
  confirmAccount: confirmAccount,
  loadProfile: loadProfile,
  updateCredentials: updateCredentials,
  config: {
    name: usersCollection,
    filterBy: {
      email: 'user_by_email'
    },
    generateToken: generateToken,
  }
};

export { usersRepository };
