import { extendTheme } from "@chakra-ui/react";

//serve para substituir os temas do chakra

export const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.900",
      },
    },
  },
});
