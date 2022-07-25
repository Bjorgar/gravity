import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        35: string;
        50: string;
        70: string;
        90: string;
      };
      grey: {
        0: string;
        40: string;
        50: string;
        70: string;
        100: string;
      };
      error: string;
    };
    typography: {
      fontFamily: {
        primary: string;
        secondary: string;
      };
      fontWeight: {
        200: string;
        300: string;
        400: string;
        600: string;
        700: string;
      }
    };
    shape: {
      borderRadius: {
        m: string;
        l: string;
        xl: string;
      };
    };
    transitionDuration: {
      normal: string;
    };
    spacing: (value?: number) => string;
  }
}
