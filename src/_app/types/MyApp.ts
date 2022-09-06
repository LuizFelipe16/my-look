export type AppTypography = 'Poppins' | 'Nunito' | 'Roboto';

export type AppTexts = {
  signin: {
    title: string;
    description?: string;
  };
  signup: {
    title: string;
    description?: string;
  };
};

export type AppCookies = {
  expire: string;
  username: string;
  token: string;
  user: string;
};
