
export type Location = {
  cep: string;
  street: string;
  city: string;
  complement: string;
  additional_information: string;
  state: string;
}

export type TokenPayload = {
  username: string;
  email: string;
  avatar: string;
  id: string;
  sub: string;
  exp: number;
  iat: number;
}

export type User = Location & {
  username: string;
  token: string;
  avatar: string;
  email: string;
  decode?: TokenPayload;
  id: string;

  phone: string;
  name: string;
  bio: string;

  accountType: 'google' | 'mylook';
}
