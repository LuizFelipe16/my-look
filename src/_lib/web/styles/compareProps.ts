import { myStylesMethods as myStyles } from "./myStyles";

type StylesProp = string | Array<string>

export type ThemeCompare = {
  prop: (ifProp: boolean | undefined, styles: StylesProp, elseStyles?: StylesProp) => string;
  theme: {
    ifDark: (actualAppTheme: 'dark' | 'light', styles: StylesProp, elseStyles?: StylesProp) => string;
    ifLight: (actualAppTheme: 'dark' | 'light', styles: StylesProp, elseStyles?: StylesProp) => string;
  }
};

export const compare: ThemeCompare = {
  prop: (ifProp: boolean | undefined, styles: StylesProp, elseStyles?: StylesProp) => {
    if (ifProp) {
      return `${myStyles.transformer(styles)}`
    } else {
      return `${myStyles.transformer(elseStyles)}`
    }
  },
  theme: {
    ifDark: (actualAppTheme: 'dark' | 'light', styles: StylesProp, elseStyles?: StylesProp) => {
      if (actualAppTheme === 'dark') {
        return `${myStyles.transformer(styles)}`
      } else if (!!elseStyles && actualAppTheme ==='light') {
        return `${myStyles.transformer(elseStyles)}`
      }
      return ``
    },
    ifLight: (actualAppTheme: 'dark' | 'light', styles: StylesProp, elseStyles?: StylesProp) => {
      if (actualAppTheme === 'light') {
        return `${myStyles.transformer(styles)}`
      } else if (!!elseStyles && actualAppTheme ==='dark') {
        return `${myStyles.transformer(elseStyles)}`
      }
      return ``
    },
  }
};
