import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as CTextarea,
  TextareaProps as CTextareaProps
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { capitalize, CapitalizeType } from "_lib/global";

interface ITextareaProps extends CTextareaProps {
  is: string;
  label?: string;
  error?: FieldError;
  labelCapitalize?: CapitalizeType;
}

const TextareaBase: ForwardRefRenderFunction<HTMLTextAreaElement, ITextareaProps>
  = ({ label, is, error = null, placeholder, labelCapitalize = 'first', ...rest }, ref) => {
    return (
      <FormControl w="100%" flexDirection={'column'} isInvalid={!!error}>
        {!!label && (
          <FormLabel
            fontWeight="400"
            color="black"
            htmlFor={is}
          >
            {capitalize(label, labelCapitalize)}
          </FormLabel>
        )}

        <CTextarea
          id={is}
          name={is}
          focusBorderColor="gray.400"
          fontFamily={`'Poppins', sans-serif`}
          variant="filled"
          borderRadius={4}
          p="5"
          fontSize="sm"
          size="sm"
          placeholder={capitalize(placeholder, 'first')}
          ref={ref}
          {...rest}
        />

        {!!error && <FormErrorMessage>{capitalize(error.message, 'sentence')}</FormErrorMessage>}
      </FormControl>
    );
  }

export const Textarea = forwardRef(TextareaBase);
