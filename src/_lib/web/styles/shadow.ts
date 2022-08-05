import { UNITY_PROPERTY } from "../tools";

export type ThemeShadow = {
  box: any;
};

// box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

export const shadow: ThemeShadow = {
  box: {
    apply: (color: string, { left, top, right, bottom }: any, unity: UNITY_PROPERTY) => {
      return `box-shadow: ${color} ${left}${unity} ${top}${unity} ${right}${unity} ${bottom}${unity};`
    }
  },
};
