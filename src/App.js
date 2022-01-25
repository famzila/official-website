import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CustomAppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      component="main"
      sx={{
        margin: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        minHeight: "560px",
      }}
    >
      <Home />
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
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CustomAppBar
          dark={mode === "light" ? "dark" : "light"}
          toggleColorMode={colorMode.toggleColorMode}
        />
        <MyApp />
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
