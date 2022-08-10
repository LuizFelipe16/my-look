import { ReactNode } from "react";
import { Spinner as ChakraSpinner, SpinnerProps as ChakraSpinnerProps } from "@chakra-ui/react";
import { myStylesProvider } from "../core/provider";

interface SpinnerProps extends ChakraSpinnerProps {
  style?: string | undefined | any;
  wrapperStyles?: string | undefined | any;
  h?: number;
  unity?: '%' | 'rem' | 'px';

  color: string;
  isLoading?: boolean;
}

export const Spinner = (
  {
    wrapperStyles,
    style,
    h,
    unity,
    color,
    isLoading = true,
    ...rest
  }: SpinnerProps
) => {

  if(!isLoading) return null

  return (
    <WrapperSpinner wrapperStyles={wrapperStyles}>
      <ChakraSpinner className={style} color={color} h={h} {...rest} />
    </WrapperSpinner>
  )
};

type WrapperSpinnerProps = {
  children: ReactNode;
  wrapperStyles?: string | undefined | any;
};

const WrapperSpinner = ({ children, wrapperStyles }: WrapperSpinnerProps) => {
  const WrapperSpinnerStyles = myStylesProvider.create((theme) => ([
    `
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    wrapperStyles,
  ]), 'div', false)

  return (
    <WrapperSpinnerStyles>
      {children}
    </WrapperSpinnerStyles>
  )
};
