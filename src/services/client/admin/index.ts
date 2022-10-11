import { apiNext } from "services";

type VerifyRequest = {
  email: string;
  password: string;
}

async function verify(data: VerifyRequest) {
  return await apiNext.post('/users/admin/signin', data)
}

export const Admin = {
  verify,
}
