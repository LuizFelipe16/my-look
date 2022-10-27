import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select as CInput,
  SelectProps as CInputProps
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";
import { capitalize, CapitalizeType, ReactChildren } from "_lib/global";

export type InputSelectOption = {
  text: string;
  value: any;
}

interface IInputProps extends CInputProps {
  is: string;
  label?: string;
  error?: FieldError;
  labelCapitalize?: CapitalizeType;
  children?: ReactChildren;
  options?: InputSelectOption[];
}

const InputSelectBase: ForwardRefRenderFunction<HTMLSelectElement, IInputProps>
  = ({ label, is, error = null, children, options, placeholder, labelCapitalize = 'first', ...rest }, ref) => {
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
          p="0"
          fontSize="sm"
          placeholder={capitalize(placeholder, 'first')}
          ref={ref}
          {...rest}
        >
          {options?.map((op) => <option key={op.value} value={op.value}>{op.text}</option>)}
          {children}
        </CInput>

        {!!error && <FormErrorMessage>{capitalize(error.message, 'sentence')}</FormErrorMessage>}
      </FormControl>
    );
  }

export const InputSelect = forwardRef(InputSelectBase);
