import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  InputProps as CInputProps
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { theme } from "_app";

interface IInputProps extends CInputProps {
  is: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps>
  = ({ label, is, error = null, ...rest }, ref) => {
    return (
      <FormControl w="100%" flexDirection={'column'} isInvalid={!!error}>
        {!!label && (
          <FormLabel
            fontWeight="400"
            fontSize={'sm'}
            // fontFamily={'Poppins'}
            color="black"
            htmlFor={is}
          >
            {label}
          </FormLabel>
        )}

        <CInput
          id={is}
          name={is}
          // fontFamily={'Poppins'}
          focusBorderColor="gray.400"
          variant="filled"
          borderRadius={4}
          p="5"
          fontSize="sm"
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);