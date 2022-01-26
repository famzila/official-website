import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";
import { alpha } from "@mui/material";

import CustomAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const RootStyle = styled("main")(({ theme }) => ({
  margin: "0",
  padding: "0",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));

function MyApp() {
  return (
    <>
      <Home />
      <Footer />
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            ...(mode === "light"
              ? {
                  light: "#455a64",
                  main: "#37474f",
                  dark: "#263238",
                  contrastText: "#eceff1",
                }
              : {
                  light: "#eceff1",
                  main: "#161C24",
                  dark: "black",
                }),
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[800],
                  secondary: grey[300],
                  disabled: grey[500],
                }
              : {
                  primary: grey[200],
                  secondary: grey[300],
                  disabled: grey[500],
                }),
          },
          background: {
            ...(mode === "light"
              ? {
                  paper: "#161C24",
                  default: "#eceff1",
                  neutral: grey[200],
                }
              : {
                  paper: "#161C24",
                  default: "#161C24",
                  neutral: "black",
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RootStyle>
          <CustomAppBar
            dark={mode === "light" ? "dark" : "light"}
            toggleColorMode={colorMode.toggleColorMode}
          />
          <MyApp />
        </RootStyle>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
