import { AppVariables } from "_lib/global";

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

type AppCookies = {
  expire: string;
  username: string;
  token: string;
  user: string;
};

export const appVariables: AppVariables<AppTypography, AppTexts, AppCookies> = {
  size: {
    MULTIPLIER: 1,
    UNITY: 'rem',
  },
  typography: {
    title: 'Poppins',
    subtitle: 'Poppins',
    text: 'Poppins',
  },
  projectDescription: 'E-commerce for stylish and high-end clothing.',
  nameProject: 'MyLook',
  nameMinProject: 'mylook',

  cookies: {
    expire: '1d',
    username: `mylook.username`,
    token: `mylook.token`,
    user: `mylook.user`
  },
  
  texts: {
    signin: {
      title: `it's good to have you back!`,
    },
    signup: {
      title: 'Find your perfect self',
      description: 'Please fill in all the fields below properly'
    }
  }
};
