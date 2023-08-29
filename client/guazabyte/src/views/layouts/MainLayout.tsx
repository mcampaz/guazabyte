import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import "@fontsource-variable/fira-code";
import React from "react";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },

  typography: {
    fontFamily: ["Fira Code Variable", "sans-serif"].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 1024,
      lg: 1280,
      xl: 1516,
    },
  },

  components: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiTypography: {
      fontFamily: ["Fira Code Variable", "sans-serif"].join(", "),
      defaultProps: {
        variantMapping: {
          h1: "h2",
          h2: "h2",
          h3: "h2",
          h4: "h2",
          h5: "h2",
          h6: "h2",
          subtitle1: "h2",
          subtitle2: "h2",
          body1: "span",
          body2: "span",
        },
      },
    },
  },
});

let darkThemeGlobal = responsiveFontSizes(darkTheme);

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={darkThemeGlobal}>
      <CssBaseline />
      <ResponsiveAppBar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default MainLayout;

