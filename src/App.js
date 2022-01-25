import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";

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
    <Box
      component="section"
      sx={{
        padding: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "560px",
        backgroundColor: "background.default",
      }}
    >
      <Home />
      <Footer />
    </Box>
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
            ...grey,
          },
          text: {
            ...(mode === "light"
              ? {
                  primary: grey[300],
                  secondary: grey[300],
                  disabled: grey[500],
                }
              : {
                  primary: grey[300],
                  secondary: grey[300],
                  disabled: grey[500],
                }),
          },
          background: {
            ...(mode === "light"
              ? {
                  paper: "#fff",
                  default: "#fff",
                  neutral: grey[200],
                }
              : {
                  paper: "#292E3C",
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
