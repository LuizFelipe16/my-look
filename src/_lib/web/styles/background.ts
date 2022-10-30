
type RepeatOptions = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat' | 'initial' | 'inherit';

export type ThemeBgs = {
  path: (path_public: string) => `
    background-image: url(${string});
  `,
  repeat: (option: RepeatOptions) => string;
};

export const bgImage: ThemeBgs = {
  path: (path_public: string) => `
    background-image: url(${path_public});
  `,
  repeat: (value: RepeatOptions) => {
    return `
      background-repeat: ${value};
    `;
  }
};
