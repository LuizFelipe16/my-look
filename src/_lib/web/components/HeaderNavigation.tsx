import { HTMLAttributes, ReactNode } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  style?: string | undefined | any;
  children?: ReactNode;
}

export const HeaderNavigation = (
  {
    children,
    style,
    ...rest
  }: HeaderProps
) => {
  return (
    <header className={style} {...rest}>
      {children}
    </header>
  )
};
