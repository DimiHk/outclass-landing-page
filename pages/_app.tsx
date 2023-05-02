import { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fontsource/open-sans/400.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";

config.autoAddCss = true;

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container
        minWidth={"full"}
        minHeight="100vh"
        backgroundColor={"blackAlpha.900"}
      >
        <Component suppressHydrationWarning={true} {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
