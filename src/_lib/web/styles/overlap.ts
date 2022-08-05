type PropertyOverlap = `z-index: ${number};`

export type ThemeOverlap = {
  value: (v: number) => PropertyOverlap,
}

export const overlap: ThemeOverlap = {
  value: (v: number) => `z-index: ${v};`,
};
