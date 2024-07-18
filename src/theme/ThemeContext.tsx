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

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeType, setThemeType] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setThemeType((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const theme = themeType === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeType, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
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
