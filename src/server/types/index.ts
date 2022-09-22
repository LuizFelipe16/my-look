export type TUser = {
  email: string;
  username: string;
  password: string;
  name: string;
  phone: string;
  bio: string;
  provider?: 'mylook' | 'google';
}

export type TFaunaUser = {
  data: TUser;
  ts: number;
  ref: {
    id: string;
  };
}
