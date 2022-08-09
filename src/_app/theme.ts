import { myStylesPresets, border, padding, font, size, presets } from '../_lib/web';
import { myAppColors, bg, textColor } from './themeColors';

export const theme = {
  styled: myStylesPresets,
  presets,
  colors: myAppColors,
  textColor,
  bg,
  font,
  border,
  padding,
  size: size,
  spacing: {
    size: size,
  },
};
