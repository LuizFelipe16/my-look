import { myStylesMethods } from "./myStyles";

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
  media: (styles: any, min: number, max: number) => {
    return `
      @media (min-width: ${min}px) and (max-width: ${max}px) { 
        ${myStylesMethods.transformer(styles)} 
      }
    `
  },
  
  phone: (styles: string | Array<string>) => {
    return `
      @media (min-width: 100px) and (max-width: 480px) { 
        ${myStylesMethods.transformer(styles)} 
      }
    `
  },
  
  notWeb: (styles: string | Array<string>) => {
    return `
      @media (min-width: 100px) and (max-width: 1100px) { 
        ${myStylesMethods.transformer(styles)} 
      }
    `
  },
 
  multiple: ({ phone, tablet, large }: Multiple) => {
    return `
      @media (min-width: 100px) and (max-width: 480px) { 
        ${myStylesMethods.transformer(phone)} 
      }
      @media (min-width: 481px) and (max-width: 720px) { 
        ${myStylesMethods.transformer(tablet)} 
      }
      @media (min-width: 721px) and (max-width: 1099px) { 
        ${myStylesMethods.transformer(large)} 
      }
    `
  },
  
  platforms: (devices?: Platforms, extra?: SS) => {
    const comommStyle = extra?.comommStyle;
    const incluide = extra?.incluide;
    const mobile = devices?.mobile;
    const tablet = devices?.tablet;
    const laptop = devices?.laptop;
    const large = devices?.large;

    if (devices && comommStyle && !!incluide) {
      return `
        @media (min-width: 100px) and (max-width: 540px) { 
          ${myStylesMethods.transformer(incluide.includes('m') && comommStyle)} 
          ${myStylesMethods.transformer(mobile)}
        }
        @media (min-width: 541px) and (max-width: 768px) {
          ${myStylesMethods.transformer(incluide.includes('t') && comommStyle)} 
          ${myStylesMethods.transformer(tablet)}
        }
        ${laptop || incluide.includes('l') && comommStyle
          ? `
            @media (min-width: 769px) and (max-width: 992px) { 
              ${myStylesMethods.transformer(incluide.includes('l') && comommStyle)} 
              ${myStylesMethods.transformer(laptop)}
            } 
          ` 
          : ``
        }
        ${large || incluide.includes('l2x') && comommStyle 
          ? `
            @media (min-width: 993px) and (max-width: 1200px) { 
              ${myStylesMethods.transformer(incluide.includes('l2x') && comommStyle)} 
              ${myStylesMethods.transformer(large)}
            } 
          ` 
          : ``
        }
      `
    }

    if (comommStyle && !!incluide) {
      return `
        @media (min-width: 100px) and (max-width: 540px) { 
          ${myStylesMethods.transformer(incluide.includes('m') ? comommStyle : mobile)} 
        }
        @media (min-width: 541px) and (max-width: 768px) { 
          ${myStylesMethods.transformer(incluide.includes('t') ? comommStyle : tablet)} 
        }
        @media (min-width: 769px) and (max-width: 992px) { 
          ${myStylesMethods.transformer(incluide.includes('l') ? comommStyle : laptop)} 
        }
        @media (min-width: 993px) and (max-width: 1200px) { 
          ${myStylesMethods.transformer(incluide.includes('l2x') ? comommStyle : large)} 
        }
      `
    }

    return `
      ${!!mobile && `
        @media (min-width: 100px) and (max-width: 540px) { 
          ${myStylesMethods.transformer(mobile)} 
        }
      `}
      ${!!tablet && `
        @media (min-width: 541px) and (max-width: 768px) { 
          ${myStylesMethods.transformer(tablet)} 
        }
      `}
      ${!!laptop && `
        @media (min-width: 769px) and (max-width: 992px) { 
          ${myStylesMethods.transformer(laptop)} 
        }
      `}
      ${!!large && `
        @media (min-width: 993px) and (max-width: 1200px) { 
          ${myStylesMethods.transformer(large)} 
        }
      `}
    `
  }
};
