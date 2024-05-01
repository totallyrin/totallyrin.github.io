import { createTheme } from "@mui/material";
import { bg, sunflower } from "./utils";

const sunflowerPalette = {
  50: "#FFEFD6",
  100: "#FFE8C2",
  200: "#FFE0AD",
  300: "#FFD899",
  400: "#FFD085",
  500: "#FFC66D",
  600: "#FFC05C",
  700: "#FFB947",
  800: "#FFB133",
  900: "#FFA91F",
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: sunflowerPalette[500],
      light: sunflowerPalette[300],
      dark: sunflowerPalette[700],
    },
    background: {
      default: bg,
    },
    text: {
      primary: bg,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: sunflower,
            color: bg,
          },
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            borderColor: sunflower,
            "&:hover": {
              backgroundColor: sunflower,
              color: bg,
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            "&:hover": {
              backgroundColor: sunflower,
              color: bg,
            },
          },
        },
      ],
    },
  },
});
