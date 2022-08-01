import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { CSSProperties } from "styled-components";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  onPress: MouseEventHandler<HTMLButtonElement>;

  text?: string;
  isTextRight?: boolean;

  w?: string | number;
  h?: string | number;
}

export const Button = (
  {
    children,
    style,
    onPress,
    text,
    isTextRight,
    w,
    h,
    ...rest
  }: ButtonProps
) => {
  const inlineStylesComponent: CSSProperties = { width: `${w}`, height: `${h}` }

  return (
    <button className={style} style={inlineStylesComponent} onClick={onPress} {...rest}>
      {isTextRight ? (
        <>
          {children}
          {text}
        </>
      ) : (
        <>
          {text}
          {children}
        </>
      )}
    </button>
  )
};
