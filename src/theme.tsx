import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
  heading:
    "Cal Sans,-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  body: "Inter, -apple-system,BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
  mono: "SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
