import { HTMLAttributes, ReactNode } from "react";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  style?: string | undefined | any;
  description: string;
  src: string | any;
}

export const Img = (
  {
    description,
    src,
    style,
    ...rest
  }: ImgProps
) => {
  return (
    <img className={style} src={src} alt={description} {...rest} />
  )
};
