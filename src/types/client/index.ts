import { TLookType } from "types/Look";

export type RequestUpdateCredentials = {
  id: any;
  email: string;
  password: string;
}

// Products

export type TProduct = {
  id: string;
  banner: string;
  name: string;
  description: string;
  price: number;
  type: TLookType;
  stock: number;
}

export type RequestCreateProduct = {
  name: string;
  description: string;
  type: string;
  price: number;
  stock: string;
  banner: string;
};
