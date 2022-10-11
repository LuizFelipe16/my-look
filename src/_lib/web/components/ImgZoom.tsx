import { HTMLAttributes, ReactNode } from "react";
import { myStyles } from "../MyStyles/Provider";

interface ImgProps extends HTMLAttributes<HTMLImageElement> {
  style?: string | undefined | any;
  description: string;
  src: string | any;
  h: number;
  w?: number;
  seconds: number;
  rounded?: number;
  hUnity?: '%' | 'rem' | 'px';
  scale?: number;
  onPress?: () => void;
}

export const ImgZoom = (
  {
    description,
    src,
    h,
    w,
    hUnity,
    seconds,
    scale,
    rounded,
    style,
    onPress,
    ...rest
  }: ImgProps
) => {
  return (
    <WrapperImgZoom2 h={h} w={w} unity={hUnity} seconds={seconds} scale={scale} rounded={rounded} onPress={onPress}>
      <img className={`my-card-img-preset-zoom ${style}`} src={src} alt={description} {...rest} />
    </WrapperImgZoom2>
  )
};

type WrapperImgZoom = {
  h: number;
  w?: number;
  seconds: number; 
  rounded?: number; 
  scale?: number; 
  unity?: '%' | 'rem' | 'px'; 
  children: ReactNode;
  onPress?: () => void;
};

const WrapperImgZoom2 = ({ h, w, unity = 'rem', children, seconds, scale, rounded, onPress }: WrapperImgZoom) => {
  const WrapperImgZoom = myStyles.create((theme) => ([
    theme.compare.prop(!!w, theme.w.size(w || 100, unity || '%'), theme.w.fill()),
    theme.compare.prop(!!onPress, theme.presets.cursor('pointer'), ''),
    theme.h.size(h, unity),
    theme.over.hide('full'),
    theme.position.relative,
    theme.border.rounded.size(rounded || 0),
    
    theme.myStyles.childClass('my-card-img-preset-zoom', [
      // theme.overlap.value(-1),
      `inset: 0;`,
      theme.w.fill(),
      theme.h.fill(),
      theme.effect.filter.objectCover(),
      theme.border.rounded.size(rounded || 0),
  
      theme.transition.apply(seconds),
    ]),
  
    theme.effect.hover.inOwnChild('my-card-img-preset-zoom', [
      `transform: scale( ${!scale ? `1.1` : scale});`
    ], true)
  ]), 'div', false)

  return (
    <WrapperImgZoom onClick={onPress}>
      {children}
    </WrapperImgZoom>
  )
};
