import { styleSize } from "../tools";

type BorderWidth = `border-width: ${string};`

export type ThemeBorder = {
  sm: BorderWidth;
  md: BorderWidth;
  lg: BorderWidth;
  xl: BorderWidth;
}

export const border: ThemeBorder = {
  sm: `border-width: ${styleSize(0.5)};`,
  md: `border-width: ${styleSize(1)};`,
  lg: `border-width: ${styleSize(1.5)};`,
  xl: `border-width: ${styleSize(2)};`,
}
