import { createContext, useState, useContext } from 'react';
import { onUpdate } from '../_lib/global';

type Theme = 'dark' | 'light';

type ThemeProviderData = {
  theme: Theme;
  getTheme: () => Theme;
  changeTheme: () => void;
  setThemeDark: () => void;
  setThemeLight: () => void;
};

const AppTheme = createContext({} as ThemeProviderData);

export let isTheme: Theme = 'dark';

const handleTheme = (t: Theme) => isTheme = t;

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState<Theme>('dark');
  
  const changeTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const getTheme = () => theme;
  const setThemeDark = () => setTheme('dark');
  const setThemeLight = () => setTheme('light');

  onUpdate(() => {
    handleTheme(theme);
    console.log({ p: theme, isTheme })
  }, [theme]);

  return (
    <AppTheme.Provider value={{
      theme,
      changeTheme,
      getTheme,
      setThemeDark,
      setThemeLight,
    }}>
      {children}
    </AppTheme.Provider>
  )
}

export const useTheme = () => useContext(AppTheme);
