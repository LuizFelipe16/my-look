import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as CInput,
  InputProps as CInputProps
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { capitalize, CapitalizeType } from "_lib/global";

interface IInputProps extends CInputProps {
  is: string;
  label?: string;
  error?: FieldError;
  labelCapitalize?: CapitalizeType;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps>
  = ({ label, is, error = null, placeholder, labelCapitalize = 'first', ...rest }, ref) => {
    return (
      <FormControl w="100%" flexDirection={'column'} isInvalid={!!error}>
        {!!label && (
          <FormLabel
            fontWeight="400"
            fontSize={'sm'}
            fontFamily={`'Poppins', sans-serif`}
            color="black"
            htmlFor={is}
          >
            {capitalize(label, labelCapitalize)}
          </FormLabel>
        )}

        <CInput
          id={is}
          name={is}
          fontFamily={`'Poppins', sans-serif`}
          focusBorderColor="gray.400"
          variant="filled"
          borderRadius={4}
          p="5"
          fontSize="sm"
          placeholder={capitalize(placeholder, 'first')}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{capitalize(error.message, 'sentence')}</FormErrorMessage>}
      </FormControl>
    );
  }

export const Input = forwardRef(InputBase);
