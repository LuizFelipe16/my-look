import { styleSize } from "../tools";
import { ThemeColors, colors } from "./colors";
import { ThemeFont, font } from "./font";
import { ThemePresets, presets } from "./presets";
import { ThemePadding, padding } from "./padding";
import { ThemeBorder, border } from "./border";
import { ThemeFlexColumn, ThemeFlexRow, flex } from "./flex";

export type ThemeStyle = {
  presets: ThemePresets;
  padding: ThemePadding;
  colors: ThemeColors;
  font: ThemeFont;
  border: ThemeBorder;
  centerRow: string;
  centerColumn: string;
  row: ThemeFlexRow;
  column: ThemeFlexColumn;
  spacing: {
    size: Function
  };
};

export const styledPresets: ThemeStyle = {
  colors,
  presets,
  border,
  padding,
  font,
  centerRow: flex.centerRow,
  centerColumn: flex.centerColumn,
  row: flex.row,
  column: flex.column,
  spacing: {
    size: styleSize,
  },
};
