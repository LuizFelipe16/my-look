import styled from 'styled-components';
import { styledPresets, ThemeStyle } from '../';

export const stylesProvider = {
  create: (createStyles: (theme: ThemeStyle) => string, isPage?: boolean) => {
    return styled.div`
      ${isPage && `
        width: 100vw;
        min-height: 100vh;
      `}
      ${createStyles(styledPresets)}
    `
  },
};
