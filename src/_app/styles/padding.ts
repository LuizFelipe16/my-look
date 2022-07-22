import { styleSize } from "../tools";

type PaddingFull = `padding: ${string};`

export type ThemePadding = {
  full: {
    sm: PaddingFull;
    md: PaddingFull;
    lg: PaddingFull;
    xl: PaddingFull;
  }
  p1: PaddingFull;
  p2: PaddingFull;
  p3: PaddingFull;

  vertical: {
    p1: string;
    p2: string;
  };
}

export const padding: ThemePadding = {
  full: {
    sm: `padding: ${styleSize(2)};`,
    md: `padding: ${styleSize(4)};`,
    lg: `padding: ${styleSize(6)};`,
    xl: `padding: ${styleSize(8)};`,
  },

  p1: `padding: ${styleSize(1)};`,
  p2: `padding: ${styleSize(2)};`,
  p3: `padding: ${styleSize(3)};`,

  vertical: {
    p1: `
      padding-bottom: ${styleSize(1)};
      padding-top: ${styleSize(1)};
    `,
    p2: `
      padding-bottom: ${styleSize(2)};
      padding-top: ${styleSize(2)};
    `,
  },
};
