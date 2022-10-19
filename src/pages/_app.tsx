import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { AppProvider } from 'context';
import { MyStylesGlobal } from 'styles/globals';
import { theme } from 'styles/theme';
import { AppStatus, GlobalModals } from 'components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <ChakraProvider theme={theme}>
        <MyStylesGlobal />
        <GlobalModals />
        <AppStatus />
        <Component {...pageProps} />
      </ChakraProvider>
    </AppProvider>
  );
};

export default MyApp;
