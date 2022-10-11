import { AppVariables } from "_lib/global";
import { AppTypography, AppTexts, AppCookies } from './types';

export const appVariables: AppVariables<AppTypography, AppTexts, AppCookies> = {
  size: {
    MULTIPLIER: 1,
    UNITY: 'rem',
  },
  onDuration: {
    loadingPage: 100,
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
    user: `mylook.user`,
    cart: `@mylook.shop.cart`
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
