import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { ThemeProvider, UserProvider, AppStatusProvider } from 'context';
import { MyStylesGlobal } from 'styles/globals';
import { theme } from 'styles/theme';
import { AppStatus } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStatusProvider>
      <ThemeProvider>
        <UserProvider>
          <ChakraProvider theme={theme}>
            <MyStylesGlobal />
            <Component {...pageProps} />
            <AppStatus />
          </ChakraProvider>
        </UserProvider>
      </ThemeProvider>
    </AppStatusProvider>
  );
};

export default MyApp;
