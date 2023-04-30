import { AppProps } from "next/app";
import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/open-sans/400.css";

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
