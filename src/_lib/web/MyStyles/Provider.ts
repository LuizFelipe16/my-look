import styled, { createGlobalStyle, GlobalStyleComponent } from 'styled-components';
import { isTheme } from 'context';
import { AppTheme as TypeAppTheme } from '../../global';
import { ThemeStyle } from '../styles';
import { myStylesPresets } from '../styles/myStylesPresets';

const appTheme: TypeAppTheme = isTheme;

type ComponentTypeStyle = 'div' | 'aside' | 'article' | 'header' | 'nav' | 'img' | 'span' | 'section' | 'h1' | 'p';

type XComponents = 'a' | 'button';

export const myStyles = {
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
    create: (createStyles: (theme: ThemeStyle, props: any) => any, componentType: ComponentTypeStyle) => {
      return styled[componentType]`
        ${({ theme: props }) => myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, props))}
      `
    },
    createPage: (createStyles: (theme: ThemeStyle, props: any) => any, componentType: ComponentTypeStyle, isPage?: boolean) => {
      return styled[componentType]`
        ${({ theme: props }) => `
            ${isPage ? `
            .page {
              width: 100vw;
              min-height: 100vh;
              ${myStylesPresets.column.centerStart}
              ${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, props))}
            }
          ` : `${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets, props))}`}
        `}
      `
    },
  },
  global: {
    create: (createStyles: (theme: ThemeStyle) => any): { MyStylesGlobal: GlobalStyleComponent<any, any> } => {
      const MyStylesGlobal = createGlobalStyle`
        ${myStylesPresets.myStyles.transformer(createStyles(myStylesPresets))}

        div.my-center-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        div.my-gap-1 {
          gap: 1rem;
        }

        div.my-gap-0_5 {
          gap: 0.5rem;
        }
      `

      return { MyStylesGlobal }
    }
  }
};
