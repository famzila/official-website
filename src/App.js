import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import CustomAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import { CssBaseline } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const RootStyle = styled("main")(({ theme }) => ({
  margin: "0",
  paddingTop: "100px",
  paddingBottom: "20px",
  maxHeight: "800px",
  color: theme.palette.text.primary,
}));

function MyApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="resume" element={<Resume />} />
          <Route path="about" element={<About />} />
          {/* <Route path="vlog" element={<Vlog />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
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
                  light: "#455a64",
                  main: "#161C24",
                  dark: "black",
                  contrastText: "#eceff1",
                }),
          },
          secondary: {
            lighter: '#c1d5e0',
            light: '#819ca9',
            main: '#546e7a',
            dark: '#29434e',
            darker: '#1c313a',
            contrastText: '#fff'
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
                  neutral: "#161C24",
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
        <CssBaseline />
        <RootStyle>
          <CustomAppBar
            dark={mode === "light" ? "dark" : "light"}
            toggleColorMode={colorMode.toggleColorMode}
          />
          <MyApp />
          <Footer />
        </RootStyle>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
