import { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styled, { css } from "styled-components";
import { getHexTransparency, NumberZeroToHundred } from "_lib/global";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  style?: string | undefined | any;
  children?: ReactNode;
  onPress: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'reset' | 'submit';
  neonColor: string;
  density?: NumberZeroToHundred;
  neonTransparency?: NumberZeroToHundred;
}

export const ButtonNeon = (
  {
    children,
    style,
    onPress,
    neonColor,
    neonTransparency = 100,
    density = 20,
    type = 'button',
    ...rest
  }: ButtonProps
) => {
  const props = {
    neonColor: `${neonColor}${getHexTransparency(neonTransparency)}`,
    density,
  }

  return (
    <Button 
      className={style} 
      theme={props} 
      onClick={onPress} 
      {...rest}
    >
      {children}
    </Button>
  )
};

const Button = styled.button`
  box-shadow: 
    0 
    0 
    ${(props) => css`${props.theme.density}px`}
    ${(props) => css`${props.theme.neonColor}`}, 
    
    0 
    0 
    ${(props) => css`${props.theme.density * 2}px`}
    ${(props) => css`${props.theme.neonColor}`}, 
    
    0 
    0 
    ${(props) => css`${props.theme.density * 4}px`}
    ${(props) => css`${props.theme.neonColor}`}
`;
