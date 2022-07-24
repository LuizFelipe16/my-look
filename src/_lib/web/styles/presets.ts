import { styleSize } from "../tools";

export type ThemePresets = {
  hide: string;
  size: (multiplier: number) => string;
  debugger: (color: 'blue' | 'red' | 'yellow' | 'green' | 'purple', weight?: number) => string;
}

export const presets: ThemePresets = {
  size: styleSize,
  hide: `display: none !important;`,

  debugger: (color: 'blue' | 'red' | 'yellow' | 'green' | 'purple', weight?: number) => {
    const w = !weight ? 1 : weight
    const c = color
    const hex = c === 'blue' ? '#00D' : c === 'red' ? '#F00' : c === 'green' ? '#0F0' : c === 'purple' ? '#9400D3' : '#FF0'
    return `border: ${w}px solid ${hex};`
  },
}