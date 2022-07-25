import { DefaultTheme } from 'styled-components';

import { COLORS } from './colors';

export const theme: DefaultTheme = {
  typography: {
    fontFamily: {
      primary: 'Nunito Sans',
      secondary: 'Poppins',
    },
    fontWeight: {
      200: '200',
      300: '300',
      400: '400',
      600: '600',
      700: '700',
    },
  },
  palette: {
    primary: COLORS.violet,
    grey: COLORS.grey,
    error: COLORS.error,
  },
  shape: {
    borderRadius: {
      m: '4px',
      l: '8px',
      xl: '16px',
    },
  },
  transitionDuration: {
    normal: '0.3s',
  },
  spacing: (value = 1) => `${value * 8}px`,
};
