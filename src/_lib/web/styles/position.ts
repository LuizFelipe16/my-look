import { styleSize } from "../tools";

type PropertyPosition = 'static' | 'fixed' | 'relative' | 'absolute';

type Position = `position: ${PropertyPosition};`;

export type ThemePosition = {
  static: Position;
  fixed: Position;
  relative: Position;
  absolute: Position;

  top: {
    value: (value: number) => `top: ${string};`;
    percentage: (percentage: number) => `top: ${number}%;`
  };
  right: {
    value: (value: number) => `right: ${string};`;
    percentage: (percentage: number) => `right: ${number}%;`
  };
  left: {
    value: (value: number) => `left: ${string};`;
    percentage: (percentage: number) => `left: ${number}%;`
  };
  bottom: {
    value: (value: number) => `bottom: ${string};`;
    percentage: (percentage: number) => `bottom: ${number}%;`
  };
};

export const position: ThemePosition = {
  static: 'position: static;',
  fixed: 'position: fixed;',
  relative: 'position: relative;',
  absolute: 'position: absolute;',

  top: {
    value: (value: number) => `top: ${styleSize(value)};`,
    percentage: (percentage: number) => `top: ${percentage}%;`,
  },
  bottom: {
    value: (value: number) => `bottom: ${styleSize(value)};`,
    percentage: (percentage: number) => `bottom: ${percentage}%;`,
  },
  left: {
    value: (value: number) => `left: ${styleSize(value)};`,
    percentage: (percentage: number) => `left: ${percentage}%;`,
  },
  right: {
    value: (value: number) => `right: ${styleSize(value)};`,
    percentage: (percentage: number) => `right: ${percentage}%;`,
  },
};
