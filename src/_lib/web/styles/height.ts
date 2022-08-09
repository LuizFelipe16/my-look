import { mutableSize, styleSize, UNITY_PROPERTY } from "../tools";

type PropertyHeight = `height: ${string};`

export type ThemeHeight = {
  fullView: () => PropertyHeight;
  fill: () => PropertyHeight;
  auto: () => PropertyHeight;
  size: (multiplier: number, unity?: UNITY_PROPERTY) => PropertyHeight,
  min: (multiplier: number, unity?: UNITY_PROPERTY) => string,
  max: (multiplier: number, unity?: UNITY_PROPERTY) => string,
}

export const h: ThemeHeight = {
  fullView: () => 'height: 100vh;',
  fill: () => 'height: 100%;',
  auto: () => 'height: auto !important;',
  size: (multiplier: number, unity?: UNITY_PROPERTY) => `height: ${mutableSize(multiplier, unity)};`,
  min: (multiplier: number, unity?: UNITY_PROPERTY) => `min-height: ${mutableSize(multiplier, unity)};`,
  max: (multiplier: number, unity?: UNITY_PROPERTY) => `max-height: ${mutableSize(multiplier, unity)};`,
};
