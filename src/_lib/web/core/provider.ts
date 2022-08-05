import styled from 'styled-components';
import { isTheme } from '../../../context';
import { AppTheme as TypeAppTheme } from '../../global';
import { myStylesPresets, ThemeStyle } from '../styles';

const appTheme: TypeAppTheme = isTheme;

type ComponentTypeStyle = 'div' | 'aside' | 'article' | 'header' | 'nav' | 'img' | 'span' | 'section' | 'h1' | 'p'
 
type XComponents = 'li' | 'ul' | 'tr' | 'thead' | 'tbody' | 'table' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a'

export const myStylesProvider = {
  create: (createStyles: (theme: ThemeStyle, appTheme: TypeAppTheme) => any, componentType: ComponentTypeStyle, isPage?: boolean) => {
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
    return `
      ${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, appTheme))}
    `
  },
};
