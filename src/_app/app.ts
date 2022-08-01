import { AppVariables } from "../_lib/global";

type AppTypography = 'Montserrat' | 'Nunito' | 'Roboto'

export const appVariables: AppVariables<AppTypography> = {
  size: {
    MULTIPLIER: 1,
    UNITY: 'rem',
  },
  typography: {
    title: 'Montserrat',
    subtitle: 'Nunito',
    text: 'Roboto',
  },
  projectDescription: 'Digital watch web',
  nameProject: 'MyClock',
};
