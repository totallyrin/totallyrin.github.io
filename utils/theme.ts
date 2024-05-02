import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { bg, sunflower } from "./utils";

export const theme = extendTheme({
  global: {
    body: {
      bg: bg,
      color: sunflower,
    },
  },
  colors: {
    sunflower: {
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
    },
    pinkie: {
      50: "#FFE6E6",
      100: "#FFCCCC",
      200: "#FFB3B3",
      300: "#FF9999",
      400: "#FF8080",
      500: "#FC6471",
      600: "#FC5D5D",
      700: "#FC5151",
      800: "#FC4747",
      900: "#FC3D3D",
    },
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: sunflower,
          color: bg,
        },
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          border: "2px solid",
          borderColor: props.theme.colors[props.colorScheme][500],
          _hover: {
            bg: props.theme.colors[props.colorScheme][500],
            color: bg,
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          _hover: {
            bg: props.theme.colors[props.colorScheme][500],
            color: bg,
          },
        }),
      },
      defaultProps: {
        colorScheme: "sunflower",
        variant: "outline",
      },
    },
    IconButton: {
      baseStyle: {
        _hover: {
          bg: sunflower,
          color: bg,
        },
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          border: "2px solid",
          _hover: {
            borderColor: props.theme.colors[props.colorScheme][500],
            bg: props.theme.colors[props.colorScheme][500],
            color: bg,
          },
        }),
        ghost: (props: StyleFunctionProps) => ({
          _hover: {
            bg: props.theme.colors[props.colorScheme][500],
            color: bg,
          },
        }),
      },
      defaultProps: {
        colorScheme: "sunflower",
        variant: "outline",
      },
    },
  },
});
