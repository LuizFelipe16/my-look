import { myStylesMethods } from "./myStyles";

export type ThemeEffects = {
  hover: {
    in: (elementFocus: string, styles: any) => string;
    inOwn: (styles: any, seconds?: number) => string;
    inOwnChild: (childFocus: string, styles: any, isChildClass?: boolean, seconds?: number) => string;
  },
  filter: {
    glow: (value: number) => `
      filter: brightness(${number});
    `;
    objectCover: () => `
      object-fit: cover;
    `;
    opacity: (percentage: number) => `
      opacity: ${number};
    `;
  };
};

export const effects: ThemeEffects = {
  hover: {
    in: (elementFocus: string, styles: string) => `
      ${elementFocus}:hover {
        ${myStylesMethods.transformer(styles)}
      }
    `,
    inOwn: (styles: string, seconds?: number) => `
      ${!seconds ? '': `transition: ${seconds}s;`}

      &:hover {
        ${myStylesMethods.transformer(styles)}
      }
    `,
    inOwnChild: (childFocus: string, styles: any, isC?: boolean, seconds?: number) => `
      &:hover > ${isC ? `.${childFocus}` : childFocus} {
        ${myStylesMethods.transformer(styles)}
      }
    `
  },
  filter: {
    glow: (value: number) => `
      filter: brightness(${value});
    `,
    objectCover: () => `
      object-fit: cover;
    `,
    opacity: (percentage: number) => `
      opacity: ${percentage};
    `,
  },
};
