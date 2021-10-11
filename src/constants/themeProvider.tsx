import React, { useState, createContext, useEffect, useContext } from "react";
import { useColorScheme } from "react-native-appearance";
import { lightColors, darkColors } from "../constants/colors";

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: () => {},
})

export const ThemeProvider = (props) => {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme == "dark");

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: string) => setIsDark(scheme === "dark")
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);