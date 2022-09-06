import { myStylesMethods as myStyles } from "./myStyles";

export type ThemeCompare = {
  prop: (ifProp: boolean | undefined, styles: string, elseStyles?: string) => string;
  theme: {
    ifDark: (actualAppTheme: 'dark' | 'light', styles: string, elseStyles?: string) => string;
    ifLight: (actualAppTheme: 'dark' | 'light', styles: string, elseStyles?: string) => string;
  }
};

export const compare: ThemeCompare = {
  prop: (ifProp: boolean | undefined, styles: string, elseStyles?: string) => {
    if (ifProp) {
      return `${myStyles.transformer(styles)}`
    } else {
      return `${myStyles.transformer(elseStyles)}`
    }
  },
  theme: {
    ifDark: (actualAppTheme: 'dark' | 'light', styles: string, elseStyles?: string) => {
      if (actualAppTheme === 'dark') {
        return `${myStyles.transformer(styles)}`
      } else if (!!elseStyles && actualAppTheme ==='light') {
        return `${myStyles.transformer(elseStyles)}`
      }
      return ``
    },
    ifLight: (actualAppTheme: 'dark' | 'light', styles: string, elseStyles?: string) => {
      if (actualAppTheme === 'light') {
        return `${myStyles.transformer(styles)}`
      } else if (!!elseStyles && actualAppTheme ==='dark') {
        return `${myStyles.transformer(elseStyles)}`
      }
      return ``
    },
  }
};
