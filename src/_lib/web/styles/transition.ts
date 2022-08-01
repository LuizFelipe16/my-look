export type ThemeTransition = {
  apply: (seconds: number) => `transition: ${number}s;`
}

export const transition: ThemeTransition = {
  apply: (seconds: number) => `transition: ${seconds}s;`
}