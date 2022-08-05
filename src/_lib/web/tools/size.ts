import { appVariables } from "../../../_app";

export type UNITY_PROPERTY = 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';

export const mutableSize = (multiplier: number, unity?: UNITY_PROPERTY) => {
  if (unity) return `${size(multiplier)}${unity}`
  return styleSize(multiplier)
}

export const size = (multiplier: number) => multiplier * appVariables.size.MULTIPLIER;

export const styleSize = (multiplier: number) => `${multiplier * appVariables.size.MULTIPLIER}${appVariables.size.UNITY}`
