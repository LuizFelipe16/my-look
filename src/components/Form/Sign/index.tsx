import { MouseEventHandler, ReactNode } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "_app";

interface ISignProps {
  title: string;
  description?: string;
  children: ReactNode;

  subtitle: string;
  onClick: MouseEventHandler<HTMLParagraphElement>;

  buttonText: string;
  onSubmitForm: any;

  isLoading: boolean;
}

export const Sign = (
  {
    title,
    children,
    onSubmitForm,
    buttonText,
    onClick,
    subtitle,
    description,
    isLoading
  }: ISignProps
) => (
  <Flex
    w={["100%", "100%", "100%"]}
    h="100%"
    align="center"
    justify="center"
    mt={["10", "10", "0"]}
  >
    <Flex
      data-aos="zoom-in"
      data-aos-duration="1000"
      as="form"
      onSubmit={onSubmitForm}
      w={["90%", "90%", "85%"]}
      zIndex="10"
      h="auto"
      minH="14rem"
      bg="white"
      p="6"
      boxShadow="md"
      borderRadius="lg"
      direction="column"
      align="flex-start"
      gap="1.2rem"
    >
      <Box flexDirection={'column'}>
        <Heading fontSize="lg" fontFamily={theme.font.typography.title} mb="3">{title}</Heading>
        <Text fontSize="sm" fontFamily={theme.font.typography.text}>{description}</Text>
      </Box>

      {children}

      <Button
        type="submit"
        fontFamily={theme.font.typography.text}
        fontSize="sm"
        isLoading={isLoading}
        marginTop="1.2rem"
        w="100%"
        size="md"
        bgColor={theme.colors.primary}
        color="white"
        fontWeight="400"
        transition="0.2s"
        _hover={{
          filter: "brightness(70%)"
        }}
      >
        {buttonText}
      </Button>

      <Text
        as="button"
        onClick={onClick}
        mt="2"
        fontFamily={theme.font.typography.text}
        textDecoration="underline"
        fontSize="sm"
        fontWeight="400"
        alignSelf="flex-end"
        cursor="pointer"
        _hover={{ textDecoration: 'none' }}
      >
        {subtitle}
      </Text>
    </Flex>
  </Flex>
);