import { createTheme, PaletteOptions } from "@mui/material/styles";

// Extend the PaletteOptions type to include whiteBg
interface CustomPaletteOptions extends PaletteOptions {
  whiteBg?: {
    500: string;
  };
}

// Create the theme using the extended type
const theme = createTheme({
  palette: {
    primary: {
      main: "#0359E0",
      900: "#00112C",
      800: "#012359",
      700: "#013586",
      600: "#0247B3",
      400: "#3278E5",
      300: "#6298EB",
      200: "#92B7F1",
      100: "#C2D7F7",
      50: "#F2F6FD",
    },
    secondary: {
      main: "#03C7E0",
      900: "#00272C",
      800: "#014F59",
      700: "#017786",
      600: "#029FB3",
      400: "#32D1E5",
      300: "#62DCEB",
      200: "#92E6F1",
      100: "#C2F1F7",
      50: "#F2FCFD",
    },
    warning: {
      main: "#FFAD0D",
      50: "#FFFAF2",
    },
    error: {
      main: "#CB2E27",
      50: "#FCF4F4",
    },
    success: {
      main: "#2A7E2E",
      500: "#2A7E2E",
      50: "#F4F8F4",
    },
    info: {
      main: "#0C6FBF",
      50: "#F2F7FB",
    },
    text: {
      primary: "#1C1C1C",
    },
    whiteBg: {
      500: "#F6F6F6",
    },
    dark: {
      900: "#050505",
      800: "#0B0B0B",
      700: "#101010",
      600: "#161616",
      500: "#1C1C1C",
      400: "#474747",
      300: "#727272",
      200: "#9D9D9D",
      100: "#C8C8C8",
      50: "#EFEFEF",
    },
  } as CustomPaletteOptions, // Cast to the extended type
});

export default theme;
