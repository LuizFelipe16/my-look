import { HTMLAttributes, ReactNode } from "react";
import { CSSProperties } from "styled-components";

interface ViewProps extends HTMLAttributes<HTMLDivElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  type?: 'div' | 'main';

  w?: string | number;
  h?: string | number;
}

export const View = (
  {
    children,
    style,
    type = 'div',
    w,
    h,
    ...rest
  }: ViewProps
) => {
  const inlineStylesComponent: CSSProperties = { width: `${w}`, height: `${h}` }

  if (type === 'main') {
    return (
      <main className={style} style={inlineStylesComponent} {...rest}>
        {children}
      </main>
    )
  } else {
    return (
      <div className={style} style={inlineStylesComponent} {...rest}>
        {children}
      </div>
    )
  }
};
