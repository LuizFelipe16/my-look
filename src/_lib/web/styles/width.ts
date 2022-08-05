import { mutableSize, UNITY_PROPERTY } from "../tools";

type PropertyWidth = `width: ${string};`

export type ThemeWidth = {
  auto: () => PropertyWidth;
  fullView: () => PropertyWidth;
  fill: () => PropertyWidth;
  size: (multiplier: number, unity?: UNITY_PROPERTY) => PropertyWidth;
  max: (multiplier: number, unity?: UNITY_PROPERTY) => string;
}

export const w: ThemeWidth = {
  auto: () => 'width: auto;',
  fullView: () => 'width: 100vh;',
  fill: () => 'width: 100%;',
  size: (multiplier: number, unity?: UNITY_PROPERTY) => `width: ${mutableSize(multiplier, unity)};`,
  max: (multiplier: number, unity?: UNITY_PROPERTY) => `max-width: ${mutableSize(multiplier, unity)};`,
};
