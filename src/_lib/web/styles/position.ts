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
  values: (props: TValues) => string;
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

type TValues = {
  left?: null | number;
  top?: null | number;
  bottom?: null | number;
  right?: null | number;
  unity?: 'px' | 'rem' | 'em' | '%';
}

const getValuePosition = (pose: POSITION_PROPERTY, value: number, unity?: 'px' | 'rem' | 'em' | '%'): PositionValue => {
  if (value === 0) return `${pose}: 0;`

  return `${pose}: ${!unity ? styleSize(value) : `${size(value)}${unity}`};`
}

export const position: ThemePosition = {
  static: 'position: static;',
  fixed: 'position: fixed;',
  relative: 'position: relative;',
  absolute: 'position: absolute;',

  values: ({ left = null, top = null, right = null, bottom = null, unity = 'px' }: TValues) => {

    const poseLeft = !left ? '' : getValuePosition('left', left, unity)
    const poseRight = !right ? '' : getValuePosition('right', right, unity)
    const poseTop = !top ? '' : getValuePosition('top', top, unity)
    const poseBottom = !bottom ? '' : getValuePosition('bottom', bottom, unity)

    return `
      ${poseLeft}
      ${poseRight}
      ${poseTop}
      ${poseBottom}
    `
  },

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
