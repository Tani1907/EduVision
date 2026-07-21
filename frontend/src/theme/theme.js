import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563EB",
    },
    secondary: {
      main: "#1E40AF",
    },
    background: {
      default: "#F4F7FE",
      paper: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;