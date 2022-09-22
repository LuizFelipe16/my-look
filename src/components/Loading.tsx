import { Flex, Spinner } from "@chakra-ui/react";
import { onMount, useState } from "_lib/global";
import { TitlePage } from "_lib/web";
import { theme } from "_app";

type LoadingProps = {
  isUnmount?: boolean;
  unmount?: () => void;
};

export const Loading = ({ unmount, isUnmount = true}: LoadingProps) => {
  onMount(() => {
    if (unmount && isUnmount) {
      unmount()
    }
  })

  return (
    <Flex bg={theme.colors.background} w='100vw' h='100vh' justify='center' align='center'>
      <TitlePage t='Loading' />
      <Flex bg={theme.colors.primary} p='4' justify='center' align='center' borderRadius={9999}>
        <Spinner thickness='4px' speed="0.95s" size={'xl'} color={theme.colors.background} />
      </Flex>
    </Flex>
  );
};
