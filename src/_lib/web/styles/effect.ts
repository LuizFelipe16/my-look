import { myStyles } from "./myStyles";

export type ThemeEffects = {
  hover: (elementFocus: string, styles: any) => string;
  filter: {
    glow: (value: number) => string;
    objectCover: () => string;
  };
};

export const effects: ThemeEffects = {
  hover: (elementFocus: string, styles: string) => `${elementFocus}:hover { ${myStyles.transformer(styles)} }`,
  filter: {
    glow: (value: number) => `filter: brightness(${value});`,
    objectCover: () => `object-fit: cover;`,
  },
};
