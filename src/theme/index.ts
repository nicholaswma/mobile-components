import type { DefaultTheme } from 'styled-components/native';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#8E7BEA',
    background: '#FFFFFF',
    text: '#000000',
    inputField: '#A3A3A3',
    fail: '#ff1a1a',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#8E7BEA',
    background: '#121212',
    text: '#FFFFFF',
    inputField: '#A3A3A3',
    fail: '#ff1a1a',
  },
};

export type ThemeType = 'light' | 'dark';

export const theme = {
  light: lightTheme,
  dark: darkTheme,
};
