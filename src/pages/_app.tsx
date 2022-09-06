import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider, UserProvider } from 'context';
import { MyStylesGlobal } from 'styles/globals';
import { theme } from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ChakraProvider theme={theme} resetCSS>
        <UserProvider>
          <MyStylesGlobal />
          <Component {...pageProps} />
        </UserProvider>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default MyApp;
