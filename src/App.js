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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const RootStyle = styled("main")(({ theme }) => ({
  margin: "0",
  paddingTop: "100px",
  paddingBottom: "20px",
  maxHeight: "800px",
  backgroundColor: theme.palette.background.default,
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
                  light: "#eceff1",
                  main: "#161C24",
                  dark: "black",
                  contrastText: "#eceff1",
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
