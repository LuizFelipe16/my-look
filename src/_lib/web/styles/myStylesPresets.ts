import { styleSize } from "../tools";
import { ThemeColors, myAppColors, bg, textColor } from "_app";
import { ThemeFont, font } from "./font";
import { ThemePresets, presets } from "./presets";
import { ThemeBorder, border } from "./border";
import { ThemePosition, position } from "./position";
import { ThemeTransition, transition } from "./transition";
import { ThemeResponsiveness, responsiveness } from "./responsiveness";
import { ThemeFlexColumn, ThemeFlexRow, flex } from "./flex";
import { padding } from "./padding";
import { margin, gapEls, ThemeGap } from "./margin";
import { ThemePositions } from "./spacing";
import { ThemeHeight, h } from "./height";
import { ThemeWidth, w } from "./width";
import { ThemeOverlap, overlap } from "./overlap";
import { ThemeEffects, effects } from "./effect";
import { ThemeOverflow, over } from "./overflow";
import { ThemeShadow, shadow } from "./shadow";
import { ThemeAnimation, animation } from "./animation";
import { ThemeBgs, bgImage } from "./background";
import { MyStyles, myStyles } from "./myStyles";

export type ThemeStyle = {
  myStyles: MyStyles;
  h: ThemeHeight;
  w: ThemeWidth;
  animation: ThemeAnimation;
  shadow: ThemeShadow;
  over: ThemeOverflow;
  effect: ThemeEffects;
  overlap: ThemeOverlap;
  presets: ThemePresets;
  padding: ThemePositions;
  margin: ThemePositions;
  gapEls: ThemeGap;
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
  bgImage: ThemeBgs;
  spacing: {
    size: Function
  };
  flex: {
    breakLine: string;
    display: string;
  };
};

export const myStylesPresets: ThemeStyle = {
  myStyles,
  h,
  w,
  bgImage,
  animation,
  over,
  shadow,
  effect: effects,
  gapEls,
  overlap,
  colors: myAppColors,
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
  flex: {
    breakLine: flex.flex.breakLine,
    display: flex.flex.display,
  },
};
