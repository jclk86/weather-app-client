import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
      body: {
        backgroundImage: "linear-gradient(#7ef7eb, #7ed5f7)",
        backgroundSize: "100%",
        overflow: "hidden",
      },
    },
  },
  chakraTheme,
  breakpoints,
});

export default theme;
