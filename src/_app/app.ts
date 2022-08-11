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

export const appVariables: AppVariables<AppTypography, AppTexts> = {
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

  texts: {
    signin: {
      title: 'Welcome',
    },
    signup: {
      title: 'Create an account',
      description: 'Please fill in all the fields below properly'
    }
  }
};
