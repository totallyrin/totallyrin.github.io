import { Source_Code_Pro } from "next/font/google";
import { createTheme } from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";

// const inter = Inter({subsets: ["latin"]});
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const theme = createTheme({
  fontFamily: `${sourceCodePro.style.fontFamily}, sans-serif`,
  // primaryShade: 6,
  autoContrast: true,
  defaultRadius: "md",
  defaultGradient: {
    from: pinkie,
    to: sunflower,
    deg: 90,
  },
  components: {
    Highlight: {
      defaultProps: {
        highlightStyles: {
          backgroundImage: `linear-gradient(90deg, ${pinkie}, ${sunflower})`,
          fontWeight: 700,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      },
    },
  },
  colors: {
    sunflower: [
      "#FFE8C2",
      "#FFE0AD",
      "#FFD899",
      "#FFD085",
      "#FFC66D",
      "#FFC05C",
      "#FFB947",
      "#FFB133",
      "#FFA91F",
      "#FFEFD6",
    ],
    pinkie: [
      "#FFE6E6",
      "#FFCCCC",
      "#FFB3B3",
      "#FF9999",
      "#FF8080",
      "#FC6471",
      "#FC5D5D",
      "#FC5151",
      "#FC4747",
      "#FC3D3D",
    ],
  },
});
