import { extendTheme } from "@chakra-ui/react";
import { appColors } from "_app";

export const theme = extendTheme({
  colors: {
    ...appColors
  }
});
