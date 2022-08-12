import {
  FormControl,
  FormErrorMessage,
  Checkbox as CCheck,
  CheckboxProps,
} from "@chakra-ui/react";

import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Link, Text } from "_lib/web";

interface ICheckboxProps extends CheckboxProps {
  is: string;
  label?: string;
  error?: FieldError;
  href?: string;
  textStyle: string | any
}

const CheckboxBase: ForwardRefRenderFunction<HTMLInputElement, ICheckboxProps>
  = ({ label, href, textStyle, is, error = null, ...rest }, ref) => {
    return (
      <FormControl w="100%" flexDirection={'column'} isInvalid={!!error}>
        <CCheck
          id={is}
          name={is}
          ref={ref}
          {...rest}
        >
          {!!label && !!href ? (
            <Link href={href}>
              <Text style={textStyle} text={label} />
            </Link>
          ) : !!label && <Text style={textStyle} text={label} />}
        </CCheck>

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </FormControl>
    );
  }

export const Checkbox = forwardRef(CheckboxBase);
