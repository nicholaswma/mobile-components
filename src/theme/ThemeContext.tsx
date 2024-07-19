import React, {
  createContext,
  useState,
  useContext,
  type ReactNode,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme, type ThemeType } from './index';

interface ThemeContextType {
  themeType: ThemeType;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  theme?: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme = 'light',
}) => {
  const [themeType, setThemeType] = useState<ThemeType>(theme);

  const toggleTheme = () => {
    setThemeType((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
