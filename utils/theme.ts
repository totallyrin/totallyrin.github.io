import {defineStyleConfig, extendTheme} from "@chakra-ui/react";
import {bg} from "./utils";

const Button = defineStyleConfig({})

export const theme = extendTheme({
  global: {
    body: {
      bg: bg
    }
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
    }
  },
  components: {}
})