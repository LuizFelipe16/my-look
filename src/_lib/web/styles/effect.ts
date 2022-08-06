import { myStyles } from "./myStyles";

export type ThemeEffects = {
  hover: {
    in: (elementFocus: string, styles: any) => string;
    inOwn: (styles: any) => string;
    inOwnChild: (childFocus: string, styles: any, isChildClass?: boolean) => string;
  },
  filter: {
    glow: (value: number) => string;
    objectCover: () => string;
  };
};

export const effects: ThemeEffects = {
  hover: {
    in: (elementFocus: string, styles: string) => `${elementFocus}:hover { ${myStyles.transformer(styles)} }`,
    inOwn: (styles: string) => `&:hover { ${myStyles.transformer(styles)} }`,
    inOwnChild: (childFocus: string, styles: any, isC?: boolean) => `&:hover > ${isC ? `.${childFocus}` : childFocus} { ${myStyles.transformer(styles)} }`
  },
  filter: {
    glow: (value: number) => `filter: brightness(${value});`,
    objectCover: () => `object-fit: cover;`,
  },
};
