import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider, UserProvider } from 'context';
import { GlobalStyle } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <UserProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default MyApp;
