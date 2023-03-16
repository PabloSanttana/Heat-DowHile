import React, { useState, useContext, createContext, useEffect } from "react";
import { ThemeProvider, useTheme } from "styled-components";

import { theme } from "../theme/theme";

type ThemeTypeProps = "dark" | "light";

type SettingContextProps = {
  changeTheme: (value: ThemeTypeProps) => void;
};

const SettingContext = createContext({} as SettingContextProps);

type SettingProviderProps = {
  children: React.ReactNode;
};

function SettingProvider({ children }: SettingProviderProps) {
  function changeTheme(value: ThemeTypeProps) {
    console.log(value);
  }

  return (
    <SettingContext.Provider
      value={{
        changeTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingContext.Provider>
  );
}

function useSetting() {
  const context = useContext(SettingContext);
  const theme = useTheme();

  return { context, theme };
}

export { SettingProvider, useSetting };
