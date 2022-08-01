export type AppVariables<AppTypography> = {
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
};
