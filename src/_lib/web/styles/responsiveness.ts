
export type ThemeResponsiveness = {
  media: (styles: string, min: number, max: number) => string;
  phone: (styles: string) => string;
};

export const responsiveness: ThemeResponsiveness = {
  media: (styles: string, min: number, max: number) => `@media (min-width: ${min}px) and (max-width: ${max}px) { ${styles} }`,
  phone: (styles: string) => `@media (min-width: 100px) and (max-width: 400px) { ${styles} }`
};
