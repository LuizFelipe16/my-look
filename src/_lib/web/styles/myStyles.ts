import { isArray } from "../../global";

export type TMyStylesMethods = {
  create: (styleName: string, styles: any, childrenStyles?: any) => CreateStyles;
  child: (element: string, styles: any, isClass?: boolean, childrenStyles?: any) => CreateChildStyles;
  childClass: (element: string, styles: any, childrenStyles?: any) => CreateChildStyles;
  transformer: (styles: any) => CreateStyles,
  global: {
    insert: (styles: any) => `* { ${any} }`;
  };
  childTag: (tag: string, styles: any) => any;
  tag: (tag: string, styles: any) => any;
  webkit: (tag: string, styles: any) => any;
  selectorProp: (tag: string, styles: any) => any;
  elementProp: (tag: string, styles: any) => any;
  inOwnHasClass: (className: string, styles: any) => any;
}

type StylesProps = string;
type CreateStyles = `.${string} { ${StylesProps} }`
type CreateChildStyles = `> .${string} { ${any} ${any} }` | `> ${string} { ${any} ${any} }`

const stylesTranformer = (styles: any) => {
  const transformer = !isArray(styles) 
    ? styles 
    // : `${styles?.map((s: any) => `${s}`)}`?.replace(/,/g, "\n")
    : `${styles?.map((s: any) => `${s}`)}`?.split(",").join(" ").split('undefined')

  const newStyles = !isArray(styles) ? transformer : `${`${`${transformer}`.split('false')}`.split('true')}`
  
  return newStyles
};

const addStyle = (styleName: string, styles: any, childrenStyles?: any ): CreateStyles => {
  return `.${styleName} { ${stylesTranformer(styles)} ${stylesTranformer(childrenStyles)} }` 
}

const createChildStyle = (element: string, styles: StylesProps, isClass?: boolean, childrenStyles?: StylesProps): CreateChildStyles => {
  if (isClass) return `> .${element} { ${stylesTranformer(styles)} ${stylesTranformer(childrenStyles)} }`
  return `> ${element} { ${stylesTranformer(styles)} ${stylesTranformer(childrenStyles)} }`
}

const createChildClassStyle = (element: string, styles: StylesProps, childrenStyles?: StylesProps): CreateChildStyles => {
  return `> .${element} { ${stylesTranformer(styles)} ${stylesTranformer(childrenStyles)} }`
}

const insertInGlobal = (styles: StylesProps): `* { ${any} }` => {
  return `* { ${stylesTranformer(styles)} }`
}

const createTagStyle = (tag: string, styles: StylesProps) => {
  return `${tag} { ${stylesTranformer(styles)} }` 
}

const createChildTagStyle = (tag: string, styles: StylesProps) => {
  return `> ${tag} { ${stylesTranformer(styles)} }` 
}

const createWebkitStyle = (webkit: string, styles: StylesProps) => {
  return `::-webkit-${webkit} { ${stylesTranformer(styles)} }` 
}

const createExtraStyle = (propStyle: string, styles: StylesProps) => {
  return `*::${propStyle} { ${stylesTranformer(styles)} }` 
}

const createPerPropStyle = (propName: string, styles: StylesProps) => {
  return `[${propName}] { ${stylesTranformer(styles)} }` 
}

const inOwnClass = (className: string, styles: StylesProps) => {
  return `
    &.${className} {
      ${stylesTranformer(styles)}
    }
  `
}

export const myStylesMethods: TMyStylesMethods = {
  create: addStyle,
  child: createChildStyle,
  childClass: createChildClassStyle,
  childTag: createChildTagStyle,
  transformer: stylesTranformer,
  global: {
    insert: insertInGlobal,
  },
  tag: createTagStyle,
  webkit: createWebkitStyle,
  selectorProp: createExtraStyle,
  elementProp: createPerPropStyle,
  inOwnHasClass: inOwnClass
}
