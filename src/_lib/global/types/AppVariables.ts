export type AppVariables<AppTypography, AppTexts, AppCookies> = {
  size: {
    MULTIPLIER: number;
    UNITY: 'rem' | 'em' | 'px';
  };
  typography: {
    title: AppTypography;
    subtitle: AppTypography;
    text: AppTypography;
  },
  projectDescription: string;
  nameProject: string;
  nameMinProject: string;

  cookies: AppCookies;

  texts: AppTexts;
};
