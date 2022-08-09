import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default MyApp;
