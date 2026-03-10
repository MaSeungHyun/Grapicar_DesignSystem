import { useCallback, useState } from "react";
import { THEMES, type ThemeType } from "../theme";

export const useTheme = (defaultTheme: ThemeType = THEMES[1] as ThemeType) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  const handleThemeChange = useCallback((theme: ThemeType) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return { theme, handleThemeChange };
};
