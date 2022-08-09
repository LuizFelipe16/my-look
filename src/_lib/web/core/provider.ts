import styled from 'styled-components';
import { isTheme } from '../../../context';
import { AppTheme as TypeAppTheme } from '../../global';
import { myStylesPresets, ThemeStyle } from '../styles';

const appTheme: TypeAppTheme = isTheme;

type ComponentTypeStyle = 'div' | 'aside' | 'article' | 'header' | 'nav' | 'img' | 'span' | 'section' | 'h1' | 'p'
 
type XComponents = 'a' | 'button'

export const myStylesProvider = {
  create: (createStyles: (theme: ThemeStyle, appTheme: TypeAppTheme) => any, componentType: ComponentTypeStyle, isPage?: boolean) => {
    // criação de uma folha de estilo que pode ser incrementada
    return styled[componentType]`
      ${isPage ? `
        .page {
          width: 100vw;
          min-height: 100vh;
          ${myStylesPresets.column.centerStart}
          ${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, appTheme))}
        }
      ` : `${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, appTheme))}`}
    `
  },
  style: (createStyles: (theme: ThemeStyle, appTheme: TypeAppTheme) => any) => {
    // criação de um estilo simples que deve ser inserido em um create
    return `
      ${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, appTheme))}
    `
  },
  mutate: {
    insert: (createStyles: (theme: ThemeStyle, props: any) => any, componentType: ComponentTypeStyle) => {

    },
    create: () => null,
  }
};

// const WrapperImgZoom2 = ({ h, unity, children, seconds, scale }: WrapperImgZoom) => {
//   const WrapperImgZoom = myStylesProvider.create((theme) => ([
//     theme.w.fill(),
//     theme.h.size(h, unity),
//     theme.over.hide,
//     theme.position.relative,
    
//     theme.myStyles.childClass('my-card-img-preset-zoom', [
//       theme.overlap.value(-1),
//       `inset: 0;`,
//       theme.w.fill(),
//       theme.h.fill(),
//       theme.effect.filter.objectCover(),
  
//       theme.transition.apply(seconds),
//     ]),
  
//     theme.effect.hover.inOwnChild('my-card-img-preset-zoom', [
//       `transform: scale( ${!scale ? `1.1` : scale});`
//     ], true)
//   ]), 'div', false)

//   return (
//     <WrapperImgZoom>
//       {children}
//     </WrapperImgZoom>
//   )
// };
