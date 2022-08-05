import { appVariables } from "../../../_app/app";
import { styleSize } from "../tools";

type FontWeight = `font-weight: ${number};`
type FontStyle = `font-style: ${string};`

type FontFamily = `font-family: ${string};`

type WeightTypes = 'th' | 'rg' | 'md' | 'sb' | 'bl' | 'xb'

export type ThemeFont = {
  size: Function;
  apply: (w: WeightTypes, multiplier: number, type: string, color: string) => string;

  typography: {
    title: FontFamily;
    text: FontFamily;
  };

  weight: {
    th: FontWeight; // NOTE thin
    rg: FontWeight; // NOTE regular
    md: FontWeight; // NOTE medium
    sb: FontWeight; // NOTE semi-bold
    bl: FontWeight; // NOTE bold
    xb: FontWeight; // NOTE extra-bold
  };

  style: {
    italic: FontStyle;
  };

  line: (value: number) => string;
};

type FontWeights = { th: number, rg: number, md: number, sb: number, bl: number, xb: number }

const fontWeights: FontWeights = {
  ['th']: 100,
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
    title: `font-family: "${appVariables.typography.title}", sans-serif;`,
    text: `font-family: "${appVariables.typography.text}", sans-serif;`,
  },

  weight: {
    th: `font-weight: ${fontWeights['th']};`,
    rg: `font-weight: ${fontWeights['rg']};`,
    md: `font-weight: ${fontWeights['md']};`,
    sb: `font-weight: ${fontWeights['sb']};`,
    bl: `font-weight: ${fontWeights['bl']};`,
    xb: `font-weight: ${fontWeights['xb']};`,
  },

  style: {
    italic: 'font-style: italic;',
  },

  line: (v: number) => `line-height: ${v};`,
};
