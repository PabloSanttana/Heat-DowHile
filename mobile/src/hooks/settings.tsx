import React, { useState, useContext, createContext, useCallback } from "react";
import { ThemeProvider } from "styled-components";

import { theme as defaultTheme } from "@src/themes/theme";

type SettingsProviderProps = {
  children: React.ReactNode;
};

type SettingsContextData = {
  changeTheme: (value: PropsTheme) => void;
};

type PropsTheme = "default";

const SettingsContext = createContext({} as SettingsContextData);

function SettingsProvider({ children }: SettingsProviderProps) {
  const [theme, setTheme] = useState<PropsTheme>("default");

  const handleSelectedTheme = useCallback((value: PropsTheme) => {
    const themes = {
      default: defaultTheme,
    };
    return themes[value] || defaultTheme;
  }, []);

  const changeTheme = useCallback((value: PropsTheme) => {
    setTheme(value);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        changeTheme,
      }}
    >
      <ThemeProvider theme={() => handleSelectedTheme(theme)}>
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}

function useSettings() {
  const context = useContext(SettingsContext);
  return context;
}

export { useSettings, SettingsProvider };
