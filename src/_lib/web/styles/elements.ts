import { getStyleProperty } from "./spacing";

type TSpacing = {
  size: (value: number) => string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type ThemeElements = {
  spacing: TSpacing;
};

const spacingStyles = getStyleProperty('gap')

delete spacingStyles.in

export const elements: ThemeElements = {
  spacing: spacingStyles,
};
