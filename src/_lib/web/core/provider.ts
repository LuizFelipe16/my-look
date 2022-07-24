import styled from 'styled-components';
import { isTheme } from '../../../context';
import { AppTheme as TypeAppTheme } from '../../global';
import { styledPresets, ThemeStyle } from '../styles';

const appTheme: TypeAppTheme = isTheme;

export const stylesProvider = {
  create: (createStyles: (theme: ThemeStyle, appTheme: TypeAppTheme) => string, isPage?: boolean) => {
    return styled.div`
      ${isPage && `
        width: 100vw;
        min-height: 100vh;
      `}
      ${createStyles(styledPresets, appTheme)}
    `
  },
};
