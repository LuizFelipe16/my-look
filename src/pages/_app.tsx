import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider, UserProvider } from 'context';
import { MyStylesGlobal } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        <UserProvider>
          <MyStylesGlobal />
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default MyApp;
