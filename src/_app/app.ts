import { AppVariables } from "../_lib/global";

export type AppTypography = 'Poppins' | 'Nunito' | 'Roboto';

export const appVariables: AppVariables<AppTypography> = {
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
};
