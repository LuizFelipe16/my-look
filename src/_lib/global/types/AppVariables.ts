export type AppVariables<TF, TX, TC> = {
  size: {
    MULTIPLIER: number;
    UNITY: 'rem' | 'em' | 'px';
  };
  typography: {
    title: TF;
    subtitle: TF;
    text: TF;
  },
  projectDescription: string;
  nameProject: string;
  nameMinProject: string;
  onDuration: {
    loadingPage: number; // mili
  }

  cookies: TC;
  texts: TX;
};
