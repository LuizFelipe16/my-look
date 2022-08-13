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

  type?: 'button' | 'reset' | 'submit';
}

export const Button = (
  {
    children,
    style,
    onPress,
    text,
    isTextRight,
    type = 'button',
    w,
    h,
    ...rest
  }: ButtonProps
) => {
  const inlineStylesComponent: CSSProperties = { width: `${w}`, height: `${h}` }

  return (
    <button type={type} className={style} style={inlineStylesComponent} onClick={onPress} {...rest}>
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
