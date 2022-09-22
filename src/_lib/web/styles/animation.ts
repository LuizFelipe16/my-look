import { myStylesMethods } from "./myStyles";

type Transformers = {
  scale: (value: number) => `scale(${number})`,
  rotate: (degrees: number) => `rotate(${number}deg)`,
  translate: {
    x: (value: number) => `translateX(${number}px)`,
    y: (value: number) => `translateY(${number}px)`,
  },
}

export type ThemeAnimation = {
  apply: (name: string, seconds: number, type: 'infinite' | 'initial') => `animation: ${string} ${number}s ${string};`;
  define: {
    full: (name: string, stylesInit: any, stylesMiddle: any, stylesFinal: any) => string;
  };
  transform: {
    transformers: Transformers,
    apply: (definitions: (t: Transformers) => any) => `transform: ${string};`
  };
};

// @keyframes scale_mutation_effect {
//   0% { transform: scale(1.0) rotate(0deg); }
//   25% { transform: scale(0.9) rotate(10deg); }
//   50% { transform: scale(1.0) rotate(00deg);}
//   75% { transform: scale(0.9) rotate(-10deg); }
//   100% { transform: scale(1.0) rotate(0deg); }
// }

const transformers: Transformers = {
  scale: (n: number) => `scale(${n})`,
  rotate: (degrees: number) => `rotate(${degrees}deg)`,
  translate: {
    x: (v: number) => `translateX(${v}px)`,
    y: (v: number) => `translateY(${v}px)`,
  },
}

export const animation: ThemeAnimation = {
  apply: (n: string, s: number, type = 'infinite') => `animation: ${n} ${s}s ${type};`,
  define: {
    full: (n: string, init: any, middle: any, final: any) => `
      @keyframes ${n} {
        0% { 
          ${myStylesMethods.transformer(init)} 
        }
        25% { 
          ${myStylesMethods.transformer(middle)} 
        }
        50% { 
          ${myStylesMethods.transformer(init)} 
        }
        75% { 
          ${myStylesMethods.transformer(final)} 
        }
        100% { 
          ${myStylesMethods.transformer(init)} 
        }
      }
    `
  },
  transform: {
    transformers,
    apply: (definitions: (t: Transformers) => any) => `transform: ${myStylesMethods.transformer(definitions(transformers))};`
   }
};
