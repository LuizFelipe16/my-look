import { apiNext } from "services";
import { APIClientTypes } from "types";

async function update(data: any) {
  const result = await apiNext.put(`/users/${data?.id}`, data)
  return result
}

async function updateCredentials(data: APIClientTypes.RequestUpdateCredentials) {
  const result = await apiNext.put(`/users/credentials/${data?.id}`, data)
  return result
}

async function confirmAccount(data: { email: string; password: string }) {
  const result = await apiNext.post(`/users/confirmAccount`, data)
  return result
}

export const User = {
  update,
  updateCredentials,
  confirmAccount,
}
