import { myStyles } from "./myStyles";

type Multiple = {
  phone: string | Array<string>; // 100 - 480
  tablet: string | Array<string>; // 481 - 720
  large: string | Array<string>; // 721 - 1099
};

type Platforms = {
  mobile?: string | Array<string>; // 100 - 540
  tablet?: string | Array<string>; // 541 - 768
  laptop?: string | Array<string>; // 769 - 992
  large?: string | Array<string>; // 993 - 1200
};

type SS = {
  comommStyle: string | Array<string>;
  incluide: Array<'m' | 't' | 'l' | 'l2x'>;
}

export type ThemeResponsiveness = {
  media: (styles: any, min: number, max: number) => string;
  phone: (styles: string | Array<string>) => string;
  notWeb: (styles: string | Array<string>) => string;
  multiple: (devices: Multiple) => string;
  platforms: (devices?: Platforms, extra?: SS) => string;
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
  },
  platforms: (devices?: Platforms, extra?: SS) => {
    const comommStyle = extra?.comommStyle;
    const incluide = extra?.incluide;
    const mobile = devices?.mobile;
    const tablet = devices?.tablet;
    const laptop = devices?.laptop;
    const large = devices?.large;

    if (comommStyle && !!incluide) {
      return `
        @media (min-width: 100px) and (max-width: 540px) { ${myStyles.transformer(incluide.includes('m') ? comommStyle : mobile)} }
        @media (min-width: 541px) and (max-width: 768px) { ${myStyles.transformer(incluide.includes('t') ? comommStyle : tablet)} }
        @media (min-width: 769px) and (max-width: 992px) { ${myStyles.transformer(incluide.includes('l') ? comommStyle : laptop)} }
        @media (min-width: 993px) and (max-width: 1200px) { ${myStyles.transformer(incluide.includes('l2x') ? comommStyle : large)} }
      `
    }

    return `
      @media (min-width: 100px) and (max-width: 540px) { ${myStyles.transformer(mobile )} }
      @media (min-width: 541px) and (max-width: 768px) { ${myStyles.transformer(tablet)} }
      @media (min-width: 769px) and (max-width: 992px) { ${myStyles.transformer(laptop)} }
      @media (min-width: 993px) and (max-width: 1200px) { ${myStyles.transformer(large)} }
    `
  }
};
