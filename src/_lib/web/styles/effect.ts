import { myStyles } from "./myStyles";

export type ThemeEffects = {
  hover: {
    in: (elementFocus: string, styles: any) => string;
    inOwn: (styles: any) => string;
    inOwnChild: (childFocus: string, styles: any, isChildClass?: boolean) => string;
  },
  filter: {
    glow: (value: number) => `filter: brightness(${number});`;
    objectCover: () => `object-fit: cover;`;
    opacity: (percentage: number) => `opacity: ${number};`;
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
    opacity: (percentage: number) => `opacity: ${percentage};`,
  },
};
