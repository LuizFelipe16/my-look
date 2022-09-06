
export type ThemeOverflow = {
  hide: (axis: 'horizontal' | 'vertical' | 'full') => `overflow-${string}: hidden;` | `overflow: hidden;`;
};

export const over: ThemeOverflow = {
  hide: (axis: 'horizontal' | 'vertical' | 'full') => {
    if (axis === 'horizontal') {
      return `overflow-x: hidden;`
    } else if (axis === 'vertical') {
      return `overflow-y: hidden;`
    } else {
      return `overflow: hidden;`
    }
  },
};
