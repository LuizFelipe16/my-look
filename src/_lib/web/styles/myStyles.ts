
export type TMyStylesMethods = {
  create: (styleName: string, styles: any, childrenStyles?: any) => CreateStyles;
  class: (className: string, styles: any, childrenStyles?: any) => CreateStyles;
  child: (element: string, styles: any, isClass?: boolean, childrenStyles?: any) => CreateChildStyles;
  childClass: (element: string, styles: any, childrenStyles?: any) => CreateChildStyles;
  childTag: (tag: TTag, styles: any, childrenStyles?: any) => CreateChildStyles;
  transformer: (styles: any) => any,
  global: {
    insert: (styles: any) => string;
  };
  tag: (tag: TTag | Array<TTag>, styles: any, childrenStyles?: any) => any;
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

type TTag = 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5' | 'button' | 'div' | 'footer' | 'aside' | 'hr' | 'a';

const createChildTagStyle = (tag: TTag, styles: StylesProps, childrenStyles?: StylesProps): CreateChildStyles => {
  return `
    > ${tag} {
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

const getArrayStyles = (keys: Array<string>, styles: StylesProps, childrenStyles?: StylesProps) => {
  const stylesResult = keys?.map(keyStyle => `
    ${keyStyle} {
      ${stylesTranformer(styles)}
      ${stylesTranformer(childrenStyles)}
    }
  `)

  let result = ''

  stylesResult.forEach(s => { result = result + s })

  return result
}

const createTagStyle = (tag: TTag | Array<TTag>, styles: StylesProps, childrenStyles?: StylesProps) => {
  if (Array.isArray(tag)) {
    console.log(getArrayStyles(tag, styles, childrenStyles))
  }

  return `
    ${tag} {
      ${stylesTranformer(styles)}
      ${stylesTranformer(childrenStyles)}
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
