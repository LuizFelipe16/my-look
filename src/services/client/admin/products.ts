import { apiNext } from "services";
import { APIClientTypes } from "types";

const MODULE_NAME = '/products/'

export async function createProduct(data: APIClientTypes.RequestCreateProduct) {
  return await apiNext.post(MODULE_NAME + 'create', data);
}

export async function getProducts() {
  return await apiNext.get(MODULE_NAME + 'list');
}

export async function getProductById(id: string) {
  return await apiNext.get(MODULE_NAME + id);
}

export async function updateProduct(data: APIClientTypes.RequestCreateProduct & { id: string }) {
  return await apiNext.put(MODULE_NAME + data.id, data);
}
