import { useContext } from "react";
import { Theme, LOCAL_sTORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_sTORAGE_THEME_KEY, newTheme);
  };
  return { theme, toggleTheme };
}
