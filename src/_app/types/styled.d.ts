import 'styled-components';

declare module 'styled-components' {
  type ThemeType = any

  export interface DefaultTheme extends ThemeType {}
}