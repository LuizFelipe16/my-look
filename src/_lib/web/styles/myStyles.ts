import { isArray } from "../../global";

export type MyStyles = {
  create: (styleName: string, styles: any, childrenStyles?: any) => CreateStyles,
  child: (element: string, styles: any, isClass?: boolean, childrenStyles?: any) => CreateChildStyles,
  childClass: (element: string, styles: any, childrenStyles?: any) => CreateChildStyles,
  transformer: (styles: any) => CreateStyles,
}

type StylesProps = string;
type CreateStyles = `.${string} { ${StylesProps} }`
type CreateChildStyles = `> .${string} { ${any} ${any} }` | `> ${string} { ${any} ${any} }`

const stylesTranformer = (styles: any) => {
  const transformer = !isArray(styles) ? styles : `${styles?.map((s: any) => `${s}`)}`?.replace(/,/g, "\n")
  return transformer;
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

export const myStyles: MyStyles = {
  create: addStyle,
  child: createChildStyle,
  childClass: createChildClassStyle,
  transformer: stylesTranformer,
}

