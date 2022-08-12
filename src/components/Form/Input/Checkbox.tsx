import {
  FormControl,
  FormErrorMessage,
  Checkbox as CCheck,
  CheckboxProps,
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Text } from "_lib/web";

interface ICheckboxProps extends CheckboxProps {
  is: string;
  label?: string;
  error?: FieldError;
  textStyle: string | any
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement, ICheckboxProps>
  = ({ label, textStyle, is, error = null, ...rest }, ref) => {
    return (
      <FormControl w="100%" flexDirection={'column'} isInvalid={!!error}>
        <CCheck
          id={is}
          name={is}
          ref={ref}
          {...rest}
        >
          {!!label && <Text style={textStyle} text={label} />}
        </CCheck>

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }

export const Checkbox = forwardRef(CheckboxBase);
