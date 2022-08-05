import { myStyles } from "./myStyles";

type Multiple = {
  phone: string | Array<string>; // 100 - 480
  tablet: string | Array<string>; // 481 - 720
  large: string | Array<string>; // 721 - 1099
};

export type ThemeResponsiveness = {
  media: (styles: any, min: number, max: number) => string;
  phone: (styles: string | Array<string>) => string;
  notWeb: (styles: string | Array<string>) => string;
  multiple: (devices: Multiple) => string;
};

export const responsiveness: ThemeResponsiveness = {
  media: (styles: any, min: number, max: number) => `@media (min-width: ${min}px) and (max-width: ${max}px) { ${myStyles.transformer(styles)} }`,
  phone: (styles: string | Array<string>) => `@media (min-width: 100px) and (max-width: 480px) { ${myStyles.transformer(styles)} }`,
  notWeb: (styles: string | Array<string>) => `@media (min-width: 100px) and (max-width: 1100px) { ${myStyles.transformer(styles)} }`,
  multiple: ({ phone, tablet, large }: Multiple) => {
    return `
      @media (min-width: 100px) and (max-width: 480px) { ${myStyles.transformer(phone)} }
      @media (min-width: 481px) and (max-width: 720px) { ${myStyles.transformer(tablet)} }
      @media (min-width: 721px) and (max-width: 1099px) { ${myStyles.transformer(large)} }
    `
  }
};
