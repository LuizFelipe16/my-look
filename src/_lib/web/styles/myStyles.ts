
export type TMyStylesMethods = {
  create: (styleName: string, styles: any, childrenStyles?: any) => CreateStyles;
  class: (className: string, styles: any, childrenStyles?: any) => CreateStyles;
  child: (element: string, styles: any, isClass?: boolean, childrenStyles?: any) => CreateChildStyles;
  childClass: (element: string, styles: any, childrenStyles?: any) => CreateChildStyles;
  transformer: (styles: any) => any,
  global: {
    insert: (styles: any) => string;
  };
  childTag: (tag: string, styles: any) => any;
  tag: (tag: string, styles: any) => any;
  webkit: (tag: string, styles: any) => any;
  selectorProp: (tag: string, styles: any) => any;
  elementProp: (tag: string, styles: any) => any;
  inOwnHasClass: (className: string, styles: any) => any;
}

type StylesProps = string;
type CreateStyles = string;
type CreateChildStyles = string;

const stylesTranformer = (styles: any) => {
  const newStyles = styles as Array<string> | string

  if (Array.isArray(newStyles)) {
    let transformedStyles = ``
    
    newStyles.map(s => {
      transformedStyles = transformedStyles + ` ${s}`
    })

    const ff = String(transformedStyles).replace(/undefined/g, "").replace(/false/g, "").replace(/true/g, "")
    return ff
  } else {
    const tt = String(newStyles).replace(/undefined/g, "").replace(/false/g, "").replace(/true/g, "")
    return tt
  }
};

const addStyle = (styleName: string, styles: any, childrenStyles?: any ): CreateStyles => {
  return `
    .${styleName} { 
      ${stylesTranformer(styles)} 
      ${stylesTranformer(childrenStyles)} 
    }
  ` 
}

const createChildStyle = (element: string, styles: StylesProps, isClass?: boolean, childrenStyles?: StylesProps): CreateChildStyles => {
  if (isClass) {
    return `
      > .${element} { 
        ${stylesTranformer(styles)} 
        ${stylesTranformer(childrenStyles)} 
      }
    `
  }
  
  return `
    > ${element} { 
      ${stylesTranformer(styles)} 
      ${stylesTranformer(childrenStyles)} 
    }
  `
}

const createChildClassStyle = (element: string, styles: StylesProps, childrenStyles?: StylesProps): CreateChildStyles => {
  return `
    > .${element} { 
      ${stylesTranformer(styles)} 
      ${stylesTranformer(childrenStyles)} 
    }
  `
}

const insertInGlobal = (styles: StylesProps): string => {
  return `
    * { 
      ${stylesTranformer(styles)} 
    }
  `
}

const createTagStyle = (tag: string, styles: StylesProps) => {
  return `
    ${tag} { 
      ${stylesTranformer(styles)} 
    }
  ` 
}

const createChildTagStyle = (tag: string, styles: StylesProps) => {
  return `
    > ${tag} { 
      ${stylesTranformer(styles)} 
    }
  ` 
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
  class: addStyle,
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
