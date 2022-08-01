import { borderColor, ThemeColors } from "../../../_app";
import { styleSize } from "../tools";

type Border = `border: ${string} solid ${string};`;
type BorderWidth = `border-width: ${string};`;
type BorderRadius = `border-radius: ${string};`;
type Position = 'top' | 'left' | 'bottom' | 'right';

export type ThemeBorder = {
  fill: (value: number, color: string) => Border;
  fillByPixel: (value: number, color: string) => Border;
  width: {
    size: (value: number, color: string) => BorderWidth;
    sm: BorderWidth;
    md: BorderWidth;
    lg: BorderWidth;
    xl: BorderWidth;
    inPosition: (value: number, pose: Position) => string;
  };
  color: ThemeColors;
  rounded: {
    size: (value: number) => BorderRadius,
    circle: BorderRadius,
    sm: BorderRadius,
    md: BorderRadius,
    lg: BorderRadius,
    xl: BorderRadius,
    inPositions: (value: number, poseOne: Position, poseTwo: Position) => string;
  },
};

const borderValues = {
  sm: styleSize(0.5),
  md: styleSize(1),
  lg: styleSize(1.5),
  xl: styleSize(2),
};

export const border: ThemeBorder = {
  fill: (value: number, color: string) => `border: ${styleSize(value)} solid ${color};`,
  fillByPixel: (value: number, color: string) => `border: ${value}px solid ${color};`,

  width: {
    size: (value: number) => `border-width: ${styleSize(value)};`,
    sm: `border-width: ${borderValues.sm};`,
    md: `border-width: ${borderValues.md};`,
    lg: `border-width: ${borderValues.lg};`,
    xl: `border-width: ${borderValues.xl};`,

    inPosition: (value: number, pose: Position) => `border-${pose}-width: ${styleSize(value)};`
  },

  color: borderColor,

  rounded: {
    size: (value: number) => `border-radius: ${styleSize(value)};`,
    circle: `border-radius: 9999px;`,
    sm: `border-radius: ${borderValues.sm};`,
    md: `border-radius: ${borderValues.md};`,
    lg: `border-radius: ${borderValues.lg};`,
    xl: `border-radius: ${borderValues.xl};`,

    inPositions: (value: number, poseOne: Position, poseTwo: Position) => `border-${poseOne}-${poseTwo}-radius: ${styleSize(value)};`
  },
};
