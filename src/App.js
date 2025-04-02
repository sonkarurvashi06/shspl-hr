import React, { createContext, useContext } from "react";
import MainRouter from "./Route/MainRoute";
import { ThemeProvider } from "@mui/material/styles";
import AppTheme from "../src/Theme/AppTheme"; // Import AppTheme

// Create ThemeContext
const ThemeContext = createContext();

// Create a custom hook for easier use of ThemeContext
export const useThemeContext = () => useContext(ThemeContext);

function App() {
  return (
    <ThemeContext.Provider value={AppTheme}>
      <ThemeProvider theme={AppTheme}>
        <MainRouter />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
