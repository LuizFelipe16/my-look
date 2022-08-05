import { appVariables } from "../../../_app";
import { styleSize, UNITY_PROPERTY } from "../tools";

export type ThemePositions = {
  full: SpacingStyles;
  vertical: SpacingStyles;
  horizontal: SpacingStyles;
  top: SpacingStyles;
  left: SpacingStyles;
  bottom: SpacingStyles;
  right: SpacingStyles;
};

type SpacingValue = {
  size: SpacingSize;
  value: string;
};

type SpacingSize = 'sm' | 'md' | 'lg' | 'xl' | 'size' | 'in';

export type SpacingStyles = {
  size: (value: number) => string;
  in: (top: number, left: number, bottom: number, right: number, unity?: UNITY_PROPERTY) => string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export const spacing = {
  sm: `${styleSize(2)}`,
  md: `${styleSize(4)}`,
  lg: `${styleSize(6)}`,
  xl: `${styleSize(8)}`,
};

const spacingValues: SpacingValue[] = [
  { size: 'in', value: `` },
  { size: 'size', value: `` },
  { size: 'sm', value: `${styleSize(0.5)}` },
  { size: 'md', value: `${styleSize(1)}` },
  { size: 'lg', value: `${styleSize(1.5)}` },
  { size: 'xl', value: `${styleSize(2)}` }
];

type Property = 'padding' | 'margin' | 'gap';
type PropertyPosition = 'right' | 'left' | 'top' | 'bottom';

export function getStyleProperty(property: Property, positionOne?: PropertyPosition, positionTwo?: PropertyPosition) {
  const stylesArray: any = spacingValues.map(s => {
    if (s.size === 'in') {
      const propertyStyle = (t: number, l: number, b: number, r: number, u?: UNITY_PROPERTY) => {
        const unity = !u ? appVariables.size.UNITY : u
        return `${property}: ${t}${unity} ${l}${unity} ${b}${unity} ${r}${unity};`
      }
      return { [s.size]: propertyStyle }
    }

    if (s.size === 'size') {
      const propertyStyle = !positionOne 
      ? (value: number) => `${property}: ${styleSize(value)};` 
      : !!positionOne && !!positionTwo 
      ? (value: number) => `${property}-${positionOne}: ${styleSize(value)}; ${property}-${positionTwo}: ${styleSize(value)};`
      : (value: number) => `${property}-${positionOne}: ${styleSize(value)};`
    
      return { [s.size]: propertyStyle }
    }
    
    const propertyStyle = !positionOne 
      ? `${property}: ${s.value};` 
      : !!positionOne && !!positionTwo 
      ? `${property}-${positionOne}: ${s.value}; ${property}-${positionTwo}: ${s.value};`
      : `${property}-${positionOne}: ${s.value};`
    
    return { [s.size]: propertyStyle }
  });

  const styles = {
    in: stylesArray[0].in,
    size: stylesArray[1].size,
    sm: stylesArray[2].sm ,
    md: stylesArray[3].md,
    lg: stylesArray[4].lg,
    xl: stylesArray[5].xl,
  };

  return styles;
};
