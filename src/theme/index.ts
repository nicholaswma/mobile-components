import type { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#8E7BEA',
    background: '#FFFFFF',
    text: '#000000',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#000000',
    background: '#121212',
    text: '#FFFFFF',
  },
};

export type ThemeType = 'light' | 'dark';

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
