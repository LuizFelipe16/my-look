import { appVariables } from "../../../_app/app";
import { styleSize } from "../tools";

type FontWeight = `font-weight: ${number};`
type FontStyle = `font-style: ${string};`

type FontFamily = `font-family: ${string};`

type WeightTypes = 'th' | 'sr' | 'rg' | 'md' | 'sb' | 'bl' | 'xb'

export type ThemeFont = {
  size: Function;
  apply: (w: WeightTypes, multiplier: number, type: string, color: string) => string;

  typography: {
    title: FontFamily;
    text: FontFamily;
  };

  weight: {
    th: FontWeight; // NOTE thin
    sr: FontWeight; // NOTE semi-regular
    rg: FontWeight; // NOTE regular
    md: FontWeight; // NOTE medium
    sb: FontWeight; // NOTE semi-bold
    bl: FontWeight; // NOTE bold
    xb: FontWeight; // NOTE extra-bold
  };

  style: {
    italic: FontStyle;
    underline: string;
    alignCenter: string;
  };

  line: (value: number) => string;
  spacing: (value: number) => string;
};

type FontWeights = { th: number, sr: number, rg: number, md: number, sb: number, bl: number, xb: number }

const fontWeights: FontWeights = {
  ['th']: 100,
  ['sr']: 300,
  ['rg']: 400,
  ['md']: 500,
  ['sb']: 600,
  ['bl']: 800,
  ['xb']: 900,
}

export const font: ThemeFont = {
  size: (multiplier: number) => `font-size: ${styleSize(multiplier)};`,

  apply: (w: WeightTypes, multiplier: number, type: string, color: string) => {
    return `${type} color: ${color}; font-size: ${styleSize(multiplier)}; font-weight: ${fontWeights[w]};`
  }, 

  typography: {
    title: `font-family: "${appVariables.typography.title}";`,
    text: `font-family: "${appVariables.typography.text}";`,
  },

  weight: {
    th: `font-weight: ${fontWeights['th']};`,
    sr: `font-weight: ${fontWeights['sr']};`,
    rg: `font-weight: ${fontWeights['rg']};`,
    md: `font-weight: ${fontWeights['md']};`,
    sb: `font-weight: ${fontWeights['sb']};`,
    bl: `font-weight: ${fontWeights['bl']};`,
    xb: `font-weight: ${fontWeights['xb']};`,
  },

  style: {
    italic: 'font-style: italic;',
    underline: 'text-decoration: underline;',
    alignCenter: 'text-align: center;',
  },

  line: (v: number) => `line-height: ${v};`,
  spacing: (v: number) => `letter-spacing: ${v}px;`,
};
