import { Container, CssBaseline } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import React, { useState } from "react";
import Header from "./Header";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Route } from "react-router";
import HomePage from "../../features/home/HomePage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

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
        <Route exact path="/catalog" component={Catalog} />
        <Route path="/catalog/:id" component={ProductDetails} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
