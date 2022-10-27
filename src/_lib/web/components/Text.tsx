import { HTMLAttributes, ReactNode } from "react";

interface Text extends HTMLAttributes<HTMLParagraphElement> { }

interface Text extends HTMLAttributes<HTMLHeadingElement> { }

interface TextProps extends Text {
  type?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text?: string | number;
  style?: string | undefined | any;
  children?: ReactNode;
}

export const Text = (
  {
    style,
    type = 'p',
    children,
    text,
    ...rest
  }: TextProps
) => {
  if (type === 'p') return (<p className={style} {...rest}>{text}{children}</p>)
  else if (type === 'h1') return (<h1 className={style} {...rest}>{text}{children}</h1>)
  else if (type === 'h2') return (<h2 className={style} {...rest}>{text}{children}</h2>)
  else if (type === 'h3') return (<h3 className={style} {...rest}>{text}{children}</h3>)
  else if (type === 'h4') return (<h4 className={style} {...rest}>{text}{children}</h4>)
  else if (type === 'h5') return (<h5 className={style} {...rest}>{text}{children}</h5>)
  else return <span className={style}>Type not found</span>
};
