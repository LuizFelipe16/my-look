import { styledPresets, border, padding, font, colors } from './styles';
import { size } from './tools';

export const theme = {
  presets: {
    myDebugger: `border: 1px solid red;`,
  
    hide: `display: none !important;`,
  
    centerRow: `
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    `,
  
    centerColumn: `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    `,
  },
  styled: styledPresets,
  colors,
  font,
  border,
  padding,

  width: {
    full: '100%',
  },
  height: {
    full: '100%',
  },

  size: size,
  
  spacing: {
    size: size,
  },
};
