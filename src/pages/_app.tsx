import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context';
import { GlobalStyle } from '../styles/globals';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default MyApp;
