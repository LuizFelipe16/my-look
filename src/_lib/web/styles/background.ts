export type ThemeBgs = {
  path: (path_public: string) => `background-image: url(${string});`
};

export const bgImage: ThemeBgs = {
  path: (path_public: string) => `background-image: url(${path_public});`
};
