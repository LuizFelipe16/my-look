import { appColors, getStyleColorProperty, ThemeColors } from "./styles/AppColors";

export const colors: ThemeColors = appColors;

export const bg = getStyleColorProperty('background-color');
export const textColor = getStyleColorProperty('color');
export const borderColor = getStyleColorProperty('border-color');

export type { 
  ThemeColors,
};
