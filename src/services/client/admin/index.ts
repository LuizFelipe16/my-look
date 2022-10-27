import { apiNext } from "services";
import { createProduct, getProducts, getProductById, updateProduct } from "./products";

type VerifyRequest = {
  email: string;
  password: string;
}

async function verify(data: VerifyRequest) {
  return await apiNext.post('/users/admin/signin', data)
}

export const Admin = {
  verify,
  Products: {
    create: createProduct,
    update: updateProduct,
    getAll: getProducts,
    getById: getProductById,
  }
}
