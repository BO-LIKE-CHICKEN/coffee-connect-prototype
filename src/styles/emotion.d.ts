import '@emotion/react';
import { theme } from './theme';

type TTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends TTheme {}
}
