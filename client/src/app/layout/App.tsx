import { Container, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import React, { useState } from "react";
import Header from "./Header";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palettetype = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palettetype,
      background: {
        default: palettetype === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
