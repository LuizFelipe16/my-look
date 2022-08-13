import { MouseEventHandler, ReactNode } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "_app";
import { myStylesProvider } from "_lib/web";
import { FaGoogle } from "react-icons/fa";

interface ISignProps {
  title: string;
  description?: string;
  children: ReactNode;

  subtitle: string;
  onClick: MouseEventHandler<HTMLParagraphElement>;

  buttonText: string;
  onSubmitForm: any;

  isLoading: boolean;

  isSigninGoogle?: boolean;
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
    isLoading,
    isSigninGoogle = false
  }: ISignProps
) => (
  <SignStyles>
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

      <Flex w="100%" flexDirection={'column'} marginTop="1.2rem" gap="1rem">
        {isSigninGoogle && (
          <Button
            type="button"
            fontFamily={theme.font.typography.text}
            fontSize="sm"
            isLoading={isLoading}
            w="100%"
            size="md"
            bgColor={theme.colors.googleBlue}
            color="white"
            fontWeight="400"
            transition="0.2s"
            gap="0.4rem"
            _hover={{
              filter: "brightness(70%)"
            }}
          >
            <FaGoogle />
            Sign with Google
          </Button>
        )}
        <Button
          type="submit"
          fontFamily={theme.font.typography.text}
          fontSize="sm"
          isLoading={isLoading}
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
      </Flex>

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
  </SignStyles>
);

const SignStyles = myStylesProvider.create(theme => ([
  theme.w.fill(),
  theme.h.fill(),
  theme.centerColumn,

  theme.myStyles.create('signup-terms-conditions', [
    theme.font.apply('rg', 0.9, theme.font.typography.text, theme.colors.grayLight),
    theme.effect.hover.inOwn([theme.font.style.underline])
  ]),
]), 'div');
