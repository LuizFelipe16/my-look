import { appVariables } from "../app";
import { styleSize } from "../tools";

type FontWeight = `font-weight: ${number};`
type FontStyle = `font-style: ${string};`

type FontFamily = `font-family: ${string};`

export type ThemeFont = {
  size: Function,

  typography: {
    title: FontFamily,
    text: FontFamily,
  },

  weight: {
    th: FontWeight, // NOTE thin
    rg: FontWeight, // NOTE regular
    md: FontWeight, // NOTE medium
    sb: FontWeight, // NOTE semi-bold
    bl: FontWeight, // NOTE bold
    xb: FontWeight, // NOTE extra-bold
  },

  style: {
    italic: FontStyle,
  }
}

export const font: ThemeFont = {
  size: (multiplier: number) => `font-size: ${styleSize(multiplier)};`,

  typography: {
    title: `font-family: ${appVariables.typography.title};`,
    text: `font-family: ${appVariables.typography.text};`,
  },

  weight: {
    th: 'font-weight: 100;',
    rg: 'font-weight: 400;',
    md: 'font-weight: 500;',
    sb: 'font-weight: 600;',
    bl: 'font-weight: 800;',
    xb: 'font-weight: 900;',
  },

  style: {
    italic: 'font-style: italic;',
  }
};
