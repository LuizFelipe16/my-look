import { styleSize, size } from "../tools";

type POSITION_PROPERTY = 'bottom' | 'right' | 'left' | 'top';
type UNITY_PROPERTY = 'px' | 'rem' | 'em' | '%';
type PropertyPosition = 'static' | 'fixed' | 'relative' | 'absolute';

type Position = `position: ${PropertyPosition};`;
type PositionValue = `${POSITION_PROPERTY}: ${string};`;

export type ThemePosition = {
  static: Position;
  fixed: Position;
  relative: Position;
  absolute: Position;

  top: {
    value: (value: number, unity?: UNITY_PROPERTY) => PositionValue;
    percentage: (percentage: number) => `top: ${number}%;`
  };
  right: {
    value: (value: number, unity?: UNITY_PROPERTY) => PositionValue;
    percentage: (percentage: number) => `right: ${number}%;`
  };
  left: {
    value: (value: number, unity?: UNITY_PROPERTY) => PositionValue;
    percentage: (percentage: number) => `left: ${number}%;`
  };
  bottom: {
    value: (value: number, unity?: UNITY_PROPERTY) => PositionValue;
    percentage: (percentage: number) => `bottom: ${number}%;`
  };
};

const getValuePosition = (pose: POSITION_PROPERTY, value: number, unity?: 'px' | 'rem' | 'em' | '%'): PositionValue => {
  if (value === 0) return `${pose}: 0;`

  return `${pose}: ${!unity ? styleSize(value) : `${size(value)}${unity}`};`
}

export const position: ThemePosition = {
  static: 'position: static;',
  fixed: 'position: fixed;',
  relative: 'position: relative;',
  absolute: 'position: absolute;',

  top: {
    value: (value: number, unity?: UNITY_PROPERTY) => getValuePosition('top', value, unity),
    percentage: (percentage: number) => `top: ${percentage}%;`,
  },
  bottom: {
    value: (value: number, unity?: UNITY_PROPERTY) => getValuePosition('bottom', value, unity),
    percentage: (percentage: number) => `bottom: ${percentage}%;`,
  },
  left: {
    value: (value: number, unity?: UNITY_PROPERTY) => getValuePosition('left', value, unity),
    percentage: (percentage: number) => `left: ${percentage}%;`,
  },
  right: {
    value: (value: number, unity?: UNITY_PROPERTY) => getValuePosition('right', value, unity),
    percentage: (percentage: number) => `right: ${percentage}%;`,
  },
};
