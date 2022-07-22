import { Flex, Spinner } from "@chakra-ui/react";
import { theme } from "../_app";

export function Loading() {
  return (
    <Flex bg={theme.colors.primary} w='100vw' h='100vh' justify='center' align='center'>
      <Spinner size={'xl'} color={theme.colors.text} />
    </Flex>
  );
}
