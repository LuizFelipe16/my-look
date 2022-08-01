import { styleSize } from "../tools";

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

type SpacingSize = 'sm' | 'md' | 'lg' | 'xl' | 'size';

export type SpacingStyles = {
  size: (value: number) => string;
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
  { size: 'size', value: `` },
  { size: 'sm', value: `${styleSize(0.5)}` },
  { size: 'md', value: `${styleSize(1)}` },
  { size: 'lg', value: `${styleSize(1.5)}` },
  { size: 'xl', value: `${styleSize(2)}` }
];

type Property = 'padding' | 'margin';
type PropertyPosition = 'right' | 'left' | 'top' | 'bottom';

export function getStyleProperty(property: Property, positionOne?: PropertyPosition, positionTwo?: PropertyPosition) {
  const stylesArray: any = spacingValues.map(s => {
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
    size: stylesArray[0].size,
    sm: stylesArray[1].sm ,
    md: stylesArray[2].md,
    lg: stylesArray[3].lg,
    xl: stylesArray[4].xl,
  };

  return styles;
};
