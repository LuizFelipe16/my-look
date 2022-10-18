export type TUser = {
  email: string;
  username: string;
  password: string;
  name: string;
  phone: string;
  bio: string;

  cep: string;
  street: string;
  city: string;
  complement: string;
  additional_information: string;
  
  provider?: 'mylook' | 'google';
}

export type TFaunaUser = {
  data: TUser;
  ts: number;
  ref: {
    id: string;
  };
}
