import { appVariables } from "../../../_app";

export const size = (multiplier: number) => multiplier * appVariables.size.MULTIPLIER;

export const styleSize = (multiplier: number) => `${multiplier * appVariables.size.MULTIPLIER}${appVariables.size.UNITY}`
