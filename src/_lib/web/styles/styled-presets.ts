import { styleSize } from "../tools";
import { ThemeColors, colors, bg, textColor } from "../../../_app/colors";
import { ThemeFont, font } from "./font";
import { ThemePresets, presets } from "./presets";
import { ThemeBorder, border } from "./border";
import { ThemePosition, position } from "./position";
import { ThemeTransition, transition } from "./transition";
import { ThemeResponsiveness, responsiveness } from "./responsiveness";
import { ThemeFlexColumn, ThemeFlexRow, flex } from "./flex";
import { padding } from "./padding";
import { margin } from "./margin";
import { ThemePositions } from "./spacing";

export type ThemeStyle = {
  presets: ThemePresets;
  padding: ThemePositions;
  margin: ThemePositions;
  colors: ThemeColors;
  responsiveness: ThemeResponsiveness;
  bg: ThemeColors;
  textColor: ThemeColors;
  transition: ThemeTransition;
  font: ThemeFont;
  border: ThemeBorder;
  position: ThemePosition;
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
  textColor,
  bg,
  responsiveness,
  presets,
  border,
  position,
  padding,
  margin,
  font,
  centerRow: flex.centerRow,
  centerColumn: flex.centerColumn,
  row: flex.row,
  column: flex.column,
  spacing: {
    size: styleSize,
  },
  transition,
};
