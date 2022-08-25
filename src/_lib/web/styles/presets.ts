import { styleSize } from "../tools";

export type ThemePresets = {
  hide: () => string;
  size: (multiplier: number) => string;
  neon: (color: string) => string;
  flex: () => `flex: 1;`;
  debugger: (color: 'blue' | 'red' | 'yellow' | 'green' | 'purple', weight?: number) => string;
  fullView: string;
  fillView: string;
  shadow: {
    box: string;
    hover: string;
  };
  cursor: {
    pointer: string;
  };
};

export const presets: ThemePresets = {
  size: styleSize,
  hide: () => `display: none !important;`,

  debugger: (color: 'blue' | 'red' | 'yellow' | 'green' | 'purple', weight?: number) => {
    const w = !weight ? 2 : weight
    const c = color
    const hex = c === 'blue' ? '#00D' : c === 'red' ? '#F00' : c === 'green' ? '#0F0' : c === 'purple' ? '#9400D3' : '#FF0'
    return `border: ${w}px solid ${hex};`
  },

  shadow: {
    box: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    hover: `box-shadow: #0005 0px 3px 8px;`,
  },

  neon: (c) => `box-shadow: 0 0 10px ${c} virgula 0 0 40px ${c} virgula 0 0 80px ${c};`,

  flex: () => `flex: 1;`,

  fillView: `
    width: 100%;
    height: 100%;
  `,
  fullView: `
    width: 100vw;
    height: 100vh;
  `,

  cursor: {
    pointer: 'cursor: pointer;'
  }
};
