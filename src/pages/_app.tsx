import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { AppProvider } from 'context';
import { MyStylesGlobal } from 'styles/globals';
import { theme } from 'styles/theme';
import { AppStatus } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <MyStylesGlobal />
        <Component {...pageProps} />
        <AppStatus />
      </ChakraProvider>
    </AppProvider>
  );
};

export default MyApp;
