import { Flex, Spinner } from "@chakra-ui/react";
import { theme } from "../_app";
import { TitlePage } from "../_lib/web";

export const Loading = () => (
  <Flex bg={theme.colors.background} w='100vw' h='100vh' justify='center' align='center'>
    <TitlePage t='Loading' />
    <Spinner size={'xl'} color={theme.colors.primary} />
  </Flex>
);
