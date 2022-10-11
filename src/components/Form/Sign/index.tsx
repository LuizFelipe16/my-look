import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "_app";
import { myStyles } from "_lib/web";
import { FaGoogle } from "react-icons/fa";
import { ClickElement, ReactChildren, ReactComponent } from "_lib/global";

interface ISignProps {
  title?: string;
  description?: string;
  children: ReactChildren;

  subtitle?: string;
  onClick?: ClickElement<HTMLParagraphElement>;

  buttonText: string | ReactComponent;
  onSubmitForm: any;

  isLoading: boolean;

  isSigninGoogle?: boolean;
  onSubmitSigninGoogle?: any;

  formW?: Array<string>;
}

export interface ISignInProps {
  onClickNotHaveAccount: ClickElement<HTMLParagraphElement>;
}

export interface ISignUpProps {
  onClickAlreadyHaveAccount: ClickElement<HTMLParagraphElement>;
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
    isSigninGoogle = false,
    onSubmitSigninGoogle,
    formW
  }: ISignProps
) => (
  <SignStyles>
    <Flex
      data-aos="zoom-in"
      data-aos-duration="1000"
      as="form"
      onSubmit={onSubmitForm}
      w={formW || ["90%", "90%", "85%"]}
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
      {title && (
        <Box flexDirection={'column'}>
          <Heading fontSize="lg" mb="3" fontFamily={`'Poppins', sans-serif`}>{title}</Heading>
          <Text fontSize="sm" fontFamily={`'Poppins', sans-serif`}>{description}</Text>
        </Box>
      )}

      {children}

      <Flex w="100%" flexDirection={'column'} marginTop="1.2rem" gap="1rem">
        {isSigninGoogle && (
          <Button
            type="button"
            onClick={onSubmitSigninGoogle}
            fontSize="sm"
            fontFamily={`'Poppins', sans-serif`}
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
            Signin with Google
          </Button>
        )}
        <Button
          type="submit"
          fontSize="sm"
          fontFamily={`'Poppins', sans-serif`}
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

      {subtitle && (
        <Text
          as="button"
          onClick={onClick}
          mt="2"
          type='button'
          textDecoration="underline"
          fontSize="sm"
          fontWeight="400"
          fontFamily={`'Poppins', sans-serif`}
          alignSelf="flex-end"
          cursor="pointer"
          _hover={{ textDecoration: 'none' }}
        >
          {subtitle}
        </Text>
      )}
    </Flex>
  </SignStyles>
);

const SignStyles = myStyles.create(theme => ([
  theme.w.fill(),
  theme.h.fill(),
  theme.centerColumn,

  theme.myStyles.create('signup-terms-conditions', [
    theme.font.apply('rg', 0.9, theme.font.typography.text, theme.colors.grayLight),
    theme.effect.hover.inOwn([theme.font.style.underline])
  ]),
]), 'div');
