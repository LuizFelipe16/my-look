import { HTMLAttributes, ReactNode } from "react";
import { myStyles } from "../MyStyles/Provider";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  style?: string | undefined | any;
  description: string;
  src: string | any;
  h: number;
  seconds: number;
  hUnity?: '%' | 'rem' | 'px';
  scale?: number;
}

export const ImgZoom = (
  {
    description,
    src,
    h,
    hUnity,
    seconds,
    scale,
    style,
    ...rest
  }: ImgProps
) => {
  return (
    <WrapperImgZoom2 h={h} unity={hUnity} seconds={seconds} scale={scale}>
      <img className={`my-card-img-preset-zoom ${style}`} src={src} alt={description} {...rest} />
    </WrapperImgZoom2>
  )
};

type WrapperImgZoom = {
  h: number; 
  seconds: number; 
  scale?: number; 
  unity?: '%' | 'rem' | 'px'; 
  children: ReactNode;
};

const WrapperImgZoom2 = ({ h, unity = 'rem', children, seconds, scale }: WrapperImgZoom) => {
  const WrapperImgZoom = myStyles.create((theme) => ([
    theme.w.fill(),
    theme.h.size(h, unity),
    theme.over.hide('full'),
    theme.position.relative,
    
    theme.myStyles.childClass('my-card-img-preset-zoom', [
      theme.overlap.value(-1),
      `inset: 0;`,
      theme.w.fill(),
      theme.h.fill(),
      theme.effect.filter.objectCover(),
  
      theme.transition.apply(seconds),
    ]),
  
    theme.effect.hover.inOwnChild('my-card-img-preset-zoom', [
      `transform: scale( ${!scale ? `1.1` : scale});`
    ], true)
  ]), 'div', false)

  return (
    <WrapperImgZoom>
      {children}
    </WrapperImgZoom>
  )
};
