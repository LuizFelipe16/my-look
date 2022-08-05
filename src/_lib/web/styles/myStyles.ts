import { isArray } from "../../global";

export type MyStyles = {
  create: (styleName: string, styles: any, childrenStyles?: any) => CreateStyles,
  child: (element: string, styles: any, isClass?: boolean) => CreateChildStyles,
  transformer: (styles: any) => CreateStyles,
}

type StylesProps = string;
type CreateStyles = `.${string} { ${StylesProps} }`
type CreateChildStyles = `> .${string} { ${StylesProps} }` | `> ${string} { ${StylesProps} }`

const stylesTranformer = (styles: any) => {
  const transformer = !isArray(styles) ? styles : `${styles?.map((s: any) => `${s}`)}`?.replace(/,/g, "\n");
  return transformer;
};

const addStyle = (styleName: string, styles: any, childrenStyles?: any ): CreateStyles => {
  return `.${styleName} { ${stylesTranformer(styles)} ${stylesTranformer(childrenStyles)} }` 
}

const createChildStyle = (element: string, styles: any, isClass?: boolean): CreateChildStyles => {
  if (isClass) return `> .${element} { ${stylesTranformer(styles)} }`
  return `> ${element} { ${stylesTranformer(styles)} }`
}

export const myStyles: MyStyles = {
  create: addStyle,
  child: createChildStyle,
  transformer: stylesTranformer,
}

