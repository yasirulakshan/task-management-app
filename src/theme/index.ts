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
      500: "#0359E0",
      400: "#3278E5",
      300: "#6298EB",
      200: "#92B7F1",
      100: "#C2D7F7",
      50: "#F2F6FD",
    },
    secondary: {
      main: "#029FB3",
      900: "#00272C",
      800: "#014F59",
      700: "#017786",
      600: "#029FB3",
      500: "#03C7E0",
      400: "#32D1E5",
      300: "#62DCEB",
      200: "#92E6F1",
      100: "#C2F1F7",
      50: "#F2FCFD",
    },
    warning: {
      500: "#FFAD0D",
      50: "#FFFAF2",
    },
    error: {
      500: "#CB2E27",
      50: "#FCF4F4",
    },
    success: {
      500: "#2A7E2E",
      50: "#F4F8F4",
    },
    info: {
      500: "#0C6FBF",
      50: "#F2F7FB",
    },
    text: {
      primary: "#1C1C1C",
    },
    whiteBg: {
      500: "#F6F6F6",
    },
  } as CustomPaletteOptions, // Cast to the extended type
});

export default theme;
